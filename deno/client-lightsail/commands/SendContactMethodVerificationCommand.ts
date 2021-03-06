import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient.ts";
import { SendContactMethodVerificationRequest, SendContactMethodVerificationResult } from "../models/models_1.ts";
import {
  deserializeAws_json1_1SendContactMethodVerificationCommand,
  serializeAws_json1_1SendContactMethodVerificationCommand,
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

export interface SendContactMethodVerificationCommandInput extends SendContactMethodVerificationRequest {}
export interface SendContactMethodVerificationCommandOutput
  extends SendContactMethodVerificationResult,
    __MetadataBearer {}

/**
 * <p>Sends a verification request to an email contact method to ensure it's owned by the
 *       requester. SMS contact methods don't need to be verified.</p>
 *          <p>A contact method is used to send you notifications about your Amazon Lightsail resources.
 *       You can add one email address and one mobile phone number contact method in each AWS Region.
 *       However, SMS text messaging is not supported in some AWS Regions, and SMS text messages
 *       cannot be sent to some countries/regions. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p>
 *          <p>A verification request is sent to the contact method when you initially create it. Use
 *       this action to send another verification request if a previous verification request was
 *       deleted, or has expired.</p>
 *          <important>
 *             <p>Notifications are not sent to an email contact method until after it is verified, and
 *         confirmed as valid.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, SendContactMethodVerificationCommand } from "../../client-lightsail/mod.ts";
 * // const { LightsailClient, SendContactMethodVerificationCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new SendContactMethodVerificationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendContactMethodVerificationCommandInput} for command's `input` shape.
 * @see {@link SendContactMethodVerificationCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class SendContactMethodVerificationCommand extends $Command<
  SendContactMethodVerificationCommandInput,
  SendContactMethodVerificationCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SendContactMethodVerificationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SendContactMethodVerificationCommandInput, SendContactMethodVerificationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "SendContactMethodVerificationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SendContactMethodVerificationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SendContactMethodVerificationResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SendContactMethodVerificationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1SendContactMethodVerificationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SendContactMethodVerificationCommandOutput> {
    return deserializeAws_json1_1SendContactMethodVerificationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
