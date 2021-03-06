import { IoTWireless } from "../IoTWireless.ts";
import { IoTWirelessClient } from "../IoTWirelessClient.ts";
import {
  ListDeviceProfilesCommand,
  ListDeviceProfilesCommandInput,
  ListDeviceProfilesCommandOutput,
} from "../commands/ListDeviceProfilesCommand.ts";
import { IoTWirelessPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IoTWirelessClient,
  input: ListDeviceProfilesCommandInput,
  ...args: any
): Promise<ListDeviceProfilesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDeviceProfilesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IoTWireless,
  input: ListDeviceProfilesCommandInput,
  ...args: any
): Promise<ListDeviceProfilesCommandOutput> => {
  // @ts-ignore
  return await client.listDeviceProfiles(input, ...args);
};
export async function* paginateListDeviceProfiles(
  config: IoTWirelessPaginationConfiguration,
  input: ListDeviceProfilesCommandInput,
  ...additionalArguments: any
): Paginator<ListDeviceProfilesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDeviceProfilesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof IoTWireless) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IoTWirelessClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoTWireless | IoTWirelessClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
