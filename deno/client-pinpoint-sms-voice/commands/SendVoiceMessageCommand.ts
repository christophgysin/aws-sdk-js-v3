import { PinpointSMSVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointSMSVoiceClient.ts";
import { SendVoiceMessageRequest, SendVoiceMessageResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1SendVoiceMessageCommand,
  serializeAws_restJson1SendVoiceMessageCommand,
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

export interface SendVoiceMessageCommandInput extends SendVoiceMessageRequest {}
export interface SendVoiceMessageCommandOutput extends SendVoiceMessageResponse, __MetadataBearer {}

/**
 * Create a new voice message and send it to a recipient's phone number.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceClient, SendVoiceMessageCommand } from "../../client-pinpoint-sms-voice/mod.ts";
 * // const { PinpointSMSVoiceClient, SendVoiceMessageCommand } = require("@aws-sdk/client-pinpoint-sms-voice"); // CommonJS import
 * const client = new PinpointSMSVoiceClient(config);
 * const command = new SendVoiceMessageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendVoiceMessageCommandInput} for command's `input` shape.
 * @see {@link SendVoiceMessageCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class SendVoiceMessageCommand extends $Command<
  SendVoiceMessageCommandInput,
  SendVoiceMessageCommandOutput,
  PinpointSMSVoiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SendVoiceMessageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointSMSVoiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SendVoiceMessageCommandInput, SendVoiceMessageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointSMSVoiceClient";
    const commandName = "SendVoiceMessageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SendVoiceMessageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SendVoiceMessageResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SendVoiceMessageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1SendVoiceMessageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SendVoiceMessageCommandOutput> {
    return deserializeAws_restJson1SendVoiceMessageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
