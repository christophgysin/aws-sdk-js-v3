
import { CodeCommit } from "../CodeCommit.ts";
import { CodeCommitClient } from "../CodeCommitClient.ts";
import {
  DescribeMergeConflictsCommand,
  DescribeMergeConflictsCommandInput,
  DescribeMergeConflictsCommandOutput,
} from "../commands/DescribeMergeConflictsCommand.ts";
import { CodeCommitPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: CodeCommitClient,
  input: DescribeMergeConflictsCommandInput,
  ...args: any
): Promise<DescribeMergeConflictsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeMergeConflictsCommand(input), ...args);
};
const makePagedRequest = async (
  client: CodeCommit,
  input: DescribeMergeConflictsCommandInput,
  ...args: any
): Promise<DescribeMergeConflictsCommandOutput> => {
  // @ts-ignore
  return await client.describeMergeConflicts(input, ...args);
};
export async function* paginateDescribeMergeConflicts(
  config: CodeCommitPaginationConfiguration,
  input: DescribeMergeConflictsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeMergeConflictsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeMergeConflictsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxMergeHunks"] = config.pageSize;
    if (config.client instanceof CodeCommit) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CodeCommitClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CodeCommit | CodeCommitClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
