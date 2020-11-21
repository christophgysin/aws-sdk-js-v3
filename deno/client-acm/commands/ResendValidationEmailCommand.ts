
import { ACMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMClient.ts";
import { ResendValidationEmailRequest } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ResendValidationEmailCommand,
  serializeAws_json1_1ResendValidationEmailCommand,
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

export type ResendValidationEmailCommandInput = ResendValidationEmailRequest;
export type ResendValidationEmailCommandOutput = __MetadataBearer;

export class ResendValidationEmailCommand extends $Command<
  ResendValidationEmailCommandInput,
  ResendValidationEmailCommandOutput,
  ACMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ResendValidationEmailCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ACMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ResendValidationEmailCommandInput, ResendValidationEmailCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ACMClient";
    const commandName = "ResendValidationEmailCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ResendValidationEmailRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };

    if (typeof logger.info === "function") {
      logger.info({
        clientName,
        commandName,
      });
    }

    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ResendValidationEmailCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ResendValidationEmailCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ResendValidationEmailCommandOutput> {
    return deserializeAws_json1_1ResendValidationEmailCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
