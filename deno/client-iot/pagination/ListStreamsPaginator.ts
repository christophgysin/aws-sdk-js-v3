import { IoT } from "../IoT.ts";
import { IoTClient } from "../IoTClient.ts";
import { ListStreamsCommand, ListStreamsCommandInput, ListStreamsCommandOutput } from "../commands/ListStreamsCommand.ts";
import { IoTPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IoTClient,
  input: ListStreamsCommandInput,
  ...args: any
): Promise<ListStreamsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListStreamsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IoT,
  input: ListStreamsCommandInput,
  ...args: any
): Promise<ListStreamsCommandOutput> => {
  // @ts-ignore
  return await client.listStreams(input, ...args);
};
export async function* paginateListStreams(
  config: IoTPaginationConfiguration,
  input: ListStreamsCommandInput,
  ...additionalArguments: any
): Paginator<ListStreamsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListStreamsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof IoT) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IoTClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoT | IoTClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
