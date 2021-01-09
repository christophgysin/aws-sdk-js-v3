import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient.ts";
import { DescribeMetricFiltersRequest, DescribeMetricFiltersResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeMetricFiltersCommand,
  serializeAws_json1_1DescribeMetricFiltersCommand,
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

export type DescribeMetricFiltersCommandInput = DescribeMetricFiltersRequest;
export type DescribeMetricFiltersCommandOutput = DescribeMetricFiltersResponse & __MetadataBearer;

/**
 * <p>Lists the specified metric filters. You can list all of the metric filters or filter
 *       the results by log name, prefix, metric name, or metric namespace. The results are
 *       ASCII-sorted by filter name.</p>
 */
export class DescribeMetricFiltersCommand extends $Command<
  DescribeMetricFiltersCommandInput,
  DescribeMetricFiltersCommandOutput,
  CloudWatchLogsClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeMetricFiltersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeMetricFiltersCommandInput, DescribeMetricFiltersCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchLogsClient";
    const commandName = "DescribeMetricFiltersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeMetricFiltersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeMetricFiltersResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeMetricFiltersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeMetricFiltersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeMetricFiltersCommandOutput> {
    return deserializeAws_json1_1DescribeMetricFiltersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
