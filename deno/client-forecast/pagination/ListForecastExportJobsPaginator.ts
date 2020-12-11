import { Forecast } from "../Forecast.ts";
import { ForecastClient } from "../ForecastClient.ts";
import {
  ListForecastExportJobsCommand,
  ListForecastExportJobsCommandInput,
  ListForecastExportJobsCommandOutput,
} from "../commands/ListForecastExportJobsCommand.ts";
import { ForecastPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ForecastClient,
  input: ListForecastExportJobsCommandInput,
  ...args: any
): Promise<ListForecastExportJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListForecastExportJobsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Forecast,
  input: ListForecastExportJobsCommandInput,
  ...args: any
): Promise<ListForecastExportJobsCommandOutput> => {
  // @ts-ignore
  return await client.listForecastExportJobs(input, ...args);
};
export async function* paginateListForecastExportJobs(
  config: ForecastPaginationConfiguration,
  input: ListForecastExportJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListForecastExportJobsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListForecastExportJobsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Forecast) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ForecastClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Forecast | ForecastClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
