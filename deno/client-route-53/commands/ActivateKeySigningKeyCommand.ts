import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client.ts";
import { ActivateKeySigningKeyRequest, ActivateKeySigningKeyResponse } from "../models/models_0.ts";
import {
  deserializeAws_restXmlActivateKeySigningKeyCommand,
  serializeAws_restXmlActivateKeySigningKeyCommand,
} from "../protocols/Aws_restXml.ts";
import { getIdNormalizerPlugin } from "../../middleware-sdk-route53/mod.ts";
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

export interface ActivateKeySigningKeyCommandInput extends ActivateKeySigningKeyRequest {}
export interface ActivateKeySigningKeyCommandOutput extends ActivateKeySigningKeyResponse, __MetadataBearer {}

/**
 * <p>Activates a key-signing key (KSK) so that it can be used for signing by DNSSEC. This operation changes the
 * 			KSK status to <code>ACTIVE</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ActivateKeySigningKeyCommand } from "../../client-route-53/mod.ts";
 * // const { Route53Client, ActivateKeySigningKeyCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new ActivateKeySigningKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ActivateKeySigningKeyCommandInput} for command's `input` shape.
 * @see {@link ActivateKeySigningKeyCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ActivateKeySigningKeyCommand extends $Command<
  ActivateKeySigningKeyCommandInput,
  ActivateKeySigningKeyCommandOutput,
  Route53ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ActivateKeySigningKeyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ActivateKeySigningKeyCommandInput, ActivateKeySigningKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "ActivateKeySigningKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ActivateKeySigningKeyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ActivateKeySigningKeyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ActivateKeySigningKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlActivateKeySigningKeyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ActivateKeySigningKeyCommandOutput> {
    return deserializeAws_restXmlActivateKeySigningKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
