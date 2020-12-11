import { IoT } from "../IoT.ts";
import { IoTClient } from "../IoTClient.ts";
import {
  ListJobExecutionsForJobCommand,
  ListJobExecutionsForJobCommandInput,
  ListJobExecutionsForJobCommandOutput,
} from "../commands/ListJobExecutionsForJobCommand.ts";
import { IoTPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IoTClient,
  input: ListJobExecutionsForJobCommandInput,
  ...args: any
): Promise<ListJobExecutionsForJobCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListJobExecutionsForJobCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IoT,
  input: ListJobExecutionsForJobCommandInput,
  ...args: any
): Promise<ListJobExecutionsForJobCommandOutput> => {
  // @ts-ignore
  return await client.listJobExecutionsForJob(input, ...args);
};
export async function* paginateListJobExecutionsForJob(
  config: IoTPaginationConfiguration,
  input: ListJobExecutionsForJobCommandInput,
  ...additionalArguments: any
): Paginator<ListJobExecutionsForJobCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListJobExecutionsForJobCommandOutput;
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
