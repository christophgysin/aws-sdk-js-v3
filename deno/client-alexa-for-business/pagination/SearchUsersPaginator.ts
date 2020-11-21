
import { AlexaForBusiness } from "../AlexaForBusiness.ts";
import { AlexaForBusinessClient } from "../AlexaForBusinessClient.ts";
import { SearchUsersCommand, SearchUsersCommandInput, SearchUsersCommandOutput } from "../commands/SearchUsersCommand.ts";
import { AlexaForBusinessPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: AlexaForBusinessClient,
  input: SearchUsersCommandInput,
  ...args: any
): Promise<SearchUsersCommandOutput> => {
  // @ts-ignore
  return await client.send(new SearchUsersCommand(input), ...args);
};
const makePagedRequest = async (
  client: AlexaForBusiness,
  input: SearchUsersCommandInput,
  ...args: any
): Promise<SearchUsersCommandOutput> => {
  // @ts-ignore
  return await client.searchUsers(input, ...args);
};
export async function* paginateSearchUsers(
  config: AlexaForBusinessPaginationConfiguration,
  input: SearchUsersCommandInput,
  ...additionalArguments: any
): Paginator<SearchUsersCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: SearchUsersCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof AlexaForBusiness) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AlexaForBusinessClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AlexaForBusiness | AlexaForBusinessClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
