
import { Redshift } from "../Redshift.ts";
import { RedshiftClient } from "../RedshiftClient.ts";
import {
  DescribeScheduledActionsCommand,
  DescribeScheduledActionsCommandInput,
  DescribeScheduledActionsCommandOutput,
} from "../commands/DescribeScheduledActionsCommand.ts";
import { RedshiftPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: RedshiftClient,
  input: DescribeScheduledActionsCommandInput,
  ...args: any
): Promise<DescribeScheduledActionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeScheduledActionsCommand(input), ...args);
};
const makePagedRequest = async (
  client: Redshift,
  input: DescribeScheduledActionsCommandInput,
  ...args: any
): Promise<DescribeScheduledActionsCommandOutput> => {
  // @ts-ignore
  return await client.describeScheduledActions(input, ...args);
};
export async function* paginateDescribeScheduledActions(
  config: RedshiftPaginationConfiguration,
  input: DescribeScheduledActionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeScheduledActionsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeScheduledActionsCommandOutput;
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
