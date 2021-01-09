import {
  ElasticLoadBalancingV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingV2Client.ts";
import { DescribeListenerCertificatesInput, DescribeListenerCertificatesOutput } from "../models/models_0.ts";
import {
  deserializeAws_queryDescribeListenerCertificatesCommand,
  serializeAws_queryDescribeListenerCertificatesCommand,
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

export type DescribeListenerCertificatesCommandInput = DescribeListenerCertificatesInput;
export type DescribeListenerCertificatesCommandOutput = DescribeListenerCertificatesOutput & __MetadataBearer;

/**
 * <p>Describes the default certificate and the certificate list for the specified HTTPS or TLS listener.</p>
 *          <p>If the default certificate is also in the certificate list, it appears twice in the results
 *       (once with <code>IsDefault</code> set to true and once with <code>IsDefault</code> set to false).</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#https-listener-certificates">SSL certificates</a> in the <i>Application Load Balancers Guide</i> or
 *       <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#tls-listener-certificate">Server certificates</a> in the <i>Network Load Balancers Guide</i>.</p>
 */
export class DescribeListenerCertificatesCommand extends $Command<
  DescribeListenerCertificatesCommandInput,
  DescribeListenerCertificatesCommandOutput,
  ElasticLoadBalancingV2ClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeListenerCertificatesCommandInput) {
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
  ): Handler<DescribeListenerCertificatesCommandInput, DescribeListenerCertificatesCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingV2Client";
    const commandName = "DescribeListenerCertificatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeListenerCertificatesInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeListenerCertificatesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeListenerCertificatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeListenerCertificatesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeListenerCertificatesCommandOutput> {
    return deserializeAws_queryDescribeListenerCertificatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
