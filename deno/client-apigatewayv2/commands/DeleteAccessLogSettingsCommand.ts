import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client.ts";
import { DeleteAccessLogSettingsRequest } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DeleteAccessLogSettingsCommand,
  serializeAws_restJson1DeleteAccessLogSettingsCommand,
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

export interface DeleteAccessLogSettingsCommandInput extends DeleteAccessLogSettingsRequest {}
export interface DeleteAccessLogSettingsCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the AccessLogSettings for a Stage. To disable access logging for a Stage, delete its AccessLogSettings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, DeleteAccessLogSettingsCommand } from "../../client-apigatewayv2/mod.ts";
 * // const { ApiGatewayV2Client, DeleteAccessLogSettingsCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const command = new DeleteAccessLogSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAccessLogSettingsCommandInput} for command's `input` shape.
 * @see {@link DeleteAccessLogSettingsCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteAccessLogSettingsCommand extends $Command<
  DeleteAccessLogSettingsCommandInput,
  DeleteAccessLogSettingsCommandOutput,
  ApiGatewayV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteAccessLogSettingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApiGatewayV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteAccessLogSettingsCommandInput, DeleteAccessLogSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApiGatewayV2Client";
    const commandName = "DeleteAccessLogSettingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteAccessLogSettingsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteAccessLogSettingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteAccessLogSettingsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteAccessLogSettingsCommandOutput> {
    return deserializeAws_restJson1DeleteAccessLogSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
