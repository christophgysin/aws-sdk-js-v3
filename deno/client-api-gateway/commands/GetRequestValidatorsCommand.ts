import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient.ts";
import { GetRequestValidatorsRequest, RequestValidators } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetRequestValidatorsCommand,
  serializeAws_restJson1GetRequestValidatorsCommand,
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

export interface GetRequestValidatorsCommandInput extends GetRequestValidatorsRequest {}
export interface GetRequestValidatorsCommandOutput extends RequestValidators, __MetadataBearer {}

/**
 * <p>Gets the <a>RequestValidators</a> collection of a given <a>RestApi</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetRequestValidatorsCommand } from "../../client-api-gateway/mod.ts";
 * // const { APIGatewayClient, GetRequestValidatorsCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new GetRequestValidatorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRequestValidatorsCommandInput} for command's `input` shape.
 * @see {@link GetRequestValidatorsCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetRequestValidatorsCommand extends $Command<
  GetRequestValidatorsCommandInput,
  GetRequestValidatorsCommandOutput,
  APIGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetRequestValidatorsCommandInput) {
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
  ): Handler<GetRequestValidatorsCommandInput, GetRequestValidatorsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "APIGatewayClient";
    const commandName = "GetRequestValidatorsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetRequestValidatorsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RequestValidators.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetRequestValidatorsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetRequestValidatorsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetRequestValidatorsCommandOutput> {
    return deserializeAws_restJson1GetRequestValidatorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
