import { AlexaForBusiness } from "../AlexaForBusiness.ts";
import { AlexaForBusinessClient } from "../AlexaForBusinessClient.ts";
import {
  ListGatewayGroupsCommand,
  ListGatewayGroupsCommandInput,
  ListGatewayGroupsCommandOutput,
} from "../commands/ListGatewayGroupsCommand.ts";
import { AlexaForBusinessPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: AlexaForBusinessClient,
  input: ListGatewayGroupsCommandInput,
  ...args: any
): Promise<ListGatewayGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListGatewayGroupsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: AlexaForBusiness,
  input: ListGatewayGroupsCommandInput,
  ...args: any
): Promise<ListGatewayGroupsCommandOutput> => {
  // @ts-ignore
  return await client.listGatewayGroups(input, ...args);
};
export async function* paginateListGatewayGroups(
  config: AlexaForBusinessPaginationConfiguration,
  input: ListGatewayGroupsCommandInput,
  ...additionalArguments: any
): Paginator<ListGatewayGroupsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListGatewayGroupsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof AlexaForBusiness) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AlexaForBusinessClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AlexaForBusiness | AlexaForBusinessClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
