import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";
import { parseUrl } from "../url-parser/mod.ts";

/**
 * @internal
 */
export const ClientSharedValues = {
  apiVersion: "2018-05-22",
  disableHostPrefix: false,
  logger: {} as __Logger,
  regionInfoProvider: defaultRegionInfoProvider,
  serviceId: "Personalize Runtime",
  urlParser: parseUrl,
};
