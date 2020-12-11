import { MTurk } from "../MTurk.ts";
import { MTurkClient } from "../MTurkClient.ts";
import {
  ListReviewableHITsCommand,
  ListReviewableHITsCommandInput,
  ListReviewableHITsCommandOutput,
} from "../commands/ListReviewableHITsCommand.ts";
import { MTurkPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: MTurkClient,
  input: ListReviewableHITsCommandInput,
  ...args: any
): Promise<ListReviewableHITsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListReviewableHITsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: MTurk,
  input: ListReviewableHITsCommandInput,
  ...args: any
): Promise<ListReviewableHITsCommandOutput> => {
  // @ts-ignore
  return await client.listReviewableHITs(input, ...args);
};
export async function* paginateListReviewableHITs(
  config: MTurkPaginationConfiguration,
  input: ListReviewableHITsCommandInput,
  ...additionalArguments: any
): Paginator<ListReviewableHITsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListReviewableHITsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof MTurk) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof MTurkClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MTurk | MTurkClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
