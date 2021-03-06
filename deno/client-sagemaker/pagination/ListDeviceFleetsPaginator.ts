import { SageMaker } from "../SageMaker.ts";
import { SageMakerClient } from "../SageMakerClient.ts";
import {
  ListDeviceFleetsCommand,
  ListDeviceFleetsCommandInput,
  ListDeviceFleetsCommandOutput,
} from "../commands/ListDeviceFleetsCommand.ts";
import { SageMakerPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SageMakerClient,
  input: ListDeviceFleetsCommandInput,
  ...args: any
): Promise<ListDeviceFleetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDeviceFleetsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SageMaker,
  input: ListDeviceFleetsCommandInput,
  ...args: any
): Promise<ListDeviceFleetsCommandOutput> => {
  // @ts-ignore
  return await client.listDeviceFleets(input, ...args);
};
export async function* paginateListDeviceFleets(
  config: SageMakerPaginationConfiguration,
  input: ListDeviceFleetsCommandInput,
  ...additionalArguments: any
): Paginator<ListDeviceFleetsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDeviceFleetsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SageMaker) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SageMakerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SageMaker | SageMakerClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
