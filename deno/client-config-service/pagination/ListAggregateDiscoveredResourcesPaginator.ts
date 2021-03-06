import { ConfigService } from "../ConfigService.ts";
import { ConfigServiceClient } from "../ConfigServiceClient.ts";
import {
  ListAggregateDiscoveredResourcesCommand,
  ListAggregateDiscoveredResourcesCommandInput,
  ListAggregateDiscoveredResourcesCommandOutput,
} from "../commands/ListAggregateDiscoveredResourcesCommand.ts";
import { ConfigServicePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ConfigServiceClient,
  input: ListAggregateDiscoveredResourcesCommandInput,
  ...args: any
): Promise<ListAggregateDiscoveredResourcesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAggregateDiscoveredResourcesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ConfigService,
  input: ListAggregateDiscoveredResourcesCommandInput,
  ...args: any
): Promise<ListAggregateDiscoveredResourcesCommandOutput> => {
  // @ts-ignore
  return await client.listAggregateDiscoveredResources(input, ...args);
};
export async function* paginateListAggregateDiscoveredResources(
  config: ConfigServicePaginationConfiguration,
  input: ListAggregateDiscoveredResourcesCommandInput,
  ...additionalArguments: any
): Paginator<ListAggregateDiscoveredResourcesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAggregateDiscoveredResourcesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof ConfigService) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ConfigServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ConfigService | ConfigServiceClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
