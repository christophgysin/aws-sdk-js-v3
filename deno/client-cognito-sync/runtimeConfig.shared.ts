import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";

/**
 * @internal
 */
export const ClientSharedValues = {
  apiVersion: "2014-06-30",
  disableHostPrefix: false,
  logger: {} as __Logger,
  regionInfoProvider: defaultRegionInfoProvider,
  signingName: "cognito-sync",
};
