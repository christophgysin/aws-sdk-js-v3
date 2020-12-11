import { MachineLearning } from "../MachineLearning.ts";
import { MachineLearningClient } from "../MachineLearningClient.ts";
import {
  DescribeBatchPredictionsCommand,
  DescribeBatchPredictionsCommandInput,
  DescribeBatchPredictionsCommandOutput,
} from "../commands/DescribeBatchPredictionsCommand.ts";
import { MachineLearningPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: MachineLearningClient,
  input: DescribeBatchPredictionsCommandInput,
  ...args: any
): Promise<DescribeBatchPredictionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeBatchPredictionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: MachineLearning,
  input: DescribeBatchPredictionsCommandInput,
  ...args: any
): Promise<DescribeBatchPredictionsCommandOutput> => {
  // @ts-ignore
  return await client.describeBatchPredictions(input, ...args);
};
export async function* paginateDescribeBatchPredictions(
  config: MachineLearningPaginationConfiguration,
  input: DescribeBatchPredictionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeBatchPredictionsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeBatchPredictionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof MachineLearning) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof MachineLearningClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MachineLearning | MachineLearningClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
