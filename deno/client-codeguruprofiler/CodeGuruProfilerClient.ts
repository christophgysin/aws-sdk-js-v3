import { ConfigureAgentCommandInput, ConfigureAgentCommandOutput } from "./commands/ConfigureAgentCommand.ts";
import {
  CreateProfilingGroupCommandInput,
  CreateProfilingGroupCommandOutput,
} from "./commands/CreateProfilingGroupCommand.ts";
import {
  DeleteProfilingGroupCommandInput,
  DeleteProfilingGroupCommandOutput,
} from "./commands/DeleteProfilingGroupCommand.ts";
import {
  DescribeProfilingGroupCommandInput,
  DescribeProfilingGroupCommandOutput,
} from "./commands/DescribeProfilingGroupCommand.ts";
import { GetPolicyCommandInput, GetPolicyCommandOutput } from "./commands/GetPolicyCommand.ts";
import { GetProfileCommandInput, GetProfileCommandOutput } from "./commands/GetProfileCommand.ts";
import { ListProfileTimesCommandInput, ListProfileTimesCommandOutput } from "./commands/ListProfileTimesCommand.ts";
import {
  ListProfilingGroupsCommandInput,
  ListProfilingGroupsCommandOutput,
} from "./commands/ListProfilingGroupsCommand.ts";
import { PostAgentProfileCommandInput, PostAgentProfileCommandOutput } from "./commands/PostAgentProfileCommand.ts";
import { PutPermissionCommandInput, PutPermissionCommandOutput } from "./commands/PutPermissionCommand.ts";
import { RemovePermissionCommandInput, RemovePermissionCommandOutput } from "./commands/RemovePermissionCommand.ts";
import { RetrieveTimeSeriesCommandInput, RetrieveTimeSeriesCommandOutput } from "./commands/RetrieveTimeSeriesCommand.ts";
import {
  UpdateProfilingGroupCommandInput,
  UpdateProfilingGroupCommandOutput,
} from "./commands/UpdateProfilingGroupCommand.ts";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig.ts";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig,
} from "../config-resolver/mod.ts";
import { getContentLengthPlugin } from "../middleware-content-length/mod.ts";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "../middleware-host-header/mod.ts";
import { getLoggerPlugin } from "../middleware-logger/mod.ts";
import { RetryInputConfig, RetryResolvedConfig, getRetryPlugin, resolveRetryConfig } from "../middleware-retry/mod.ts";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "../middleware-signing/mod.ts";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "../middleware-user-agent/mod.ts";
import { HttpHandler as __HttpHandler } from "../protocol-http/mod.ts";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "../smithy-client/mod.ts";
import {
  Provider,
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "../types/mod.ts";

export type ServiceInputTypes =
  | ConfigureAgentCommandInput
  | CreateProfilingGroupCommandInput
  | DeleteProfilingGroupCommandInput
  | DescribeProfilingGroupCommandInput
  | GetPolicyCommandInput
  | GetProfileCommandInput
  | ListProfileTimesCommandInput
  | ListProfilingGroupsCommandInput
  | PostAgentProfileCommandInput
  | PutPermissionCommandInput
  | RemovePermissionCommandInput
  | RetrieveTimeSeriesCommandInput
  | UpdateProfilingGroupCommandInput;

export type ServiceOutputTypes =
  | ConfigureAgentCommandOutput
  | CreateProfilingGroupCommandOutput
  | DeleteProfilingGroupCommandOutput
  | DescribeProfilingGroupCommandOutput
  | GetPolicyCommandOutput
  | GetProfileCommandOutput
  | ListProfileTimesCommandOutput
  | ListProfilingGroupsCommandOutput
  | PostAgentProfileCommandOutput
  | PutPermissionCommandOutput
  | RemovePermissionCommandOutput
  | RetrieveTimeSeriesCommandOutput
  | UpdateProfilingGroupCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the @aws-sdk/types.Hash interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   */
  bodyLengthChecker?: (body: any) => number | undefined;

  /**
   * A function that converts a stream into an array of bytes.
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment
   */
  runtime?: string;

  /**
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Default credentials provider; Not available in browser runtime.
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;
}

export type CodeGuruProfilerClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;

export type CodeGuruProfilerClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;

/**
 * <p>This section provides documentation for the Amazon CodeGuru Profiler API operations.</p>
 */
export class CodeGuruProfilerClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  CodeGuruProfilerClientResolvedConfig
> {
  readonly config: CodeGuruProfilerClientResolvedConfig;

  constructor(configuration: CodeGuruProfilerClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration,
    };
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveRetryConfig(_config_2);
    let _config_4 = resolveHostHeaderConfig(_config_3);
    let _config_5 = resolveAwsAuthConfig(_config_4);
    let _config_6 = resolveUserAgentConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
  }

  destroy(): void {
    super.destroy();
  }
}
