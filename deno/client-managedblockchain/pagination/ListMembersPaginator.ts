import { ManagedBlockchain } from "../ManagedBlockchain.ts";
import { ManagedBlockchainClient } from "../ManagedBlockchainClient.ts";
import { ListMembersCommand, ListMembersCommandInput, ListMembersCommandOutput } from "../commands/ListMembersCommand.ts";
import { ManagedBlockchainPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ManagedBlockchainClient,
  input: ListMembersCommandInput,
  ...args: any
): Promise<ListMembersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListMembersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ManagedBlockchain,
  input: ListMembersCommandInput,
  ...args: any
): Promise<ListMembersCommandOutput> => {
  // @ts-ignore
  return await client.listMembers(input, ...args);
};
export async function* paginateListMembers(
  config: ManagedBlockchainPaginationConfiguration,
  input: ListMembersCommandInput,
  ...additionalArguments: any
): Paginator<ListMembersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListMembersCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ManagedBlockchain) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ManagedBlockchainClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ManagedBlockchain | ManagedBlockchainClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
