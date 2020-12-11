import { EC2 } from "../EC2.ts";
import { EC2Client } from "../EC2Client.ts";
import {
  DescribeScheduledInstanceAvailabilityCommand,
  DescribeScheduledInstanceAvailabilityCommandInput,
  DescribeScheduledInstanceAvailabilityCommandOutput,
} from "../commands/DescribeScheduledInstanceAvailabilityCommand.ts";
import { EC2PaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: EC2Client,
  input: DescribeScheduledInstanceAvailabilityCommandInput,
  ...args: any
): Promise<DescribeScheduledInstanceAvailabilityCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeScheduledInstanceAvailabilityCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: EC2,
  input: DescribeScheduledInstanceAvailabilityCommandInput,
  ...args: any
): Promise<DescribeScheduledInstanceAvailabilityCommandOutput> => {
  // @ts-ignore
  return await client.describeScheduledInstanceAvailability(input, ...args);
};
export async function* paginateDescribeScheduledInstanceAvailability(
  config: EC2PaginationConfiguration,
  input: DescribeScheduledInstanceAvailabilityCommandInput,
  ...additionalArguments: any
): Paginator<DescribeScheduledInstanceAvailabilityCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeScheduledInstanceAvailabilityCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof EC2) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof EC2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected EC2 | EC2Client");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
