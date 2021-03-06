import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client.ts";
import {
  DescribeTransitGatewayPeeringAttachmentsRequest,
  DescribeTransitGatewayPeeringAttachmentsResult,
} from "../models/models_3.ts";
import {
  deserializeAws_ec2DescribeTransitGatewayPeeringAttachmentsCommand,
  serializeAws_ec2DescribeTransitGatewayPeeringAttachmentsCommand,
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

export interface DescribeTransitGatewayPeeringAttachmentsCommandInput
  extends DescribeTransitGatewayPeeringAttachmentsRequest {}
export interface DescribeTransitGatewayPeeringAttachmentsCommandOutput
  extends DescribeTransitGatewayPeeringAttachmentsResult,
    __MetadataBearer {}

/**
 * <p>Describes your transit gateway peering attachments.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeTransitGatewayPeeringAttachmentsCommand } from "../../client-ec2/mod.ts";
 * // const { EC2Client, DescribeTransitGatewayPeeringAttachmentsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeTransitGatewayPeeringAttachmentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTransitGatewayPeeringAttachmentsCommandInput} for command's `input` shape.
 * @see {@link DescribeTransitGatewayPeeringAttachmentsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeTransitGatewayPeeringAttachmentsCommand extends $Command<
  DescribeTransitGatewayPeeringAttachmentsCommandInput,
  DescribeTransitGatewayPeeringAttachmentsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeTransitGatewayPeeringAttachmentsCommandInput) {
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
    DescribeTransitGatewayPeeringAttachmentsCommandInput,
    DescribeTransitGatewayPeeringAttachmentsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeTransitGatewayPeeringAttachmentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeTransitGatewayPeeringAttachmentsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeTransitGatewayPeeringAttachmentsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeTransitGatewayPeeringAttachmentsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeTransitGatewayPeeringAttachmentsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeTransitGatewayPeeringAttachmentsCommandOutput> {
    return deserializeAws_ec2DescribeTransitGatewayPeeringAttachmentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
