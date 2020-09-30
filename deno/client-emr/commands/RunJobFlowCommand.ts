
import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient.ts";
import { RunJobFlowInput, RunJobFlowOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1RunJobFlowCommand,
  serializeAws_json1_1RunJobFlowCommand,
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

export type RunJobFlowCommandInput = RunJobFlowInput;
export type RunJobFlowCommandOutput = RunJobFlowOutput & __MetadataBearer;

export class RunJobFlowCommand extends $Command<
  RunJobFlowCommandInput,
  RunJobFlowCommandOutput,
  EMRClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RunJobFlowCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RunJobFlowCommandInput, RunJobFlowCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: RunJobFlowInput.filterSensitiveLog,
      outputFilterSensitiveLog: RunJobFlowOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RunJobFlowCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RunJobFlowCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RunJobFlowCommandOutput> {
    return deserializeAws_json1_1RunJobFlowCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
