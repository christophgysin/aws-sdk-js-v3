import { DevOpsGuru } from "../DevOpsGuru.ts";
import { DevOpsGuruClient } from "../DevOpsGuruClient.ts";
import {
  ListNotificationChannelsCommand,
  ListNotificationChannelsCommandInput,
  ListNotificationChannelsCommandOutput,
} from "../commands/ListNotificationChannelsCommand.ts";
import { DevOpsGuruPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: DevOpsGuruClient,
  input: ListNotificationChannelsCommandInput,
  ...args: any
): Promise<ListNotificationChannelsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListNotificationChannelsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: DevOpsGuru,
  input: ListNotificationChannelsCommandInput,
  ...args: any
): Promise<ListNotificationChannelsCommandOutput> => {
  // @ts-ignore
  return await client.listNotificationChannels(input, ...args);
};
export async function* paginateListNotificationChannels(
  config: DevOpsGuruPaginationConfiguration,
  input: ListNotificationChannelsCommandInput,
  ...additionalArguments: any
): Paginator<ListNotificationChannelsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListNotificationChannelsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    if (config.client instanceof DevOpsGuru) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DevOpsGuruClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DevOpsGuru | DevOpsGuruClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
