import { APIGateway } from "../APIGateway.ts";
import { APIGatewayClient } from "../APIGatewayClient.ts";
import { GetRestApisCommand, GetRestApisCommandInput, GetRestApisCommandOutput } from "../commands/GetRestApisCommand.ts";
import { APIGatewayPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: APIGatewayClient,
  input: GetRestApisCommandInput,
  ...args: any
): Promise<GetRestApisCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetRestApisCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: APIGateway,
  input: GetRestApisCommandInput,
  ...args: any
): Promise<GetRestApisCommandOutput> => {
  // @ts-ignore
  return await client.getRestApis(input, ...args);
};
export async function* paginateGetRestApis(
  config: APIGatewayPaginationConfiguration,
  input: GetRestApisCommandInput,
  ...additionalArguments: any
): Paginator<GetRestApisCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetRestApisCommandOutput;
  while (hasNext) {
    input.position = token;
    input["limit"] = config.pageSize;
    if (config.client instanceof APIGateway) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof APIGatewayClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected APIGateway | APIGatewayClient");
    }
    yield page;
    token = page.position;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
