import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient.ts";
import { UpdateFindingsFeedbackRequest, UpdateFindingsFeedbackResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1UpdateFindingsFeedbackCommand,
  serializeAws_restJson1UpdateFindingsFeedbackCommand,
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

export interface UpdateFindingsFeedbackCommandInput extends UpdateFindingsFeedbackRequest {}
export interface UpdateFindingsFeedbackCommandOutput extends UpdateFindingsFeedbackResponse, __MetadataBearer {}

/**
 * <p>Marks the specified GuardDuty findings as useful or not useful.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, UpdateFindingsFeedbackCommand } from "../../client-guardduty/mod.ts";
 * // const { GuardDutyClient, UpdateFindingsFeedbackCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new UpdateFindingsFeedbackCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFindingsFeedbackCommandInput} for command's `input` shape.
 * @see {@link UpdateFindingsFeedbackCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateFindingsFeedbackCommand extends $Command<
  UpdateFindingsFeedbackCommandInput,
  UpdateFindingsFeedbackCommandOutput,
  GuardDutyClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateFindingsFeedbackCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GuardDutyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateFindingsFeedbackCommandInput, UpdateFindingsFeedbackCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GuardDutyClient";
    const commandName = "UpdateFindingsFeedbackCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateFindingsFeedbackRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateFindingsFeedbackResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateFindingsFeedbackCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateFindingsFeedbackCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateFindingsFeedbackCommandOutput> {
    return deserializeAws_restJson1UpdateFindingsFeedbackCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
