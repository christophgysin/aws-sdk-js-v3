import { QuickSight } from "../QuickSight.ts";
import { QuickSightClient } from "../QuickSightClient.ts";
import {
  ListDataSourcesCommand,
  ListDataSourcesCommandInput,
  ListDataSourcesCommandOutput,
} from "../commands/ListDataSourcesCommand.ts";
import { QuickSightPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: QuickSightClient,
  input: ListDataSourcesCommandInput,
  ...args: any
): Promise<ListDataSourcesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDataSourcesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: QuickSight,
  input: ListDataSourcesCommandInput,
  ...args: any
): Promise<ListDataSourcesCommandOutput> => {
  // @ts-ignore
  return await client.listDataSources(input, ...args);
};
export async function* paginateListDataSources(
  config: QuickSightPaginationConfiguration,
  input: ListDataSourcesCommandInput,
  ...additionalArguments: any
): Paginator<ListDataSourcesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDataSourcesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof QuickSight) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof QuickSightClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected QuickSight | QuickSightClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
