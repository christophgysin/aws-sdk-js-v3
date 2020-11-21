
import { AppMesh } from "../AppMesh.ts";
import { AppMeshClient } from "../AppMeshClient.ts";
import { ListMeshesCommand, ListMeshesCommandInput, ListMeshesCommandOutput } from "../commands/ListMeshesCommand.ts";
import { AppMeshPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: AppMeshClient,
  input: ListMeshesCommandInput,
  ...args: any
): Promise<ListMeshesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListMeshesCommand(input), ...args);
};
const makePagedRequest = async (
  client: AppMesh,
  input: ListMeshesCommandInput,
  ...args: any
): Promise<ListMeshesCommandOutput> => {
  // @ts-ignore
  return await client.listMeshes(input, ...args);
};
export async function* paginateListMeshes(
  config: AppMeshPaginationConfiguration,
  input: ListMeshesCommandInput,
  ...additionalArguments: any
): Paginator<ListMeshesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListMeshesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["limit"] = config.pageSize;
    if (config.client instanceof AppMesh) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AppMeshClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AppMesh | AppMeshClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
