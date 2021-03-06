import {
  EC2InstanceConnectClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2InstanceConnectClient.ts";
import { SendSerialConsoleSSHPublicKeyRequest, SendSerialConsoleSSHPublicKeyResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1SendSerialConsoleSSHPublicKeyCommand,
  serializeAws_json1_1SendSerialConsoleSSHPublicKeyCommand,
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

export interface SendSerialConsoleSSHPublicKeyCommandInput extends SendSerialConsoleSSHPublicKeyRequest {}
export interface SendSerialConsoleSSHPublicKeyCommandOutput
  extends SendSerialConsoleSSHPublicKeyResponse,
    __MetadataBearer {}

/**
 * <p>Pushes an SSH public key to the specified EC2 instance. The key remains for 60
 *             seconds, which gives you 60 seconds to establish a serial console connection to the
 *             instance using SSH. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-serial-console.html">EC2 Serial Console</a> in
 *             the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2InstanceConnectClient, SendSerialConsoleSSHPublicKeyCommand } from "../../client-ec2-instance-connect/mod.ts";
 * // const { EC2InstanceConnectClient, SendSerialConsoleSSHPublicKeyCommand } = require("@aws-sdk/client-ec2-instance-connect"); // CommonJS import
 * const client = new EC2InstanceConnectClient(config);
 * const command = new SendSerialConsoleSSHPublicKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendSerialConsoleSSHPublicKeyCommandInput} for command's `input` shape.
 * @see {@link SendSerialConsoleSSHPublicKeyCommandOutput} for command's `response` shape.
 * @see {@link EC2InstanceConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class SendSerialConsoleSSHPublicKeyCommand extends $Command<
  SendSerialConsoleSSHPublicKeyCommandInput,
  SendSerialConsoleSSHPublicKeyCommandOutput,
  EC2InstanceConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SendSerialConsoleSSHPublicKeyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2InstanceConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SendSerialConsoleSSHPublicKeyCommandInput, SendSerialConsoleSSHPublicKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2InstanceConnectClient";
    const commandName = "SendSerialConsoleSSHPublicKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SendSerialConsoleSSHPublicKeyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SendSerialConsoleSSHPublicKeyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SendSerialConsoleSSHPublicKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1SendSerialConsoleSSHPublicKeyCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SendSerialConsoleSSHPublicKeyCommandOutput> {
    return deserializeAws_json1_1SendSerialConsoleSSHPublicKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
