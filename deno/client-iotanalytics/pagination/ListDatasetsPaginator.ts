
import { IoTAnalytics } from "../IoTAnalytics.ts";
import { IoTAnalyticsClient } from "../IoTAnalyticsClient.ts";
import {
  ListDatasetsCommand,
  ListDatasetsCommandInput,
  ListDatasetsCommandOutput,
} from "../commands/ListDatasetsCommand.ts";
import { IoTAnalyticsPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: IoTAnalyticsClient,
  input: ListDatasetsCommandInput,
  ...args: any
): Promise<ListDatasetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDatasetsCommand(input), ...args);
};
const makePagedRequest = async (
  client: IoTAnalytics,
  input: ListDatasetsCommandInput,
  ...args: any
): Promise<ListDatasetsCommandOutput> => {
  // @ts-ignore
  return await client.listDatasets(input, ...args);
};
export async function* paginateListDatasets(
  config: IoTAnalyticsPaginationConfiguration,
  input: ListDatasetsCommandInput,
  ...additionalArguments: any
): Paginator<ListDatasetsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDatasetsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof IoTAnalytics) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IoTAnalyticsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoTAnalytics | IoTAnalyticsClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
