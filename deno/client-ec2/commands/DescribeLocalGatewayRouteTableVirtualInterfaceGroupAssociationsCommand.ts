import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client.ts";
import {
  DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest,
  DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult,
} from "../models/models_3.ts";
import {
  deserializeAws_ec2DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand,
  serializeAws_ec2DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand,
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

export interface DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandInput
  extends DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest {}
export interface DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandOutput
  extends DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult,
    __MetadataBearer {}

/**
 * <p>Describes the associations between virtual interface groups and local gateway route tables.</p>
 */
export class DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand extends $Command<
  DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandInput,
  DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandInput) {
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
    DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandInput,
    DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog:
        DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog:
        DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandOutput> {
    return deserializeAws_ec2DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
