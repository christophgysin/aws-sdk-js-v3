import { SecurityHub } from "../SecurityHub.ts";
import { SecurityHubClient } from "../SecurityHubClient.ts";
import {
  ListOrganizationAdminAccountsCommand,
  ListOrganizationAdminAccountsCommandInput,
  ListOrganizationAdminAccountsCommandOutput,
} from "../commands/ListOrganizationAdminAccountsCommand.ts";
import { SecurityHubPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SecurityHubClient,
  input: ListOrganizationAdminAccountsCommandInput,
  ...args: any
): Promise<ListOrganizationAdminAccountsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListOrganizationAdminAccountsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SecurityHub,
  input: ListOrganizationAdminAccountsCommandInput,
  ...args: any
): Promise<ListOrganizationAdminAccountsCommandOutput> => {
  // @ts-ignore
  return await client.listOrganizationAdminAccounts(input, ...args);
};
export async function* paginateListOrganizationAdminAccounts(
  config: SecurityHubPaginationConfiguration,
  input: ListOrganizationAdminAccountsCommandInput,
  ...additionalArguments: any
): Paginator<ListOrganizationAdminAccountsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListOrganizationAdminAccountsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SecurityHub) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SecurityHubClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SecurityHub | SecurityHubClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
