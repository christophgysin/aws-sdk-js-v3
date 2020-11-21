
import { CloudFormation } from "../CloudFormation.ts";
import { CloudFormationClient } from "../CloudFormationClient.ts";
import {
  DescribeAccountLimitsCommand,
  DescribeAccountLimitsCommandInput,
  DescribeAccountLimitsCommandOutput,
} from "../commands/DescribeAccountLimitsCommand.ts";
import { CloudFormationPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: CloudFormationClient,
  input: DescribeAccountLimitsCommandInput,
  ...args: any
): Promise<DescribeAccountLimitsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeAccountLimitsCommand(input), ...args);
};
const makePagedRequest = async (
  client: CloudFormation,
  input: DescribeAccountLimitsCommandInput,
  ...args: any
): Promise<DescribeAccountLimitsCommandOutput> => {
  // @ts-ignore
  return await client.describeAccountLimits(input, ...args);
};
export async function* paginateDescribeAccountLimits(
  config: CloudFormationPaginationConfiguration,
  input: DescribeAccountLimitsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeAccountLimitsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeAccountLimitsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    if (config.client instanceof CloudFormation) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CloudFormationClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudFormation | CloudFormationClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
