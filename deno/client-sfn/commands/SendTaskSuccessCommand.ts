
import { SFNClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SFNClient.ts";
import { SendTaskSuccessInput, SendTaskSuccessOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_0SendTaskSuccessCommand,
  serializeAws_json1_0SendTaskSuccessCommand,
} from "../protocols/Aws_json1_0.ts";
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

export type SendTaskSuccessCommandInput = SendTaskSuccessInput;
export type SendTaskSuccessCommandOutput = SendTaskSuccessOutput & __MetadataBearer;

export class SendTaskSuccessCommand extends $Command<
  SendTaskSuccessCommandInput,
  SendTaskSuccessCommandOutput,
  SFNClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SendTaskSuccessCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SFNClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SendTaskSuccessCommandInput, SendTaskSuccessCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: SendTaskSuccessInput.filterSensitiveLog,
      outputFilterSensitiveLog: SendTaskSuccessOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SendTaskSuccessCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0SendTaskSuccessCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SendTaskSuccessCommandOutput> {
    return deserializeAws_json1_0SendTaskSuccessCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
