import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient.ts";
import { SendUsersMessagesRequest, SendUsersMessagesResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1SendUsersMessagesCommand,
  serializeAws_restJson1SendUsersMessagesCommand,
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

export interface SendUsersMessagesCommandInput extends SendUsersMessagesRequest {}
export interface SendUsersMessagesCommandOutput extends SendUsersMessagesResponse, __MetadataBearer {}

/**
 * <p>Creates and sends a message to a list of users.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, SendUsersMessagesCommand } from "../../client-pinpoint/mod.ts";
 * // const { PinpointClient, SendUsersMessagesCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new SendUsersMessagesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendUsersMessagesCommandInput} for command's `input` shape.
 * @see {@link SendUsersMessagesCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class SendUsersMessagesCommand extends $Command<
  SendUsersMessagesCommandInput,
  SendUsersMessagesCommandOutput,
  PinpointClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SendUsersMessagesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SendUsersMessagesCommandInput, SendUsersMessagesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "SendUsersMessagesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SendUsersMessagesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SendUsersMessagesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SendUsersMessagesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1SendUsersMessagesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SendUsersMessagesCommandOutput> {
    return deserializeAws_restJson1SendUsersMessagesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
