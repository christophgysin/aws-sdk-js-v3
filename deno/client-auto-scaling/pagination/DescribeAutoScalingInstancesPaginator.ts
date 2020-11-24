
import { AutoScaling } from "../AutoScaling.ts";
import { AutoScalingClient } from "../AutoScalingClient.ts";
import {
  DescribeAutoScalingInstancesCommand,
  DescribeAutoScalingInstancesCommandInput,
  DescribeAutoScalingInstancesCommandOutput,
} from "../commands/DescribeAutoScalingInstancesCommand.ts";
import { AutoScalingPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: AutoScalingClient,
  input: DescribeAutoScalingInstancesCommandInput,
  ...args: any
): Promise<DescribeAutoScalingInstancesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeAutoScalingInstancesCommand(input), ...args);
};
const makePagedRequest = async (
  client: AutoScaling,
  input: DescribeAutoScalingInstancesCommandInput,
  ...args: any
): Promise<DescribeAutoScalingInstancesCommandOutput> => {
  // @ts-ignore
  return await client.describeAutoScalingInstances(input, ...args);
};
export async function* paginateDescribeAutoScalingInstances(
  config: AutoScalingPaginationConfiguration,
  input: DescribeAutoScalingInstancesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeAutoScalingInstancesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeAutoScalingInstancesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof AutoScaling) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AutoScalingClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AutoScaling | AutoScalingClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
