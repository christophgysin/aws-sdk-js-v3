import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client.ts";
import { EnableMacieRequest, EnableMacieResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1EnableMacieCommand,
  serializeAws_restJson1EnableMacieCommand,
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

export interface EnableMacieCommandInput extends EnableMacieRequest {}
export interface EnableMacieCommandOutput extends EnableMacieResponse, __MetadataBearer {}

/**
 * <p>Enables Amazon Macie and specifies the configuration settings for a Macie account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, EnableMacieCommand } from "../../client-macie2/mod.ts";
 * // const { Macie2Client, EnableMacieCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new EnableMacieCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableMacieCommandInput} for command's `input` shape.
 * @see {@link EnableMacieCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class EnableMacieCommand extends $Command<
  EnableMacieCommandInput,
  EnableMacieCommandOutput,
  Macie2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: EnableMacieCommandInput) {
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
  ): Handler<EnableMacieCommandInput, EnableMacieCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Macie2Client";
    const commandName = "EnableMacieCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: EnableMacieRequest.filterSensitiveLog,
      outputFilterSensitiveLog: EnableMacieResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: EnableMacieCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1EnableMacieCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<EnableMacieCommandOutput> {
    return deserializeAws_restJson1EnableMacieCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
