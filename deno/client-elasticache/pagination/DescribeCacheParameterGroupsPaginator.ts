import { ElastiCache } from "../ElastiCache.ts";
import { ElastiCacheClient } from "../ElastiCacheClient.ts";
import {
  DescribeCacheParameterGroupsCommand,
  DescribeCacheParameterGroupsCommandInput,
  DescribeCacheParameterGroupsCommandOutput,
} from "../commands/DescribeCacheParameterGroupsCommand.ts";
import { ElastiCachePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ElastiCacheClient,
  input: DescribeCacheParameterGroupsCommandInput,
  ...args: any
): Promise<DescribeCacheParameterGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeCacheParameterGroupsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ElastiCache,
  input: DescribeCacheParameterGroupsCommandInput,
  ...args: any
): Promise<DescribeCacheParameterGroupsCommandOutput> => {
  // @ts-ignore
  return await client.describeCacheParameterGroups(input, ...args);
};
export async function* paginateDescribeCacheParameterGroups(
  config: ElastiCachePaginationConfiguration,
  input: DescribeCacheParameterGroupsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeCacheParameterGroupsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeCacheParameterGroupsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof ElastiCache) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ElastiCacheClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ElastiCache | ElastiCacheClient");
    }
    yield page;
    token = page.Marker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
