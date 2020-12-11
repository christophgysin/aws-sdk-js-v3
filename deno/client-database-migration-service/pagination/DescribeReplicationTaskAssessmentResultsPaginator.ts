import { DatabaseMigrationService } from "../DatabaseMigrationService.ts";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient.ts";
import {
  DescribeReplicationTaskAssessmentResultsCommand,
  DescribeReplicationTaskAssessmentResultsCommandInput,
  DescribeReplicationTaskAssessmentResultsCommandOutput,
} from "../commands/DescribeReplicationTaskAssessmentResultsCommand.ts";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: DatabaseMigrationServiceClient,
  input: DescribeReplicationTaskAssessmentResultsCommandInput,
  ...args: any
): Promise<DescribeReplicationTaskAssessmentResultsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeReplicationTaskAssessmentResultsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: DatabaseMigrationService,
  input: DescribeReplicationTaskAssessmentResultsCommandInput,
  ...args: any
): Promise<DescribeReplicationTaskAssessmentResultsCommandOutput> => {
  // @ts-ignore
  return await client.describeReplicationTaskAssessmentResults(input, ...args);
};
export async function* paginateDescribeReplicationTaskAssessmentResults(
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeReplicationTaskAssessmentResultsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeReplicationTaskAssessmentResultsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeReplicationTaskAssessmentResultsCommandOutput;
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
