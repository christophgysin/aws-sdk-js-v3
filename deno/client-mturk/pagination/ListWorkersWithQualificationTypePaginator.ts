import { MTurk } from "../MTurk.ts";
import { MTurkClient } from "../MTurkClient.ts";
import {
  ListWorkersWithQualificationTypeCommand,
  ListWorkersWithQualificationTypeCommandInput,
  ListWorkersWithQualificationTypeCommandOutput,
} from "../commands/ListWorkersWithQualificationTypeCommand.ts";
import { MTurkPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: MTurkClient,
  input: ListWorkersWithQualificationTypeCommandInput,
  ...args: any
): Promise<ListWorkersWithQualificationTypeCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListWorkersWithQualificationTypeCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: MTurk,
  input: ListWorkersWithQualificationTypeCommandInput,
  ...args: any
): Promise<ListWorkersWithQualificationTypeCommandOutput> => {
  // @ts-ignore
  return await client.listWorkersWithQualificationType(input, ...args);
};
export async function* paginateListWorkersWithQualificationType(
  config: MTurkPaginationConfiguration,
  input: ListWorkersWithQualificationTypeCommandInput,
  ...additionalArguments: any
): Paginator<ListWorkersWithQualificationTypeCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListWorkersWithQualificationTypeCommandOutput;
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
