import { Personalize } from "../Personalize.ts";
import { PersonalizeClient } from "../PersonalizeClient.ts";
import { ListFiltersCommand, ListFiltersCommandInput, ListFiltersCommandOutput } from "../commands/ListFiltersCommand.ts";
import { PersonalizePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: PersonalizeClient,
  input: ListFiltersCommandInput,
  ...args: any
): Promise<ListFiltersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListFiltersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Personalize,
  input: ListFiltersCommandInput,
  ...args: any
): Promise<ListFiltersCommandOutput> => {
  // @ts-ignore
  return await client.listFilters(input, ...args);
};
export async function* paginateListFilters(
  config: PersonalizePaginationConfiguration,
  input: ListFiltersCommandInput,
  ...additionalArguments: any
): Paginator<ListFiltersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListFiltersCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Personalize) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof PersonalizeClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Personalize | PersonalizeClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
