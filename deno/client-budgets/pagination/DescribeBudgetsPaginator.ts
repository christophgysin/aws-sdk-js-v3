import { Budgets } from "../Budgets.ts";
import { BudgetsClient } from "../BudgetsClient.ts";
import {
  DescribeBudgetsCommand,
  DescribeBudgetsCommandInput,
  DescribeBudgetsCommandOutput,
} from "../commands/DescribeBudgetsCommand.ts";
import { BudgetsPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: BudgetsClient,
  input: DescribeBudgetsCommandInput,
  ...args: any
): Promise<DescribeBudgetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeBudgetsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Budgets,
  input: DescribeBudgetsCommandInput,
  ...args: any
): Promise<DescribeBudgetsCommandOutput> => {
  // @ts-ignore
  return await client.describeBudgets(input, ...args);
};
export async function* paginateDescribeBudgets(
  config: BudgetsPaginationConfiguration,
  input: DescribeBudgetsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeBudgetsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeBudgetsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Budgets) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof BudgetsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Budgets | BudgetsClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
