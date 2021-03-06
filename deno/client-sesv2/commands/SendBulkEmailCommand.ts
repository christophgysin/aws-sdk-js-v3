import { SESv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESv2Client.ts";
import { SendBulkEmailRequest, SendBulkEmailResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1SendBulkEmailCommand,
  serializeAws_restJson1SendBulkEmailCommand,
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

export interface SendBulkEmailCommandInput extends SendBulkEmailRequest {}
export interface SendBulkEmailCommandOutput extends SendBulkEmailResponse, __MetadataBearer {}

/**
 * <p>Composes an email message to multiple destinations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, SendBulkEmailCommand } from "../../client-sesv2/mod.ts";
 * // const { SESv2Client, SendBulkEmailCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new SendBulkEmailCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendBulkEmailCommandInput} for command's `input` shape.
 * @see {@link SendBulkEmailCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class SendBulkEmailCommand extends $Command<
  SendBulkEmailCommandInput,
  SendBulkEmailCommandOutput,
  SESv2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SendBulkEmailCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESv2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SendBulkEmailCommandInput, SendBulkEmailCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESv2Client";
    const commandName = "SendBulkEmailCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SendBulkEmailRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SendBulkEmailResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SendBulkEmailCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1SendBulkEmailCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SendBulkEmailCommandOutput> {
    return deserializeAws_restJson1SendBulkEmailCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
