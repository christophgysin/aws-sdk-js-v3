import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client.ts";
import { ModifySubnetAttributeRequest } from "../models/models_4.ts";
import {
  deserializeAws_ec2ModifySubnetAttributeCommand,
  serializeAws_ec2ModifySubnetAttributeCommand,
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

export interface ModifySubnetAttributeCommandInput extends ModifySubnetAttributeRequest {}
export interface ModifySubnetAttributeCommandOutput extends __MetadataBearer {}

/**
 * <p>Modifies a subnet attribute. You can only modify one attribute at a time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifySubnetAttributeCommand } from "../../client-ec2/mod.ts";
 * // const { EC2Client, ModifySubnetAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifySubnetAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifySubnetAttributeCommandInput} for command's `input` shape.
 * @see {@link ModifySubnetAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ModifySubnetAttributeCommand extends $Command<
  ModifySubnetAttributeCommandInput,
  ModifySubnetAttributeCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifySubnetAttributeCommandInput) {
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
  ): Handler<ModifySubnetAttributeCommandInput, ModifySubnetAttributeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifySubnetAttributeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifySubnetAttributeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifySubnetAttributeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ModifySubnetAttributeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifySubnetAttributeCommandOutput> {
    return deserializeAws_ec2ModifySubnetAttributeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
