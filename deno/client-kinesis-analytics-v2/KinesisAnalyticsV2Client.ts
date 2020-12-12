import process from "https://deno.land/std@0.79.0/node/process.ts";
import {
  AddApplicationCloudWatchLoggingOptionCommandInput,
  AddApplicationCloudWatchLoggingOptionCommandOutput,
} from "./commands/AddApplicationCloudWatchLoggingOptionCommand.ts";
import {
  AddApplicationInputCommandInput,
  AddApplicationInputCommandOutput,
} from "./commands/AddApplicationInputCommand.ts";
import {
  AddApplicationInputProcessingConfigurationCommandInput,
  AddApplicationInputProcessingConfigurationCommandOutput,
} from "./commands/AddApplicationInputProcessingConfigurationCommand.ts";
import {
  AddApplicationOutputCommandInput,
  AddApplicationOutputCommandOutput,
} from "./commands/AddApplicationOutputCommand.ts";
import {
  AddApplicationReferenceDataSourceCommandInput,
  AddApplicationReferenceDataSourceCommandOutput,
} from "./commands/AddApplicationReferenceDataSourceCommand.ts";
import {
  AddApplicationVpcConfigurationCommandInput,
  AddApplicationVpcConfigurationCommandOutput,
} from "./commands/AddApplicationVpcConfigurationCommand.ts";
import { CreateApplicationCommandInput, CreateApplicationCommandOutput } from "./commands/CreateApplicationCommand.ts";
import {
  CreateApplicationPresignedUrlCommandInput,
  CreateApplicationPresignedUrlCommandOutput,
} from "./commands/CreateApplicationPresignedUrlCommand.ts";
import {
  CreateApplicationSnapshotCommandInput,
  CreateApplicationSnapshotCommandOutput,
} from "./commands/CreateApplicationSnapshotCommand.ts";
import {
  DeleteApplicationCloudWatchLoggingOptionCommandInput,
  DeleteApplicationCloudWatchLoggingOptionCommandOutput,
} from "./commands/DeleteApplicationCloudWatchLoggingOptionCommand.ts";
import { DeleteApplicationCommandInput, DeleteApplicationCommandOutput } from "./commands/DeleteApplicationCommand.ts";
import {
  DeleteApplicationInputProcessingConfigurationCommandInput,
  DeleteApplicationInputProcessingConfigurationCommandOutput,
} from "./commands/DeleteApplicationInputProcessingConfigurationCommand.ts";
import {
  DeleteApplicationOutputCommandInput,
  DeleteApplicationOutputCommandOutput,
} from "./commands/DeleteApplicationOutputCommand.ts";
import {
  DeleteApplicationReferenceDataSourceCommandInput,
  DeleteApplicationReferenceDataSourceCommandOutput,
} from "./commands/DeleteApplicationReferenceDataSourceCommand.ts";
import {
  DeleteApplicationSnapshotCommandInput,
  DeleteApplicationSnapshotCommandOutput,
} from "./commands/DeleteApplicationSnapshotCommand.ts";
import {
  DeleteApplicationVpcConfigurationCommandInput,
  DeleteApplicationVpcConfigurationCommandOutput,
} from "./commands/DeleteApplicationVpcConfigurationCommand.ts";
import {
  DescribeApplicationCommandInput,
  DescribeApplicationCommandOutput,
} from "./commands/DescribeApplicationCommand.ts";
import {
  DescribeApplicationSnapshotCommandInput,
  DescribeApplicationSnapshotCommandOutput,
} from "./commands/DescribeApplicationSnapshotCommand.ts";
import {
  DiscoverInputSchemaCommandInput,
  DiscoverInputSchemaCommandOutput,
} from "./commands/DiscoverInputSchemaCommand.ts";
import {
  ListApplicationSnapshotsCommandInput,
  ListApplicationSnapshotsCommandOutput,
} from "./commands/ListApplicationSnapshotsCommand.ts";
import { ListApplicationsCommandInput, ListApplicationsCommandOutput } from "./commands/ListApplicationsCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand.ts";
import { StartApplicationCommandInput, StartApplicationCommandOutput } from "./commands/StartApplicationCommand.ts";
import { StopApplicationCommandInput, StopApplicationCommandOutput } from "./commands/StopApplicationCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand.ts";
import { UpdateApplicationCommandInput, UpdateApplicationCommandOutput } from "./commands/UpdateApplicationCommand.ts";
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
} from "../types/mod.ts";

export type ServiceInputTypes =
  | AddApplicationCloudWatchLoggingOptionCommandInput
  | AddApplicationInputCommandInput
  | AddApplicationInputProcessingConfigurationCommandInput
  | AddApplicationOutputCommandInput
  | AddApplicationReferenceDataSourceCommandInput
  | AddApplicationVpcConfigurationCommandInput
  | CreateApplicationCommandInput
  | CreateApplicationPresignedUrlCommandInput
  | CreateApplicationSnapshotCommandInput
  | DeleteApplicationCloudWatchLoggingOptionCommandInput
  | DeleteApplicationCommandInput
  | DeleteApplicationInputProcessingConfigurationCommandInput
  | DeleteApplicationOutputCommandInput
  | DeleteApplicationReferenceDataSourceCommandInput
  | DeleteApplicationSnapshotCommandInput
  | DeleteApplicationVpcConfigurationCommandInput
  | DescribeApplicationCommandInput
  | DescribeApplicationSnapshotCommandInput
  | DiscoverInputSchemaCommandInput
  | ListApplicationSnapshotsCommandInput
  | ListApplicationsCommandInput
  | ListTagsForResourceCommandInput
  | StartApplicationCommandInput
  | StopApplicationCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateApplicationCommandInput;

export type ServiceOutputTypes =
  | AddApplicationCloudWatchLoggingOptionCommandOutput
  | AddApplicationInputCommandOutput
  | AddApplicationInputProcessingConfigurationCommandOutput
  | AddApplicationOutputCommandOutput
  | AddApplicationReferenceDataSourceCommandOutput
  | AddApplicationVpcConfigurationCommandOutput
  | CreateApplicationCommandOutput
  | CreateApplicationPresignedUrlCommandOutput
  | CreateApplicationSnapshotCommandOutput
  | DeleteApplicationCloudWatchLoggingOptionCommandOutput
  | DeleteApplicationCommandOutput
  | DeleteApplicationInputProcessingConfigurationCommandOutput
  | DeleteApplicationOutputCommandOutput
  | DeleteApplicationReferenceDataSourceCommandOutput
  | DeleteApplicationSnapshotCommandOutput
  | DeleteApplicationVpcConfigurationCommandOutput
  | DescribeApplicationCommandOutput
  | DescribeApplicationSnapshotCommandOutput
  | DiscoverInputSchemaCommandOutput
  | ListApplicationSnapshotsCommandOutput
  | ListApplicationsCommandOutput
  | ListTagsForResourceCommandOutput
  | StartApplicationCommandOutput
  | StopApplicationCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateApplicationCommandOutput;

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
   * The string that will be used to populate default value in 'User-Agent' header
   */
  defaultUserAgent?: string;

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
   * Default credentials provider; Not available in browser runtime
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

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
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;
}

export type KinesisAnalyticsV2ClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type KinesisAnalyticsV2ClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 * <p>Amazon Kinesis Data Analytics is a fully managed service that you can use to process and analyze streaming data using Java, SQL, or Scala. The service
 *       enables you to quickly author and run Java, SQL, or Scala code against streaming sources to perform time
 *       series analytics, feed real-time dashboards, and create real-time metrics.</p>
 */
export class KinesisAnalyticsV2Client extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  KinesisAnalyticsV2ClientResolvedConfig
> {
  readonly config: KinesisAnalyticsV2ClientResolvedConfig;

  constructor(configuration: KinesisAnalyticsV2ClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration,
    };
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveAwsAuthConfig(_config_2);
    let _config_4 = resolveRetryConfig(_config_3);
    let _config_5 = resolveUserAgentConfig(_config_4);
    let _config_6 = resolveHostHeaderConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
  }

  destroy(): void {
    super.destroy();
  }
}
