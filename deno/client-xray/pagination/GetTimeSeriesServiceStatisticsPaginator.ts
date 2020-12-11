import { XRay } from "../XRay.ts";
import { XRayClient } from "../XRayClient.ts";
import {
  GetTimeSeriesServiceStatisticsCommand,
  GetTimeSeriesServiceStatisticsCommandInput,
  GetTimeSeriesServiceStatisticsCommandOutput,
} from "../commands/GetTimeSeriesServiceStatisticsCommand.ts";
import { XRayPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: XRayClient,
  input: GetTimeSeriesServiceStatisticsCommandInput,
  ...args: any
): Promise<GetTimeSeriesServiceStatisticsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetTimeSeriesServiceStatisticsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: XRay,
  input: GetTimeSeriesServiceStatisticsCommandInput,
  ...args: any
): Promise<GetTimeSeriesServiceStatisticsCommandOutput> => {
  // @ts-ignore
  return await client.getTimeSeriesServiceStatistics(input, ...args);
};
export async function* paginateGetTimeSeriesServiceStatistics(
  config: XRayPaginationConfiguration,
  input: GetTimeSeriesServiceStatisticsCommandInput,
  ...additionalArguments: any
): Paginator<GetTimeSeriesServiceStatisticsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetTimeSeriesServiceStatisticsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    if (config.client instanceof XRay) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof XRayClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected XRay | XRayClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
