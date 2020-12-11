import { CloudTrail } from "../CloudTrail.ts";
import { CloudTrailClient } from "../CloudTrailClient.ts";
import {
  ListPublicKeysCommand,
  ListPublicKeysCommandInput,
  ListPublicKeysCommandOutput,
} from "../commands/ListPublicKeysCommand.ts";
import { CloudTrailPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CloudTrailClient,
  input: ListPublicKeysCommandInput,
  ...args: any
): Promise<ListPublicKeysCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPublicKeysCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: CloudTrail,
  input: ListPublicKeysCommandInput,
  ...args: any
): Promise<ListPublicKeysCommandOutput> => {
  // @ts-ignore
  return await client.listPublicKeys(input, ...args);
};
export async function* paginateListPublicKeys(
  config: CloudTrailPaginationConfiguration,
  input: ListPublicKeysCommandInput,
  ...additionalArguments: any
): Paginator<ListPublicKeysCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPublicKeysCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    if (config.client instanceof CloudTrail) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CloudTrailClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudTrail | CloudTrailClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
