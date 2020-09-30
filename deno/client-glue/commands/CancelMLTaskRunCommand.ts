
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient.ts";
import { CancelMLTaskRunRequest, CancelMLTaskRunResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1CancelMLTaskRunCommand,
  serializeAws_json1_1CancelMLTaskRunCommand,
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

export type CancelMLTaskRunCommandInput = CancelMLTaskRunRequest;
export type CancelMLTaskRunCommandOutput = CancelMLTaskRunResponse & __MetadataBearer;

export class CancelMLTaskRunCommand extends $Command<
  CancelMLTaskRunCommandInput,
  CancelMLTaskRunCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CancelMLTaskRunCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CancelMLTaskRunCommandInput, CancelMLTaskRunCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: CancelMLTaskRunRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CancelMLTaskRunResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CancelMLTaskRunCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CancelMLTaskRunCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CancelMLTaskRunCommandOutput> {
    return deserializeAws_json1_1CancelMLTaskRunCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
