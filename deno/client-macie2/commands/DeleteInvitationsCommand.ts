import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client.ts";
import { DeleteInvitationsRequest, DeleteInvitationsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DeleteInvitationsCommand,
  serializeAws_restJson1DeleteInvitationsCommand,
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

export interface DeleteInvitationsCommandInput extends DeleteInvitationsRequest {}
export interface DeleteInvitationsCommandOutput extends DeleteInvitationsResponse, __MetadataBearer {}

/**
 * <p>Deletes Amazon Macie membership invitations that were received from specific accounts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, DeleteInvitationsCommand } from "../../client-macie2/mod.ts";
 * // const { Macie2Client, DeleteInvitationsCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new DeleteInvitationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteInvitationsCommandInput} for command's `input` shape.
 * @see {@link DeleteInvitationsCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteInvitationsCommand extends $Command<
  DeleteInvitationsCommandInput,
  DeleteInvitationsCommandOutput,
  Macie2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteInvitationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Macie2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteInvitationsCommandInput, DeleteInvitationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Macie2Client";
    const commandName = "DeleteInvitationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteInvitationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteInvitationsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteInvitationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteInvitationsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteInvitationsCommandOutput> {
    return deserializeAws_restJson1DeleteInvitationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
