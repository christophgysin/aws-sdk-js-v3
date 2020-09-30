
import { DataPipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataPipelineClient.ts";
import { ReportTaskRunnerHeartbeatInput, ReportTaskRunnerHeartbeatOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ReportTaskRunnerHeartbeatCommand,
  serializeAws_json1_1ReportTaskRunnerHeartbeatCommand,
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

export type ReportTaskRunnerHeartbeatCommandInput = ReportTaskRunnerHeartbeatInput;
export type ReportTaskRunnerHeartbeatCommandOutput = ReportTaskRunnerHeartbeatOutput & __MetadataBearer;

export class ReportTaskRunnerHeartbeatCommand extends $Command<
  ReportTaskRunnerHeartbeatCommandInput,
  ReportTaskRunnerHeartbeatCommandOutput,
  DataPipelineClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ReportTaskRunnerHeartbeatCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataPipelineClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ReportTaskRunnerHeartbeatCommandInput, ReportTaskRunnerHeartbeatCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: ReportTaskRunnerHeartbeatInput.filterSensitiveLog,
      outputFilterSensitiveLog: ReportTaskRunnerHeartbeatOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ReportTaskRunnerHeartbeatCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ReportTaskRunnerHeartbeatCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ReportTaskRunnerHeartbeatCommandOutput> {
    return deserializeAws_json1_1ReportTaskRunnerHeartbeatCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
