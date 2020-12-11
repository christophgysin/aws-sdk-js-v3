import { Athena } from "../Athena.ts";
import { AthenaClient } from "../AthenaClient.ts";
import {
  ListNamedQueriesCommand,
  ListNamedQueriesCommandInput,
  ListNamedQueriesCommandOutput,
} from "../commands/ListNamedQueriesCommand.ts";
import { AthenaPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: AthenaClient,
  input: ListNamedQueriesCommandInput,
  ...args: any
): Promise<ListNamedQueriesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListNamedQueriesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Athena,
  input: ListNamedQueriesCommandInput,
  ...args: any
): Promise<ListNamedQueriesCommandOutput> => {
  // @ts-ignore
  return await client.listNamedQueries(input, ...args);
};
export async function* paginateListNamedQueries(
  config: AthenaPaginationConfiguration,
  input: ListNamedQueriesCommandInput,
  ...additionalArguments: any
): Paginator<ListNamedQueriesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListNamedQueriesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Athena) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AthenaClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Athena | AthenaClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
