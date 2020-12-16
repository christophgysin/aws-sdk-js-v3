import { DatabaseMigrationService } from "../DatabaseMigrationService.ts";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient.ts";
import {
  DescribeReplicationTasksCommand,
  DescribeReplicationTasksCommandInput,
  DescribeReplicationTasksCommandOutput,
} from "../commands/DescribeReplicationTasksCommand.ts";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: DatabaseMigrationServiceClient,
  input: DescribeReplicationTasksCommandInput,
  ...args: any
): Promise<DescribeReplicationTasksCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeReplicationTasksCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: DatabaseMigrationService,
  input: DescribeReplicationTasksCommandInput,
  ...args: any
): Promise<DescribeReplicationTasksCommandOutput> => {
  // @ts-ignore
  return await client.describeReplicationTasks(input, ...args);
};
export async function* paginateDescribeReplicationTasks(
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeReplicationTasksCommandInput,
  ...additionalArguments: any
): Paginator<DescribeReplicationTasksCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeReplicationTasksCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof DatabaseMigrationService) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DatabaseMigrationServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DatabaseMigrationService | DatabaseMigrationServiceClient");
    }
    yield page;
    token = page.Marker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
