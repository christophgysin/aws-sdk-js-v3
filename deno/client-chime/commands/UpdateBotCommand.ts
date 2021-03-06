import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient.ts";
import { UpdateBotRequest, UpdateBotResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1UpdateBotCommand,
  serializeAws_restJson1UpdateBotCommand,
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

export interface UpdateBotCommandInput extends UpdateBotRequest {}
export interface UpdateBotCommandOutput extends UpdateBotResponse, __MetadataBearer {}

/**
 * <p>Updates the status of the specified bot, such as starting or stopping the bot from running in your Amazon Chime Enterprise account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, UpdateBotCommand } from "../../client-chime/mod.ts";
 * // const { ChimeClient, UpdateBotCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new UpdateBotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateBotCommandInput} for command's `input` shape.
 * @see {@link UpdateBotCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateBotCommand extends $Command<
  UpdateBotCommandInput,
  UpdateBotCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateBotCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateBotCommandInput, UpdateBotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "UpdateBotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateBotRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateBotResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateBotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateBotCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateBotCommandOutput> {
    return deserializeAws_restJson1UpdateBotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
