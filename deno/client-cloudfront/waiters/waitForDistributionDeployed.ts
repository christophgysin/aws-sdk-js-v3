import { CloudFrontClient } from "../CloudFrontClient.ts";
import { GetDistributionCommand, GetDistributionCommandInput } from "../commands/GetDistributionCommand.ts";
import { WaiterConfiguration, WaiterResult, WaiterState, checkExceptions, createWaiter } from "../../util-waiter/mod.ts";

const checkState = async (client: CloudFrontClient, input: GetDistributionCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new GetDistributionCommand(input));
    reason = result;
    try {
      let returnComparator = () => {
        return result.Distribution.Status;
      };
      if (returnComparator() === "Deployed") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until a distribution is deployed.
 *  @deprecated Use waitUntilDistributionDeployed instead. waitForDistributionDeployed does not throw error in non-success cases.
 */
export const waitForDistributionDeployed = async (
  params: WaiterConfiguration<CloudFrontClient>,
  input: GetDistributionCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 60, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a distribution is deployed.
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetDistributionCommand for polling.
 */
export const waitUntilDistributionDeployed = async (
  params: WaiterConfiguration<CloudFrontClient>,
  input: GetDistributionCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 60, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
