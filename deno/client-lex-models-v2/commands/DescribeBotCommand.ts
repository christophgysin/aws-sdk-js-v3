import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client.ts";
import { DescribeBotRequest, DescribeBotResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DescribeBotCommand,
  serializeAws_restJson1DescribeBotCommand,
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

export interface DescribeBotCommandInput extends DescribeBotRequest {}
export interface DescribeBotCommandOutput extends DescribeBotResponse, __MetadataBearer {}

/**
 * <p>Provides metadata information about a bot. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DescribeBotCommand } from "../../client-lex-models-v2/mod.ts";
 * // const { LexModelsV2Client, DescribeBotCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new DescribeBotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeBotCommandInput} for command's `input` shape.
 * @see {@link DescribeBotCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeBotCommand extends $Command<
  DescribeBotCommandInput,
  DescribeBotCommandOutput,
  LexModelsV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeBotCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexModelsV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeBotCommandInput, DescribeBotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelsV2Client";
    const commandName = "DescribeBotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeBotRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeBotResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeBotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeBotCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeBotCommandOutput> {
    return deserializeAws_restJson1DescribeBotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
