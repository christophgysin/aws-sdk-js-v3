import {
  CodestarNotificationsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CodestarNotificationsClient.ts";
import { DeleteNotificationRuleRequest, DeleteNotificationRuleResult } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DeleteNotificationRuleCommand,
  serializeAws_restJson1DeleteNotificationRuleCommand,
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

export interface DeleteNotificationRuleCommandInput extends DeleteNotificationRuleRequest {}
export interface DeleteNotificationRuleCommandOutput extends DeleteNotificationRuleResult, __MetadataBearer {}

/**
 * <p>Deletes a notification rule for a resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodestarNotificationsClient, DeleteNotificationRuleCommand } from "../../client-codestar-notifications/mod.ts";
 * // const { CodestarNotificationsClient, DeleteNotificationRuleCommand } = require("@aws-sdk/client-codestar-notifications"); // CommonJS import
 * const client = new CodestarNotificationsClient(config);
 * const command = new DeleteNotificationRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteNotificationRuleCommandInput} for command's `input` shape.
 * @see {@link DeleteNotificationRuleCommandOutput} for command's `response` shape.
 * @see {@link CodestarNotificationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteNotificationRuleCommand extends $Command<
  DeleteNotificationRuleCommandInput,
  DeleteNotificationRuleCommandOutput,
  CodestarNotificationsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteNotificationRuleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodestarNotificationsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteNotificationRuleCommandInput, DeleteNotificationRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodestarNotificationsClient";
    const commandName = "DeleteNotificationRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteNotificationRuleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteNotificationRuleResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteNotificationRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteNotificationRuleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteNotificationRuleCommandOutput> {
    return deserializeAws_restJson1DeleteNotificationRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
