import { FraudDetector } from "../FraudDetector.ts";
import { FraudDetectorClient } from "../FraudDetectorClient.ts";
import { GetLabelsCommand, GetLabelsCommandInput, GetLabelsCommandOutput } from "../commands/GetLabelsCommand.ts";
import { FraudDetectorPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: FraudDetectorClient,
  input: GetLabelsCommandInput,
  ...args: any
): Promise<GetLabelsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetLabelsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: FraudDetector,
  input: GetLabelsCommandInput,
  ...args: any
): Promise<GetLabelsCommandOutput> => {
  // @ts-ignore
  return await client.getLabels(input, ...args);
};
export async function* paginateGetLabels(
  config: FraudDetectorPaginationConfiguration,
  input: GetLabelsCommandInput,
  ...additionalArguments: any
): Paginator<GetLabelsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetLabelsCommandOutput;
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
