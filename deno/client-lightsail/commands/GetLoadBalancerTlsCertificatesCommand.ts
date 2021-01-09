import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient.ts";
import { GetLoadBalancerTlsCertificatesRequest, GetLoadBalancerTlsCertificatesResult } from "../models/models_1.ts";
import {
  deserializeAws_json1_1GetLoadBalancerTlsCertificatesCommand,
  serializeAws_json1_1GetLoadBalancerTlsCertificatesCommand,
} from "../protocols/Aws_json1_1.ts";
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

export type GetLoadBalancerTlsCertificatesCommandInput = GetLoadBalancerTlsCertificatesRequest;
export type GetLoadBalancerTlsCertificatesCommandOutput = GetLoadBalancerTlsCertificatesResult & __MetadataBearer;

/**
 * <p>Returns information about the TLS certificates that are associated with the specified
 *       Lightsail load balancer.</p>
 *          <p>TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p>
 *          <p>You can have a maximum of 2 certificates associated with a Lightsail load balancer. One
 *       is active and the other is inactive.</p>
 */
export class GetLoadBalancerTlsCertificatesCommand extends $Command<
  GetLoadBalancerTlsCertificatesCommandInput,
  GetLoadBalancerTlsCertificatesCommandOutput,
  LightsailClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetLoadBalancerTlsCertificatesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetLoadBalancerTlsCertificatesCommandInput, GetLoadBalancerTlsCertificatesCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetLoadBalancerTlsCertificatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetLoadBalancerTlsCertificatesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetLoadBalancerTlsCertificatesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetLoadBalancerTlsCertificatesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetLoadBalancerTlsCertificatesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetLoadBalancerTlsCertificatesCommandOutput> {
    return deserializeAws_json1_1GetLoadBalancerTlsCertificatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
