import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client.ts";
import { GetApiMappingRequest, GetApiMappingResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetApiMappingCommand,
  serializeAws_restJson1GetApiMappingCommand,
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

export interface GetApiMappingCommandInput extends GetApiMappingRequest {}
export interface GetApiMappingCommandOutput extends GetApiMappingResponse, __MetadataBearer {}

/**
 * <p>Gets an API mapping.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, GetApiMappingCommand } from "../../client-apigatewayv2/mod.ts";
 * // const { ApiGatewayV2Client, GetApiMappingCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const command = new GetApiMappingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetApiMappingCommandInput} for command's `input` shape.
 * @see {@link GetApiMappingCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetApiMappingCommand extends $Command<
  GetApiMappingCommandInput,
  GetApiMappingCommandOutput,
  ApiGatewayV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetApiMappingCommandInput) {
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
  ): Handler<GetApiMappingCommandInput, GetApiMappingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApiGatewayV2Client";
    const commandName = "GetApiMappingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetApiMappingRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetApiMappingResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetApiMappingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetApiMappingCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetApiMappingCommandOutput> {
    return deserializeAws_restJson1GetApiMappingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
