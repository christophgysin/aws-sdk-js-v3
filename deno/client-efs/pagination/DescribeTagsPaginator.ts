import { EFS } from "../EFS.ts";
import { EFSClient } from "../EFSClient.ts";
import {
  DescribeTagsCommand,
  DescribeTagsCommandInput,
  DescribeTagsCommandOutput,
} from "../commands/DescribeTagsCommand.ts";
import { EFSPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: EFSClient,
  input: DescribeTagsCommandInput,
  ...args: any
): Promise<DescribeTagsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeTagsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: EFS,
  input: DescribeTagsCommandInput,
  ...args: any
): Promise<DescribeTagsCommandOutput> => {
  // @ts-ignore
  return await client.describeTags(input, ...args);
};
export async function* paginateDescribeTags(
  config: EFSPaginationConfiguration,
  input: DescribeTagsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeTagsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeTagsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxItems"] = config.pageSize;
    if (config.client instanceof EFS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof EFSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected EFS | EFSClient");
    }
    yield page;
    token = page.NextMarker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
