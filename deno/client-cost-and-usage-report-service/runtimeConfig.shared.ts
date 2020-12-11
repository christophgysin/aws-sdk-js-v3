import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";

/**
 * @internal
 */
export const ClientSharedValues = {
  apiVersion: "2017-01-06",
  disableHostPrefix: false,
  logger: {} as __Logger,
  regionInfoProvider: defaultRegionInfoProvider,
  signingName: "cur",
};
