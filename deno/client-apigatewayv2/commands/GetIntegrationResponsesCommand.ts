import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client.ts";
import { GetIntegrationResponsesRequest, GetIntegrationResponsesResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetIntegrationResponsesCommand,
  serializeAws_restJson1GetIntegrationResponsesCommand,
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

export interface GetIntegrationResponsesCommandInput extends GetIntegrationResponsesRequest {}
export interface GetIntegrationResponsesCommandOutput extends GetIntegrationResponsesResponse, __MetadataBearer {}

/**
 * <p>Gets the IntegrationResponses for an Integration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, GetIntegrationResponsesCommand } from "../../client-apigatewayv2/mod.ts";
 * // const { ApiGatewayV2Client, GetIntegrationResponsesCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const command = new GetIntegrationResponsesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetIntegrationResponsesCommandInput} for command's `input` shape.
 * @see {@link GetIntegrationResponsesCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetIntegrationResponsesCommand extends $Command<
  GetIntegrationResponsesCommandInput,
  GetIntegrationResponsesCommandOutput,
  ApiGatewayV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetIntegrationResponsesCommandInput) {
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
  ): Handler<GetIntegrationResponsesCommandInput, GetIntegrationResponsesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApiGatewayV2Client";
    const commandName = "GetIntegrationResponsesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetIntegrationResponsesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetIntegrationResponsesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetIntegrationResponsesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetIntegrationResponsesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetIntegrationResponsesCommandOutput> {
    return deserializeAws_restJson1GetIntegrationResponsesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
