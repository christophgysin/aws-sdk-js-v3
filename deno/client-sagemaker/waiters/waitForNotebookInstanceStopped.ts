import { SageMakerClient } from "../SageMakerClient.ts";
import {
  DescribeNotebookInstanceCommand,
  DescribeNotebookInstanceCommandInput,
} from "../commands/DescribeNotebookInstanceCommand.ts";
import { WaiterConfiguration, WaiterResult, WaiterState, checkExceptions, createWaiter } from "../../util-waiter/mod.ts";

const checkState = async (
  client: SageMakerClient,
  input: DescribeNotebookInstanceCommandInput
): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new DescribeNotebookInstanceCommand(input));
    reason = result;
    try {
      let returnComparator = () => {
        return result.NotebookInstanceStatus;
      };
      if (returnComparator() === "Stopped") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.NotebookInstanceStatus;
      };
      if (returnComparator() === "Failed") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilNotebookInstanceStopped instead. waitForNotebookInstanceStopped does not throw error in non-success cases.
 */
export const waitForNotebookInstanceStopped = async (
  params: WaiterConfiguration<SageMakerClient>,
  input: DescribeNotebookInstanceCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeNotebookInstanceCommand for polling.
 */
export const waitUntilNotebookInstanceStopped = async (
  params: WaiterConfiguration<SageMakerClient>,
  input: DescribeNotebookInstanceCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
