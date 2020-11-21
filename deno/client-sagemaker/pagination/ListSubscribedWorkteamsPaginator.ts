
import { SageMaker } from "../SageMaker.ts";
import { SageMakerClient } from "../SageMakerClient.ts";
import {
  ListSubscribedWorkteamsCommand,
  ListSubscribedWorkteamsCommandInput,
  ListSubscribedWorkteamsCommandOutput,
} from "../commands/ListSubscribedWorkteamsCommand.ts";
import { SageMakerPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: SageMakerClient,
  input: ListSubscribedWorkteamsCommandInput,
  ...args: any
): Promise<ListSubscribedWorkteamsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSubscribedWorkteamsCommand(input), ...args);
};
const makePagedRequest = async (
  client: SageMaker,
  input: ListSubscribedWorkteamsCommandInput,
  ...args: any
): Promise<ListSubscribedWorkteamsCommandOutput> => {
  // @ts-ignore
  return await client.listSubscribedWorkteams(input, ...args);
};
export async function* paginateListSubscribedWorkteams(
  config: SageMakerPaginationConfiguration,
  input: ListSubscribedWorkteamsCommandInput,
  ...additionalArguments: any
): Paginator<ListSubscribedWorkteamsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSubscribedWorkteamsCommandOutput;
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
