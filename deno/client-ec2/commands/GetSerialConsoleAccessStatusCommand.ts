import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client.ts";
import { GetSerialConsoleAccessStatusRequest, GetSerialConsoleAccessStatusResult } from "../models/models_4.ts";
import {
  deserializeAws_ec2GetSerialConsoleAccessStatusCommand,
  serializeAws_ec2GetSerialConsoleAccessStatusCommand,
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

export interface GetSerialConsoleAccessStatusCommandInput extends GetSerialConsoleAccessStatusRequest {}
export interface GetSerialConsoleAccessStatusCommandOutput
  extends GetSerialConsoleAccessStatusResult,
    __MetadataBearer {}

/**
 * <p>Retrieves the access status of your account to the EC2 serial console of all instances. By
 * 			default, access to the EC2 serial console is disabled for your account. For more
 * 			information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configure-access-to-serial-console.html#serial-console-account-access">Manage account access to the EC2 serial console</a> in the <i>Amazon EC2
 * 				User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetSerialConsoleAccessStatusCommand } from "../../client-ec2/mod.ts";
 * // const { EC2Client, GetSerialConsoleAccessStatusCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new GetSerialConsoleAccessStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSerialConsoleAccessStatusCommandInput} for command's `input` shape.
 * @see {@link GetSerialConsoleAccessStatusCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetSerialConsoleAccessStatusCommand extends $Command<
  GetSerialConsoleAccessStatusCommandInput,
  GetSerialConsoleAccessStatusCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetSerialConsoleAccessStatusCommandInput) {
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
  ): Handler<GetSerialConsoleAccessStatusCommandInput, GetSerialConsoleAccessStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetSerialConsoleAccessStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSerialConsoleAccessStatusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetSerialConsoleAccessStatusResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSerialConsoleAccessStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2GetSerialConsoleAccessStatusCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetSerialConsoleAccessStatusCommandOutput> {
    return deserializeAws_ec2GetSerialConsoleAccessStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
