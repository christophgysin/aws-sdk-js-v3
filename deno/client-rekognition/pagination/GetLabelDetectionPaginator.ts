import { Rekognition } from "../Rekognition.ts";
import { RekognitionClient } from "../RekognitionClient.ts";
import {
  GetLabelDetectionCommand,
  GetLabelDetectionCommandInput,
  GetLabelDetectionCommandOutput,
} from "../commands/GetLabelDetectionCommand.ts";
import { RekognitionPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: RekognitionClient,
  input: GetLabelDetectionCommandInput,
  ...args: any
): Promise<GetLabelDetectionCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetLabelDetectionCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Rekognition,
  input: GetLabelDetectionCommandInput,
  ...args: any
): Promise<GetLabelDetectionCommandOutput> => {
  // @ts-ignore
  return await client.getLabelDetection(input, ...args);
};
export async function* paginateGetLabelDetection(
  config: RekognitionPaginationConfiguration,
  input: GetLabelDetectionCommandInput,
  ...additionalArguments: any
): Paginator<GetLabelDetectionCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetLabelDetectionCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Rekognition) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RekognitionClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Rekognition | RekognitionClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
