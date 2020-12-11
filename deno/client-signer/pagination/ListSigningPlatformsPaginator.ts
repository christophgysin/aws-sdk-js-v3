import { Signer } from "../Signer.ts";
import { SignerClient } from "../SignerClient.ts";
import {
  ListSigningPlatformsCommand,
  ListSigningPlatformsCommandInput,
  ListSigningPlatformsCommandOutput,
} from "../commands/ListSigningPlatformsCommand.ts";
import { SignerPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SignerClient,
  input: ListSigningPlatformsCommandInput,
  ...args: any
): Promise<ListSigningPlatformsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSigningPlatformsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Signer,
  input: ListSigningPlatformsCommandInput,
  ...args: any
): Promise<ListSigningPlatformsCommandOutput> => {
  // @ts-ignore
  return await client.listSigningPlatforms(input, ...args);
};
export async function* paginateListSigningPlatforms(
  config: SignerPaginationConfiguration,
  input: ListSigningPlatformsCommandInput,
  ...additionalArguments: any
): Paginator<ListSigningPlatformsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSigningPlatformsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Signer) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SignerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Signer | SignerClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
