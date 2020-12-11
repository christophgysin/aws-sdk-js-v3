import { XRay } from "../XRay.ts";
import { XRayClient } from "../XRayClient.ts";
import {
  GetSamplingRulesCommand,
  GetSamplingRulesCommandInput,
  GetSamplingRulesCommandOutput,
} from "../commands/GetSamplingRulesCommand.ts";
import { XRayPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: XRayClient,
  input: GetSamplingRulesCommandInput,
  ...args: any
): Promise<GetSamplingRulesCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetSamplingRulesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: XRay,
  input: GetSamplingRulesCommandInput,
  ...args: any
): Promise<GetSamplingRulesCommandOutput> => {
  // @ts-ignore
  return await client.getSamplingRules(input, ...args);
};
export async function* paginateGetSamplingRules(
  config: XRayPaginationConfiguration,
  input: GetSamplingRulesCommandInput,
  ...additionalArguments: any
): Paginator<GetSamplingRulesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetSamplingRulesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    if (config.client instanceof XRay) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof XRayClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected XRay | XRayClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
