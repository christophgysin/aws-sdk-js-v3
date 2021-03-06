import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client.ts";
import { EnableVpcClassicLinkDnsSupportRequest, EnableVpcClassicLinkDnsSupportResult } from "../models/models_4.ts";
import {
  deserializeAws_ec2EnableVpcClassicLinkDnsSupportCommand,
  serializeAws_ec2EnableVpcClassicLinkDnsSupportCommand,
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

export interface EnableVpcClassicLinkDnsSupportCommandInput extends EnableVpcClassicLinkDnsSupportRequest {}
export interface EnableVpcClassicLinkDnsSupportCommandOutput
  extends EnableVpcClassicLinkDnsSupportResult,
    __MetadataBearer {}

/**
 * <p>Enables a VPC to support DNS hostname resolution for ClassicLink. If enabled, the DNS
 * 			hostname of a linked EC2-Classic instance resolves to its private IP address when
 * 			addressed from an instance in the VPC to which it's linked. Similarly, the DNS hostname
 * 			of an instance in a VPC resolves to its private IP address when addressed from a linked
 * 			EC2-Classic instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-classiclink.html">ClassicLink</a> in the
 * 				<i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          <p>You must specify a VPC ID in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, EnableVpcClassicLinkDnsSupportCommand } from "../../client-ec2/mod.ts";
 * // const { EC2Client, EnableVpcClassicLinkDnsSupportCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new EnableVpcClassicLinkDnsSupportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableVpcClassicLinkDnsSupportCommandInput} for command's `input` shape.
 * @see {@link EnableVpcClassicLinkDnsSupportCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class EnableVpcClassicLinkDnsSupportCommand extends $Command<
  EnableVpcClassicLinkDnsSupportCommandInput,
  EnableVpcClassicLinkDnsSupportCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: EnableVpcClassicLinkDnsSupportCommandInput) {
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
  ): Handler<EnableVpcClassicLinkDnsSupportCommandInput, EnableVpcClassicLinkDnsSupportCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "EnableVpcClassicLinkDnsSupportCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: EnableVpcClassicLinkDnsSupportRequest.filterSensitiveLog,
      outputFilterSensitiveLog: EnableVpcClassicLinkDnsSupportResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: EnableVpcClassicLinkDnsSupportCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2EnableVpcClassicLinkDnsSupportCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<EnableVpcClassicLinkDnsSupportCommandOutput> {
    return deserializeAws_ec2EnableVpcClassicLinkDnsSupportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
