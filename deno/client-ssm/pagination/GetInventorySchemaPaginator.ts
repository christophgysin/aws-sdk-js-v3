import { SSM } from "../SSM.ts";
import { SSMClient } from "../SSMClient.ts";
import {
  GetInventorySchemaCommand,
  GetInventorySchemaCommandInput,
  GetInventorySchemaCommandOutput,
} from "../commands/GetInventorySchemaCommand.ts";
import { SSMPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SSMClient,
  input: GetInventorySchemaCommandInput,
  ...args: any
): Promise<GetInventorySchemaCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetInventorySchemaCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SSM,
  input: GetInventorySchemaCommandInput,
  ...args: any
): Promise<GetInventorySchemaCommandOutput> => {
  // @ts-ignore
  return await client.getInventorySchema(input, ...args);
};
export async function* paginateGetInventorySchema(
  config: SSMPaginationConfiguration,
  input: GetInventorySchemaCommandInput,
  ...additionalArguments: any
): Paginator<GetInventorySchemaCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetInventorySchemaCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SSM) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SSMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SSM | SSMClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
