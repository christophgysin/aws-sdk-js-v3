import { GameLift } from "../GameLift.ts";
import { GameLiftClient } from "../GameLiftClient.ts";
import {
  DescribeGameSessionQueuesCommand,
  DescribeGameSessionQueuesCommandInput,
  DescribeGameSessionQueuesCommandOutput,
} from "../commands/DescribeGameSessionQueuesCommand.ts";
import { GameLiftPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: GameLiftClient,
  input: DescribeGameSessionQueuesCommandInput,
  ...args: any
): Promise<DescribeGameSessionQueuesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeGameSessionQueuesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: GameLift,
  input: DescribeGameSessionQueuesCommandInput,
  ...args: any
): Promise<DescribeGameSessionQueuesCommandOutput> => {
  // @ts-ignore
  return await client.describeGameSessionQueues(input, ...args);
};
export async function* paginateDescribeGameSessionQueues(
  config: GameLiftPaginationConfiguration,
  input: DescribeGameSessionQueuesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeGameSessionQueuesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeGameSessionQueuesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof GameLift) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof GameLiftClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected GameLift | GameLiftClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
