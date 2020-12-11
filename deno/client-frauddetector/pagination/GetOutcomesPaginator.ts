import { FraudDetector } from "../FraudDetector.ts";
import { FraudDetectorClient } from "../FraudDetectorClient.ts";
import { GetOutcomesCommand, GetOutcomesCommandInput, GetOutcomesCommandOutput } from "../commands/GetOutcomesCommand.ts";
import { FraudDetectorPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: FraudDetectorClient,
  input: GetOutcomesCommandInput,
  ...args: any
): Promise<GetOutcomesCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetOutcomesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: FraudDetector,
  input: GetOutcomesCommandInput,
  ...args: any
): Promise<GetOutcomesCommandOutput> => {
  // @ts-ignore
  return await client.getOutcomes(input, ...args);
};
export async function* paginateGetOutcomes(
  config: FraudDetectorPaginationConfiguration,
  input: GetOutcomesCommandInput,
  ...additionalArguments: any
): Paginator<GetOutcomesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetOutcomesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof FraudDetector) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof FraudDetectorClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected FraudDetector | FraudDetectorClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
