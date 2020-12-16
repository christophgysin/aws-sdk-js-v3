import { StorageGateway } from "../StorageGateway.ts";
import { StorageGatewayClient } from "../StorageGatewayClient.ts";
import {
  DescribeVTLDevicesCommand,
  DescribeVTLDevicesCommandInput,
  DescribeVTLDevicesCommandOutput,
} from "../commands/DescribeVTLDevicesCommand.ts";
import { StorageGatewayPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: StorageGatewayClient,
  input: DescribeVTLDevicesCommandInput,
  ...args: any
): Promise<DescribeVTLDevicesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeVTLDevicesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: StorageGateway,
  input: DescribeVTLDevicesCommandInput,
  ...args: any
): Promise<DescribeVTLDevicesCommandOutput> => {
  // @ts-ignore
  return await client.describeVTLDevices(input, ...args);
};
export async function* paginateDescribeVTLDevices(
  config: StorageGatewayPaginationConfiguration,
  input: DescribeVTLDevicesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeVTLDevicesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeVTLDevicesCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof StorageGateway) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof StorageGatewayClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected StorageGateway | StorageGatewayClient");
    }
    yield page;
    token = page.Marker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
