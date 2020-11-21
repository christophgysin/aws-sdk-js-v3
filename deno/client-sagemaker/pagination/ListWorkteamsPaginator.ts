
import { SageMaker } from "../SageMaker.ts";
import { SageMakerClient } from "../SageMakerClient.ts";
import {
  ListWorkteamsCommand,
  ListWorkteamsCommandInput,
  ListWorkteamsCommandOutput,
} from "../commands/ListWorkteamsCommand.ts";
import { SageMakerPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: SageMakerClient,
  input: ListWorkteamsCommandInput,
  ...args: any
): Promise<ListWorkteamsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListWorkteamsCommand(input), ...args);
};
const makePagedRequest = async (
  client: SageMaker,
  input: ListWorkteamsCommandInput,
  ...args: any
): Promise<ListWorkteamsCommandOutput> => {
  // @ts-ignore
  return await client.listWorkteams(input, ...args);
};
export async function* paginateListWorkteams(
  config: SageMakerPaginationConfiguration,
  input: ListWorkteamsCommandInput,
  ...additionalArguments: any
): Paginator<ListWorkteamsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListWorkteamsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SageMaker) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SageMakerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SageMaker | SageMakerClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
