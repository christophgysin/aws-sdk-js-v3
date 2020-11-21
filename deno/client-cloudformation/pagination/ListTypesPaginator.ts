
import { CloudFormation } from "../CloudFormation.ts";
import { CloudFormationClient } from "../CloudFormationClient.ts";
import { ListTypesCommand, ListTypesCommandInput, ListTypesCommandOutput } from "../commands/ListTypesCommand.ts";
import { CloudFormationPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: CloudFormationClient,
  input: ListTypesCommandInput,
  ...args: any
): Promise<ListTypesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTypesCommand(input), ...args);
};
const makePagedRequest = async (
  client: CloudFormation,
  input: ListTypesCommandInput,
  ...args: any
): Promise<ListTypesCommandOutput> => {
  // @ts-ignore
  return await client.listTypes(input, ...args);
};
export async function* paginateListTypes(
  config: CloudFormationPaginationConfiguration,
  input: ListTypesCommandInput,
  ...additionalArguments: any
): Paginator<ListTypesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTypesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof CloudFormation) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CloudFormationClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudFormation | CloudFormationClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
