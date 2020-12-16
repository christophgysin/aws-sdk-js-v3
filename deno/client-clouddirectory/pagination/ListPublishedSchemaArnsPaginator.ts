import { CloudDirectory } from "../CloudDirectory.ts";
import { CloudDirectoryClient } from "../CloudDirectoryClient.ts";
import {
  ListPublishedSchemaArnsCommand,
  ListPublishedSchemaArnsCommandInput,
  ListPublishedSchemaArnsCommandOutput,
} from "../commands/ListPublishedSchemaArnsCommand.ts";
import { CloudDirectoryPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CloudDirectoryClient,
  input: ListPublishedSchemaArnsCommandInput,
  ...args: any
): Promise<ListPublishedSchemaArnsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPublishedSchemaArnsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: CloudDirectory,
  input: ListPublishedSchemaArnsCommandInput,
  ...args: any
): Promise<ListPublishedSchemaArnsCommandOutput> => {
  // @ts-ignore
  return await client.listPublishedSchemaArns(input, ...args);
};
export async function* paginateListPublishedSchemaArns(
  config: CloudDirectoryPaginationConfiguration,
  input: ListPublishedSchemaArnsCommandInput,
  ...additionalArguments: any
): Paginator<ListPublishedSchemaArnsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPublishedSchemaArnsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof CloudDirectory) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CloudDirectoryClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudDirectory | CloudDirectoryClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
