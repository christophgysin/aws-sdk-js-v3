import { CloudWatch } from "../CloudWatch.ts";
import { CloudWatchClient } from "../CloudWatchClient.ts";
import {
  DescribeAlarmsCommand,
  DescribeAlarmsCommandInput,
  DescribeAlarmsCommandOutput,
} from "../commands/DescribeAlarmsCommand.ts";
import { CloudWatchPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CloudWatchClient,
  input: DescribeAlarmsCommandInput,
  ...args: any
): Promise<DescribeAlarmsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeAlarmsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: CloudWatch,
  input: DescribeAlarmsCommandInput,
  ...args: any
): Promise<DescribeAlarmsCommandOutput> => {
  // @ts-ignore
  return await client.describeAlarms(input, ...args);
};
export async function* paginateDescribeAlarms(
  config: CloudWatchPaginationConfiguration,
  input: DescribeAlarmsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeAlarmsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeAlarmsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof CloudWatch) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CloudWatchClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudWatch | CloudWatchClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
