import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient.ts";
import { GetUsagePlansRequest, UsagePlans } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetUsagePlansCommand,
  serializeAws_restJson1GetUsagePlansCommand,
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

export interface GetUsagePlansCommandInput extends GetUsagePlansRequest {}
export interface GetUsagePlansCommandOutput extends UsagePlans, __MetadataBearer {}

/**
 * <p>Gets all the usage plans of the caller's account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetUsagePlansCommand } from "../../client-api-gateway/mod.ts";
 * // const { APIGatewayClient, GetUsagePlansCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new GetUsagePlansCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetUsagePlansCommandInput} for command's `input` shape.
 * @see {@link GetUsagePlansCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetUsagePlansCommand extends $Command<
  GetUsagePlansCommandInput,
  GetUsagePlansCommandOutput,
  APIGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetUsagePlansCommandInput) {
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
  ): Handler<GetUsagePlansCommandInput, GetUsagePlansCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "APIGatewayClient";
    const commandName = "GetUsagePlansCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetUsagePlansRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UsagePlans.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetUsagePlansCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetUsagePlansCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetUsagePlansCommandOutput> {
    return deserializeAws_restJson1GetUsagePlansCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
