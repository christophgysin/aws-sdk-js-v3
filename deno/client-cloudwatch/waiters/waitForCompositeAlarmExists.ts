import { CloudWatchClient } from "../CloudWatchClient.ts";
import { DescribeAlarmsCommand, DescribeAlarmsCommandInput } from "../commands/DescribeAlarmsCommand.ts";
import { WaiterConfiguration, WaiterResult, WaiterState, checkExceptions, createWaiter } from "../../util-waiter/mod.ts";

const checkState = async (client: CloudWatchClient, input: DescribeAlarmsCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new DescribeAlarmsCommand(input));
    reason = result;
    try {
      let returnComparator = () => {
        let flat_1: any[] = [].concat(...result.CompositeAlarms);
        return flat_1.length > 0.0;
      };
      if (returnComparator() == true) {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilCompositeAlarmExists instead. waitForCompositeAlarmExists does not throw error in non-success cases.
 */
export const waitForCompositeAlarmExists = async (
  params: WaiterConfiguration<CloudWatchClient>,
  input: DescribeAlarmsCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeAlarmsCommand for polling.
 */
export const waitUntilCompositeAlarmExists = async (
  params: WaiterConfiguration<CloudWatchClient>,
  input: DescribeAlarmsCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
