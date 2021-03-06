import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client.ts";
import {
  ModifyVpcEndpointServiceConfigurationRequest,
  ModifyVpcEndpointServiceConfigurationResult,
} from "../models/models_4.ts";
import {
  deserializeAws_ec2ModifyVpcEndpointServiceConfigurationCommand,
  serializeAws_ec2ModifyVpcEndpointServiceConfigurationCommand,
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

export interface ModifyVpcEndpointServiceConfigurationCommandInput
  extends ModifyVpcEndpointServiceConfigurationRequest {}
export interface ModifyVpcEndpointServiceConfigurationCommandOutput
  extends ModifyVpcEndpointServiceConfigurationResult,
    __MetadataBearer {}

/**
 * <p>Modifies the attributes of your VPC endpoint service configuration. You can change the
 *             Network Load Balancers or Gateway Load Balancers for your service, and you can specify whether acceptance is
 *             required for requests to connect to your endpoint service through an interface VPC
 *             endpoint.</p>
 * 	        <p>If you set or modify the private DNS name, you must prove that you own the private DNS
 *             domain name. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/endpoint-services-dns-validation.html">VPC Endpoint Service
 *                 Private DNS Name Verification</a> in the
 *             <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyVpcEndpointServiceConfigurationCommand } from "../../client-ec2/mod.ts";
 * // const { EC2Client, ModifyVpcEndpointServiceConfigurationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyVpcEndpointServiceConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyVpcEndpointServiceConfigurationCommandInput} for command's `input` shape.
 * @see {@link ModifyVpcEndpointServiceConfigurationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ModifyVpcEndpointServiceConfigurationCommand extends $Command<
  ModifyVpcEndpointServiceConfigurationCommandInput,
  ModifyVpcEndpointServiceConfigurationCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyVpcEndpointServiceConfigurationCommandInput) {
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
  ): Handler<ModifyVpcEndpointServiceConfigurationCommandInput, ModifyVpcEndpointServiceConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyVpcEndpointServiceConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyVpcEndpointServiceConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ModifyVpcEndpointServiceConfigurationResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ModifyVpcEndpointServiceConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2ModifyVpcEndpointServiceConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyVpcEndpointServiceConfigurationCommandOutput> {
    return deserializeAws_ec2ModifyVpcEndpointServiceConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
