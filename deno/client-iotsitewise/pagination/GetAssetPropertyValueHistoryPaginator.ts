
import { IoTSiteWise } from "../IoTSiteWise.ts";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient.ts";
import {
  GetAssetPropertyValueHistoryCommand,
  GetAssetPropertyValueHistoryCommandInput,
  GetAssetPropertyValueHistoryCommandOutput,
} from "../commands/GetAssetPropertyValueHistoryCommand.ts";
import { IoTSiteWisePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: IoTSiteWiseClient,
  input: GetAssetPropertyValueHistoryCommandInput,
  ...args: any
): Promise<GetAssetPropertyValueHistoryCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetAssetPropertyValueHistoryCommand(input), ...args);
};
const makePagedRequest = async (
  client: IoTSiteWise,
  input: GetAssetPropertyValueHistoryCommandInput,
  ...args: any
): Promise<GetAssetPropertyValueHistoryCommandOutput> => {
  // @ts-ignore
  return await client.getAssetPropertyValueHistory(input, ...args);
};
export async function* paginateGetAssetPropertyValueHistory(
  config: IoTSiteWisePaginationConfiguration,
  input: GetAssetPropertyValueHistoryCommandInput,
  ...additionalArguments: any
): Paginator<GetAssetPropertyValueHistoryCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetAssetPropertyValueHistoryCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof IoTSiteWise) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IoTSiteWiseClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoTSiteWise | IoTSiteWiseClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
