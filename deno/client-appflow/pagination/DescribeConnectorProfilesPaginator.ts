import { Appflow } from "../Appflow.ts";
import { AppflowClient } from "../AppflowClient.ts";
import {
  DescribeConnectorProfilesCommand,
  DescribeConnectorProfilesCommandInput,
  DescribeConnectorProfilesCommandOutput,
} from "../commands/DescribeConnectorProfilesCommand.ts";
import { AppflowPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: AppflowClient,
  input: DescribeConnectorProfilesCommandInput,
  ...args: any
): Promise<DescribeConnectorProfilesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeConnectorProfilesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Appflow,
  input: DescribeConnectorProfilesCommandInput,
  ...args: any
): Promise<DescribeConnectorProfilesCommandOutput> => {
  // @ts-ignore
  return await client.describeConnectorProfiles(input, ...args);
};
export async function* paginateDescribeConnectorProfiles(
  config: AppflowPaginationConfiguration,
  input: DescribeConnectorProfilesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeConnectorProfilesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeConnectorProfilesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Appflow) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AppflowClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Appflow | AppflowClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
