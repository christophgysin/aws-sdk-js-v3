import { EC2 } from "../EC2.ts";
import { EC2Client } from "../EC2Client.ts";
import {
  GetGroupsForCapacityReservationCommand,
  GetGroupsForCapacityReservationCommandInput,
  GetGroupsForCapacityReservationCommandOutput,
} from "../commands/GetGroupsForCapacityReservationCommand.ts";
import { EC2PaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: EC2Client,
  input: GetGroupsForCapacityReservationCommandInput,
  ...args: any
): Promise<GetGroupsForCapacityReservationCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetGroupsForCapacityReservationCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: EC2,
  input: GetGroupsForCapacityReservationCommandInput,
  ...args: any
): Promise<GetGroupsForCapacityReservationCommandOutput> => {
  // @ts-ignore
  return await client.getGroupsForCapacityReservation(input, ...args);
};
export async function* paginateGetGroupsForCapacityReservation(
  config: EC2PaginationConfiguration,
  input: GetGroupsForCapacityReservationCommandInput,
  ...additionalArguments: any
): Paginator<GetGroupsForCapacityReservationCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetGroupsForCapacityReservationCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof EC2) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof EC2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected EC2 | EC2Client");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
