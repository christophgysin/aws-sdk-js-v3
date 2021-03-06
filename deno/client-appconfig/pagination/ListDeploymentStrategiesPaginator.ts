import { AppConfig } from "../AppConfig.ts";
import { AppConfigClient } from "../AppConfigClient.ts";
import {
  ListDeploymentStrategiesCommand,
  ListDeploymentStrategiesCommandInput,
  ListDeploymentStrategiesCommandOutput,
} from "../commands/ListDeploymentStrategiesCommand.ts";
import { AppConfigPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: AppConfigClient,
  input: ListDeploymentStrategiesCommandInput,
  ...args: any
): Promise<ListDeploymentStrategiesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDeploymentStrategiesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: AppConfig,
  input: ListDeploymentStrategiesCommandInput,
  ...args: any
): Promise<ListDeploymentStrategiesCommandOutput> => {
  // @ts-ignore
  return await client.listDeploymentStrategies(input, ...args);
};
export async function* paginateListDeploymentStrategies(
  config: AppConfigPaginationConfiguration,
  input: ListDeploymentStrategiesCommandInput,
  ...additionalArguments: any
): Paginator<ListDeploymentStrategiesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDeploymentStrategiesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof AppConfig) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AppConfigClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AppConfig | AppConfigClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
