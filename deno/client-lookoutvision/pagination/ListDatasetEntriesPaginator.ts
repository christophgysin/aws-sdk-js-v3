import { LookoutVision } from "../LookoutVision.ts";
import { LookoutVisionClient } from "../LookoutVisionClient.ts";
import {
  ListDatasetEntriesCommand,
  ListDatasetEntriesCommandInput,
  ListDatasetEntriesCommandOutput,
} from "../commands/ListDatasetEntriesCommand.ts";
import { LookoutVisionPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: LookoutVisionClient,
  input: ListDatasetEntriesCommandInput,
  ...args: any
): Promise<ListDatasetEntriesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDatasetEntriesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: LookoutVision,
  input: ListDatasetEntriesCommandInput,
  ...args: any
): Promise<ListDatasetEntriesCommandOutput> => {
  // @ts-ignore
  return await client.listDatasetEntries(input, ...args);
};
export async function* paginateListDatasetEntries(
  config: LookoutVisionPaginationConfiguration,
  input: ListDatasetEntriesCommandInput,
  ...additionalArguments: any
): Paginator<ListDatasetEntriesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDatasetEntriesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof LookoutVision) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof LookoutVisionClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected LookoutVision | LookoutVisionClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
