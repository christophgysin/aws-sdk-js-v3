import { AlexaForBusiness } from "../AlexaForBusiness.ts";
import { AlexaForBusinessClient } from "../AlexaForBusinessClient.ts";
import {
  SearchAddressBooksCommand,
  SearchAddressBooksCommandInput,
  SearchAddressBooksCommandOutput,
} from "../commands/SearchAddressBooksCommand.ts";
import { AlexaForBusinessPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: AlexaForBusinessClient,
  input: SearchAddressBooksCommandInput,
  ...args: any
): Promise<SearchAddressBooksCommandOutput> => {
  // @ts-ignore
  return await client.send(new SearchAddressBooksCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: AlexaForBusiness,
  input: SearchAddressBooksCommandInput,
  ...args: any
): Promise<SearchAddressBooksCommandOutput> => {
  // @ts-ignore
  return await client.searchAddressBooks(input, ...args);
};
export async function* paginateSearchAddressBooks(
  config: AlexaForBusinessPaginationConfiguration,
  input: SearchAddressBooksCommandInput,
  ...additionalArguments: any
): Paginator<SearchAddressBooksCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: SearchAddressBooksCommandOutput;
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
