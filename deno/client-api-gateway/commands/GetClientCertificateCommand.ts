import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient.ts";
import { ClientCertificate, GetClientCertificateRequest } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetClientCertificateCommand,
  serializeAws_restJson1GetClientCertificateCommand,
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

export interface GetClientCertificateCommandInput extends GetClientCertificateRequest {}
export interface GetClientCertificateCommandOutput extends ClientCertificate, __MetadataBearer {}

/**
 * <p>Gets information about the current <a>ClientCertificate</a> resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetClientCertificateCommand } from "../../client-api-gateway/mod.ts";
 * // const { APIGatewayClient, GetClientCertificateCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new GetClientCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetClientCertificateCommandInput} for command's `input` shape.
 * @see {@link GetClientCertificateCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetClientCertificateCommand extends $Command<
  GetClientCertificateCommandInput,
  GetClientCertificateCommandOutput,
  APIGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetClientCertificateCommandInput) {
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
  ): Handler<GetClientCertificateCommandInput, GetClientCertificateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "APIGatewayClient";
    const commandName = "GetClientCertificateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetClientCertificateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ClientCertificate.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetClientCertificateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetClientCertificateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetClientCertificateCommandOutput> {
    return deserializeAws_restJson1GetClientCertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
