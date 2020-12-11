import { Backup } from "../Backup.ts";
import { BackupClient } from "../BackupClient.ts";
import {
  ListCopyJobsCommand,
  ListCopyJobsCommandInput,
  ListCopyJobsCommandOutput,
} from "../commands/ListCopyJobsCommand.ts";
import { BackupPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: BackupClient,
  input: ListCopyJobsCommandInput,
  ...args: any
): Promise<ListCopyJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCopyJobsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Backup,
  input: ListCopyJobsCommandInput,
  ...args: any
): Promise<ListCopyJobsCommandOutput> => {
  // @ts-ignore
  return await client.listCopyJobs(input, ...args);
};
export async function* paginateListCopyJobs(
  config: BackupPaginationConfiguration,
  input: ListCopyJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListCopyJobsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCopyJobsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Backup) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof BackupClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Backup | BackupClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
