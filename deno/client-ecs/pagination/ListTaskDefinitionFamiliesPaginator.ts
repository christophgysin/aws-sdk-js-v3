import { ECS } from "../ECS.ts";
import { ECSClient } from "../ECSClient.ts";
import {
  ListTaskDefinitionFamiliesCommand,
  ListTaskDefinitionFamiliesCommandInput,
  ListTaskDefinitionFamiliesCommandOutput,
} from "../commands/ListTaskDefinitionFamiliesCommand.ts";
import { ECSPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ECSClient,
  input: ListTaskDefinitionFamiliesCommandInput,
  ...args: any
): Promise<ListTaskDefinitionFamiliesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTaskDefinitionFamiliesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ECS,
  input: ListTaskDefinitionFamiliesCommandInput,
  ...args: any
): Promise<ListTaskDefinitionFamiliesCommandOutput> => {
  // @ts-ignore
  return await client.listTaskDefinitionFamilies(input, ...args);
};
export async function* paginateListTaskDefinitionFamilies(
  config: ECSPaginationConfiguration,
  input: ListTaskDefinitionFamiliesCommandInput,
  ...additionalArguments: any
): Paginator<ListTaskDefinitionFamiliesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTaskDefinitionFamiliesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof ECS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ECSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ECS | ECSClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
