import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client.ts";
import { ModifyTransitGatewayVpcAttachmentRequest, ModifyTransitGatewayVpcAttachmentResult } from "../models/models_4.ts";
import {
  deserializeAws_ec2ModifyTransitGatewayVpcAttachmentCommand,
  serializeAws_ec2ModifyTransitGatewayVpcAttachmentCommand,
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

export interface ModifyTransitGatewayVpcAttachmentCommandInput extends ModifyTransitGatewayVpcAttachmentRequest {}
export interface ModifyTransitGatewayVpcAttachmentCommandOutput
  extends ModifyTransitGatewayVpcAttachmentResult,
    __MetadataBearer {}

/**
 * <p>Modifies the specified VPC attachment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyTransitGatewayVpcAttachmentCommand } from "../../client-ec2/mod.ts";
 * // const { EC2Client, ModifyTransitGatewayVpcAttachmentCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyTransitGatewayVpcAttachmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyTransitGatewayVpcAttachmentCommandInput} for command's `input` shape.
 * @see {@link ModifyTransitGatewayVpcAttachmentCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ModifyTransitGatewayVpcAttachmentCommand extends $Command<
  ModifyTransitGatewayVpcAttachmentCommandInput,
  ModifyTransitGatewayVpcAttachmentCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyTransitGatewayVpcAttachmentCommandInput) {
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
  ): Handler<ModifyTransitGatewayVpcAttachmentCommandInput, ModifyTransitGatewayVpcAttachmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyTransitGatewayVpcAttachmentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyTransitGatewayVpcAttachmentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ModifyTransitGatewayVpcAttachmentResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ModifyTransitGatewayVpcAttachmentCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2ModifyTransitGatewayVpcAttachmentCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyTransitGatewayVpcAttachmentCommandOutput> {
    return deserializeAws_ec2ModifyTransitGatewayVpcAttachmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
