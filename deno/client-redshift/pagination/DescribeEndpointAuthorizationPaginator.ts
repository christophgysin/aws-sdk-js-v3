import { Redshift } from "../Redshift.ts";
import { RedshiftClient } from "../RedshiftClient.ts";
import {
  DescribeEndpointAuthorizationCommand,
  DescribeEndpointAuthorizationCommandInput,
  DescribeEndpointAuthorizationCommandOutput,
} from "../commands/DescribeEndpointAuthorizationCommand.ts";
import { RedshiftPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: RedshiftClient,
  input: DescribeEndpointAuthorizationCommandInput,
  ...args: any
): Promise<DescribeEndpointAuthorizationCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeEndpointAuthorizationCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Redshift,
  input: DescribeEndpointAuthorizationCommandInput,
  ...args: any
): Promise<DescribeEndpointAuthorizationCommandOutput> => {
  // @ts-ignore
  return await client.describeEndpointAuthorization(input, ...args);
};
export async function* paginateDescribeEndpointAuthorization(
  config: RedshiftPaginationConfiguration,
  input: DescribeEndpointAuthorizationCommandInput,
  ...additionalArguments: any
): Paginator<DescribeEndpointAuthorizationCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeEndpointAuthorizationCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof Redshift) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RedshiftClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Redshift | RedshiftClient");
    }
    yield page;
    token = page.Marker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
