import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient.ts";
import { GatewayResponse, PutGatewayResponseRequest } from "../models/models_0.ts";
import {
  deserializeAws_restJson1PutGatewayResponseCommand,
  serializeAws_restJson1PutGatewayResponseCommand,
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

export interface PutGatewayResponseCommandInput extends PutGatewayResponseRequest {}
export interface PutGatewayResponseCommandOutput extends GatewayResponse, __MetadataBearer {}

/**
 * <p>Creates a customization of a <a>GatewayResponse</a> of a specified response type and status code on the given <a>RestApi</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, PutGatewayResponseCommand } from "../../client-api-gateway/mod.ts";
 * // const { APIGatewayClient, PutGatewayResponseCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new PutGatewayResponseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutGatewayResponseCommandInput} for command's `input` shape.
 * @see {@link PutGatewayResponseCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class PutGatewayResponseCommand extends $Command<
  PutGatewayResponseCommandInput,
  PutGatewayResponseCommandOutput,
  APIGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutGatewayResponseCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutGatewayResponseCommandInput, PutGatewayResponseCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "APIGatewayClient";
    const commandName = "PutGatewayResponseCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutGatewayResponseRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GatewayResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutGatewayResponseCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutGatewayResponseCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutGatewayResponseCommandOutput> {
    return deserializeAws_restJson1PutGatewayResponseCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
