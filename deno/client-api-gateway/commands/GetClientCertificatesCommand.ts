import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient.ts";
import { ClientCertificates, GetClientCertificatesRequest } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetClientCertificatesCommand,
  serializeAws_restJson1GetClientCertificatesCommand,
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

export interface GetClientCertificatesCommandInput extends GetClientCertificatesRequest {}
export interface GetClientCertificatesCommandOutput extends ClientCertificates, __MetadataBearer {}

/**
 * <p>Gets a collection of <a>ClientCertificate</a> resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetClientCertificatesCommand } from "../../client-api-gateway/mod.ts";
 * // const { APIGatewayClient, GetClientCertificatesCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new GetClientCertificatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetClientCertificatesCommandInput} for command's `input` shape.
 * @see {@link GetClientCertificatesCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetClientCertificatesCommand extends $Command<
  GetClientCertificatesCommandInput,
  GetClientCertificatesCommandOutput,
  APIGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetClientCertificatesCommandInput) {
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
  ): Handler<GetClientCertificatesCommandInput, GetClientCertificatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "APIGatewayClient";
    const commandName = "GetClientCertificatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetClientCertificatesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ClientCertificates.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetClientCertificatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetClientCertificatesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetClientCertificatesCommandOutput> {
    return deserializeAws_restJson1GetClientCertificatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
