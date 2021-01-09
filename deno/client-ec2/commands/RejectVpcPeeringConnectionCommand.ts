import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client.ts";
import { RejectVpcPeeringConnectionRequest, RejectVpcPeeringConnectionResult } from "../models/models_4.ts";
import {
  deserializeAws_ec2RejectVpcPeeringConnectionCommand,
  serializeAws_ec2RejectVpcPeeringConnectionCommand,
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

export type RejectVpcPeeringConnectionCommandInput = RejectVpcPeeringConnectionRequest;
export type RejectVpcPeeringConnectionCommandOutput = RejectVpcPeeringConnectionResult & __MetadataBearer;

/**
 * <p>Rejects a VPC peering connection request. The VPC peering connection must be in the
 * 				<code>pending-acceptance</code> state. Use the <a>DescribeVpcPeeringConnections</a> request
 * 			to view your outstanding VPC peering connection requests. To delete an active VPC peering
 * 			connection, or to delete a VPC peering connection request that you initiated, use	<a>DeleteVpcPeeringConnection</a>.</p>
 */
export class RejectVpcPeeringConnectionCommand extends $Command<
  RejectVpcPeeringConnectionCommandInput,
  RejectVpcPeeringConnectionCommandOutput,
  EC2ClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RejectVpcPeeringConnectionCommandInput) {
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
  ): Handler<RejectVpcPeeringConnectionCommandInput, RejectVpcPeeringConnectionCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "RejectVpcPeeringConnectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RejectVpcPeeringConnectionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RejectVpcPeeringConnectionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RejectVpcPeeringConnectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2RejectVpcPeeringConnectionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RejectVpcPeeringConnectionCommandOutput> {
    return deserializeAws_ec2RejectVpcPeeringConnectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
