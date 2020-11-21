
import { RDS } from "../RDS.ts";
import { RDSClient } from "../RDSClient.ts";
import {
  DescribeDBProxyTargetsCommand,
  DescribeDBProxyTargetsCommandInput,
  DescribeDBProxyTargetsCommandOutput,
} from "../commands/DescribeDBProxyTargetsCommand.ts";
import { RDSPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: RDSClient,
  input: DescribeDBProxyTargetsCommandInput,
  ...args: any
): Promise<DescribeDBProxyTargetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeDBProxyTargetsCommand(input), ...args);
};
const makePagedRequest = async (
  client: RDS,
  input: DescribeDBProxyTargetsCommandInput,
  ...args: any
): Promise<DescribeDBProxyTargetsCommandOutput> => {
  // @ts-ignore
  return await client.describeDBProxyTargets(input, ...args);
};
export async function* paginateDescribeDBProxyTargets(
  config: RDSPaginationConfiguration,
  input: DescribeDBProxyTargetsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeDBProxyTargetsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeDBProxyTargetsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof RDS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RDSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected RDS | RDSClient");
    }
    yield page;
    token = page.Marker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
