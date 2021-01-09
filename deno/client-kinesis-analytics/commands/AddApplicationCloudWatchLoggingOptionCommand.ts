import { KinesisAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisAnalyticsClient.ts";
import {
  AddApplicationCloudWatchLoggingOptionRequest,
  AddApplicationCloudWatchLoggingOptionResponse,
} from "../models/models_0.ts";
import {
  deserializeAws_json1_1AddApplicationCloudWatchLoggingOptionCommand,
  serializeAws_json1_1AddApplicationCloudWatchLoggingOptionCommand,
} from "../protocols/Aws_json1_1.ts";
import { getSerdePlugin } from "../../middleware-serde/mod.ts";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "../../protocol-http/mod.ts";
import { Command as $Command } from "../../smithy-client/mod.ts";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "../../types/mod.ts";

export type AddApplicationCloudWatchLoggingOptionCommandInput = AddApplicationCloudWatchLoggingOptionRequest;
export type AddApplicationCloudWatchLoggingOptionCommandOutput = AddApplicationCloudWatchLoggingOptionResponse &
  __MetadataBearer;

/**
 * <note>
 *             <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p>
 *          </note>
 *         <p>Adds a CloudWatch log stream to monitor application configuration errors. For more
 *             information about using CloudWatch log streams with Amazon Kinesis Analytics
 *             applications, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/cloudwatch-logs.html">Working with Amazon
 *                 CloudWatch Logs</a>.</p>
 */
export class AddApplicationCloudWatchLoggingOptionCommand extends $Command<
  AddApplicationCloudWatchLoggingOptionCommandInput,
  AddApplicationCloudWatchLoggingOptionCommandOutput,
  KinesisAnalyticsClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AddApplicationCloudWatchLoggingOptionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisAnalyticsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AddApplicationCloudWatchLoggingOptionCommandInput, AddApplicationCloudWatchLoggingOptionCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisAnalyticsClient";
    const commandName = "AddApplicationCloudWatchLoggingOptionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AddApplicationCloudWatchLoggingOptionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AddApplicationCloudWatchLoggingOptionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AddApplicationCloudWatchLoggingOptionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1AddApplicationCloudWatchLoggingOptionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AddApplicationCloudWatchLoggingOptionCommandOutput> {
    return deserializeAws_json1_1AddApplicationCloudWatchLoggingOptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
