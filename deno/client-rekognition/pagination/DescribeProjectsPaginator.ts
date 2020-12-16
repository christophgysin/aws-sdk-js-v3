import { Rekognition } from "../Rekognition.ts";
import { RekognitionClient } from "../RekognitionClient.ts";
import {
  DescribeProjectsCommand,
  DescribeProjectsCommandInput,
  DescribeProjectsCommandOutput,
} from "../commands/DescribeProjectsCommand.ts";
import { RekognitionPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: RekognitionClient,
  input: DescribeProjectsCommandInput,
  ...args: any
): Promise<DescribeProjectsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeProjectsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Rekognition,
  input: DescribeProjectsCommandInput,
  ...args: any
): Promise<DescribeProjectsCommandOutput> => {
  // @ts-ignore
  return await client.describeProjects(input, ...args);
};
export async function* paginateDescribeProjects(
  config: RekognitionPaginationConfiguration,
  input: DescribeProjectsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeProjectsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeProjectsCommandOutput;
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
