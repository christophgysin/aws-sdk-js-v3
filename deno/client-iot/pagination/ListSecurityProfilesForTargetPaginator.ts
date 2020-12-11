import { IoT } from "../IoT.ts";
import { IoTClient } from "../IoTClient.ts";
import {
  ListSecurityProfilesForTargetCommand,
  ListSecurityProfilesForTargetCommandInput,
  ListSecurityProfilesForTargetCommandOutput,
} from "../commands/ListSecurityProfilesForTargetCommand.ts";
import { IoTPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IoTClient,
  input: ListSecurityProfilesForTargetCommandInput,
  ...args: any
): Promise<ListSecurityProfilesForTargetCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSecurityProfilesForTargetCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IoT,
  input: ListSecurityProfilesForTargetCommandInput,
  ...args: any
): Promise<ListSecurityProfilesForTargetCommandOutput> => {
  // @ts-ignore
  return await client.listSecurityProfilesForTarget(input, ...args);
};
export async function* paginateListSecurityProfilesForTarget(
  config: IoTPaginationConfiguration,
  input: ListSecurityProfilesForTargetCommandInput,
  ...additionalArguments: any
): Paginator<ListSecurityProfilesForTargetCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSecurityProfilesForTargetCommandOutput;
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
