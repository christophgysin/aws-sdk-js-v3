import { ElasticsearchService } from "../ElasticsearchService.ts";
import { ElasticsearchServiceClient } from "../ElasticsearchServiceClient.ts";
import {
  ListDomainsForPackageCommand,
  ListDomainsForPackageCommandInput,
  ListDomainsForPackageCommandOutput,
} from "../commands/ListDomainsForPackageCommand.ts";
import { ElasticsearchServicePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ElasticsearchServiceClient,
  input: ListDomainsForPackageCommandInput,
  ...args: any
): Promise<ListDomainsForPackageCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDomainsForPackageCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ElasticsearchService,
  input: ListDomainsForPackageCommandInput,
  ...args: any
): Promise<ListDomainsForPackageCommandOutput> => {
  // @ts-ignore
  return await client.listDomainsForPackage(input, ...args);
};
export async function* paginateListDomainsForPackage(
  config: ElasticsearchServicePaginationConfiguration,
  input: ListDomainsForPackageCommandInput,
  ...additionalArguments: any
): Paginator<ListDomainsForPackageCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDomainsForPackageCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ElasticsearchService) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ElasticsearchServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ElasticsearchService | ElasticsearchServiceClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
