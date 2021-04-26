import { CodeGuruProfilerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruProfilerClient.ts";
import { BatchGetFrameMetricDataRequest, BatchGetFrameMetricDataResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1BatchGetFrameMetricDataCommand,
  serializeAws_restJson1BatchGetFrameMetricDataCommand,
} from "../protocols/Aws_restJson1.ts";
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

export interface BatchGetFrameMetricDataCommandInput extends BatchGetFrameMetricDataRequest {}
export interface BatchGetFrameMetricDataCommandOutput extends BatchGetFrameMetricDataResponse, __MetadataBearer {}

/**
 * <p>
 *          Returns the time series of values for a requested list
 *          of frame metrics from a time period.</p>
 */
export class BatchGetFrameMetricDataCommand extends $Command<
  BatchGetFrameMetricDataCommandInput,
  BatchGetFrameMetricDataCommandOutput,
  CodeGuruProfilerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchGetFrameMetricDataCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeGuruProfilerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchGetFrameMetricDataCommandInput, BatchGetFrameMetricDataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeGuruProfilerClient";
    const commandName = "BatchGetFrameMetricDataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchGetFrameMetricDataRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchGetFrameMetricDataResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchGetFrameMetricDataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchGetFrameMetricDataCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchGetFrameMetricDataCommandOutput> {
    return deserializeAws_restJson1BatchGetFrameMetricDataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
