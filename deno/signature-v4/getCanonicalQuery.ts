import { HttpRequest } from "../types/mod.ts";
import { escapeUri } from "../util-uri-escape/mod.ts";

import { SIGNATURE_HEADER } from "./constants.ts";

/**
 * @internal
 */
export function getCanonicalQuery({ query = {} }: HttpRequest): string {
  const keys: Array<string> = [];
  const serialized: { [key: string]: string } = {};
  for (const key of Object.keys(query).sort()) {
    if (key.toLowerCase() === SIGNATURE_HEADER) {
      continue;
    }

    keys.push(key);
    const value = query[key];
    if (typeof value === "string") {
      serialized[key] = `${escapeUri(key)}=${escapeUri(value)}`;
    } else if (Array.isArray(value)) {
      serialized[key] = value
        .slice(0)
        .sort()
        .reduce(
          (encoded: Array<string>, value: string) => encoded.concat([`${escapeUri(key)}=${escapeUri(value)}`]),
          []
        )
        .join("&");
    }
  }

  return keys
    .map((key) => serialized[key])
    .filter((serialized) => serialized) // omit any falsy values
    .join("&");
}
