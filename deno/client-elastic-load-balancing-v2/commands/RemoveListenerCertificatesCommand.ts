import {
  ElasticLoadBalancingV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingV2Client.ts";
import { RemoveListenerCertificatesInput, RemoveListenerCertificatesOutput } from "../models/models_0.ts";
import {
  deserializeAws_queryRemoveListenerCertificatesCommand,
  serializeAws_queryRemoveListenerCertificatesCommand,
} from "../protocols/Aws_query.ts";
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

export interface RemoveListenerCertificatesCommandInput extends RemoveListenerCertificatesInput {}
export interface RemoveListenerCertificatesCommandOutput extends RemoveListenerCertificatesOutput, __MetadataBearer {}

/**
 * <p>Removes the specified certificate from the certificate list for the specified HTTPS or TLS
 *       listener.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, RemoveListenerCertificatesCommand } from "../../client-elastic-load-balancing-v2/mod.ts";
 * // const { ElasticLoadBalancingV2Client, RemoveListenerCertificatesCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const command = new RemoveListenerCertificatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveListenerCertificatesCommandInput} for command's `input` shape.
 * @see {@link RemoveListenerCertificatesCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class RemoveListenerCertificatesCommand extends $Command<
  RemoveListenerCertificatesCommandInput,
  RemoveListenerCertificatesCommandOutput,
  ElasticLoadBalancingV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RemoveListenerCertificatesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticLoadBalancingV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RemoveListenerCertificatesCommandInput, RemoveListenerCertificatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingV2Client";
    const commandName = "RemoveListenerCertificatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RemoveListenerCertificatesInput.filterSensitiveLog,
      outputFilterSensitiveLog: RemoveListenerCertificatesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RemoveListenerCertificatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryRemoveListenerCertificatesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RemoveListenerCertificatesCommandOutput> {
    return deserializeAws_queryRemoveListenerCertificatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
