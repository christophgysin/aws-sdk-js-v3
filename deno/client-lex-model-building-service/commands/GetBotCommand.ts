import {
  LexModelBuildingServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LexModelBuildingServiceClient.ts";
import { GetBotRequest, GetBotResponse } from "../models/models_0.ts";
import { deserializeAws_restJson1GetBotCommand, serializeAws_restJson1GetBotCommand } from "../protocols/Aws_restJson1.ts";
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

export interface GetBotCommandInput extends GetBotRequest {}
export interface GetBotCommandOutput extends GetBotResponse, __MetadataBearer {}

/**
 * <p>Returns metadata information for a specific bot. You must provide
 *       the bot name and the bot version or alias. </p>
 *          <p> This operation requires permissions for the
 *         <code>lex:GetBot</code> action. </p>
 */
export class GetBotCommand extends $Command<
  GetBotCommandInput,
  GetBotCommandOutput,
  LexModelBuildingServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetBotCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexModelBuildingServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetBotCommandInput, GetBotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelBuildingServiceClient";
    const commandName = "GetBotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetBotRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetBotResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetBotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetBotCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetBotCommandOutput> {
    return deserializeAws_restJson1GetBotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
