import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient.ts";
import { PutInvitationConfigurationRequest, PutInvitationConfigurationResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1PutInvitationConfigurationCommand,
  serializeAws_json1_1PutInvitationConfigurationCommand,
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

export interface PutInvitationConfigurationCommandInput extends PutInvitationConfigurationRequest {}
export interface PutInvitationConfigurationCommandOutput extends PutInvitationConfigurationResponse, __MetadataBearer {}

/**
 * <p>Configures the email template for the user enrollment invitation with the specified
 *          attributes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, PutInvitationConfigurationCommand } from "../../client-alexa-for-business/mod.ts";
 * // const { AlexaForBusinessClient, PutInvitationConfigurationCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new PutInvitationConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutInvitationConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutInvitationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class PutInvitationConfigurationCommand extends $Command<
  PutInvitationConfigurationCommandInput,
  PutInvitationConfigurationCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutInvitationConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutInvitationConfigurationCommandInput, PutInvitationConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "PutInvitationConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutInvitationConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutInvitationConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutInvitationConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutInvitationConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutInvitationConfigurationCommandOutput> {
    return deserializeAws_json1_1PutInvitationConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
