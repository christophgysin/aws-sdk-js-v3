import { AlexaForBusiness } from "../AlexaForBusiness.ts";
import { AlexaForBusinessClient } from "../AlexaForBusinessClient.ts";
import {
  ListGatewaysCommand,
  ListGatewaysCommandInput,
  ListGatewaysCommandOutput,
} from "../commands/ListGatewaysCommand.ts";
import { AlexaForBusinessPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: AlexaForBusinessClient,
  input: ListGatewaysCommandInput,
  ...args: any
): Promise<ListGatewaysCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListGatewaysCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: AlexaForBusiness,
  input: ListGatewaysCommandInput,
  ...args: any
): Promise<ListGatewaysCommandOutput> => {
  // @ts-ignore
  return await client.listGateways(input, ...args);
};
export async function* paginateListGateways(
  config: AlexaForBusinessPaginationConfiguration,
  input: ListGatewaysCommandInput,
  ...additionalArguments: any
): Paginator<ListGatewaysCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListGatewaysCommandOutput;
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
