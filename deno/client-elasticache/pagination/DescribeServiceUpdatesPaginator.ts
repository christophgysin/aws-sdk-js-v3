import { ElastiCache } from "../ElastiCache.ts";
import { ElastiCacheClient } from "../ElastiCacheClient.ts";
import {
  DescribeServiceUpdatesCommand,
  DescribeServiceUpdatesCommandInput,
  DescribeServiceUpdatesCommandOutput,
} from "../commands/DescribeServiceUpdatesCommand.ts";
import { ElastiCachePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ElastiCacheClient,
  input: DescribeServiceUpdatesCommandInput,
  ...args: any
): Promise<DescribeServiceUpdatesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeServiceUpdatesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ElastiCache,
  input: DescribeServiceUpdatesCommandInput,
  ...args: any
): Promise<DescribeServiceUpdatesCommandOutput> => {
  // @ts-ignore
  return await client.describeServiceUpdates(input, ...args);
};
export async function* paginateDescribeServiceUpdates(
  config: ElastiCachePaginationConfiguration,
  input: DescribeServiceUpdatesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeServiceUpdatesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeServiceUpdatesCommandOutput;
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
