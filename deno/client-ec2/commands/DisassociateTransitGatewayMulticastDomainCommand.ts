import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client.ts";
import {
  DisassociateTransitGatewayMulticastDomainRequest,
  DisassociateTransitGatewayMulticastDomainResult,
} from "../models/models_4.ts";
import {
  deserializeAws_ec2DisassociateTransitGatewayMulticastDomainCommand,
  serializeAws_ec2DisassociateTransitGatewayMulticastDomainCommand,
} from "../protocols/Aws_ec2.ts";
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

export type DisassociateTransitGatewayMulticastDomainCommandInput = DisassociateTransitGatewayMulticastDomainRequest;
export type DisassociateTransitGatewayMulticastDomainCommandOutput = DisassociateTransitGatewayMulticastDomainResult &
  __MetadataBearer;

/**
 * <p>Disassociates the specified subnets from the transit gateway multicast domain. </p>
 */
export class DisassociateTransitGatewayMulticastDomainCommand extends $Command<
  DisassociateTransitGatewayMulticastDomainCommandInput,
  DisassociateTransitGatewayMulticastDomainCommandOutput,
  EC2ClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateTransitGatewayMulticastDomainCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DisassociateTransitGatewayMulticastDomainCommandInput,
    DisassociateTransitGatewayMulticastDomainCommandOutput
  > {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DisassociateTransitGatewayMulticastDomainCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateTransitGatewayMulticastDomainRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateTransitGatewayMulticastDomainResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisassociateTransitGatewayMulticastDomainCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DisassociateTransitGatewayMulticastDomainCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateTransitGatewayMulticastDomainCommandOutput> {
    return deserializeAws_ec2DisassociateTransitGatewayMulticastDomainCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
