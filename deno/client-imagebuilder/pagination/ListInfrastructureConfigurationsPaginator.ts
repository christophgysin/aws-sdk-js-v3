import { Imagebuilder } from "../Imagebuilder.ts";
import { ImagebuilderClient } from "../ImagebuilderClient.ts";
import {
  ListInfrastructureConfigurationsCommand,
  ListInfrastructureConfigurationsCommandInput,
  ListInfrastructureConfigurationsCommandOutput,
} from "../commands/ListInfrastructureConfigurationsCommand.ts";
import { ImagebuilderPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ImagebuilderClient,
  input: ListInfrastructureConfigurationsCommandInput,
  ...args: any
): Promise<ListInfrastructureConfigurationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListInfrastructureConfigurationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Imagebuilder,
  input: ListInfrastructureConfigurationsCommandInput,
  ...args: any
): Promise<ListInfrastructureConfigurationsCommandOutput> => {
  // @ts-ignore
  return await client.listInfrastructureConfigurations(input, ...args);
};
export async function* paginateListInfrastructureConfigurations(
  config: ImagebuilderPaginationConfiguration,
  input: ListInfrastructureConfigurationsCommandInput,
  ...additionalArguments: any
): Paginator<ListInfrastructureConfigurationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListInfrastructureConfigurationsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Imagebuilder) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ImagebuilderClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Imagebuilder | ImagebuilderClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
