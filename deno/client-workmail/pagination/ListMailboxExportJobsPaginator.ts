import { WorkMail } from "../WorkMail.ts";
import { WorkMailClient } from "../WorkMailClient.ts";
import {
  ListMailboxExportJobsCommand,
  ListMailboxExportJobsCommandInput,
  ListMailboxExportJobsCommandOutput,
} from "../commands/ListMailboxExportJobsCommand.ts";
import { WorkMailPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: WorkMailClient,
  input: ListMailboxExportJobsCommandInput,
  ...args: any
): Promise<ListMailboxExportJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListMailboxExportJobsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: WorkMail,
  input: ListMailboxExportJobsCommandInput,
  ...args: any
): Promise<ListMailboxExportJobsCommandOutput> => {
  // @ts-ignore
  return await client.listMailboxExportJobs(input, ...args);
};
export async function* paginateListMailboxExportJobs(
  config: WorkMailPaginationConfiguration,
  input: ListMailboxExportJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListMailboxExportJobsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListMailboxExportJobsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof WorkMail) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof WorkMailClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected WorkMail | WorkMailClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
