import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client.ts";
import { RunScheduledInstancesRequest, RunScheduledInstancesResult } from "../models/models_5.ts";
import {
  deserializeAws_ec2RunScheduledInstancesCommand,
  serializeAws_ec2RunScheduledInstancesCommand,
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

export interface RunScheduledInstancesCommandInput extends RunScheduledInstancesRequest {}
export interface RunScheduledInstancesCommandOutput extends RunScheduledInstancesResult, __MetadataBearer {}

/**
 * <p>Launches the specified Scheduled Instances.</p>
 *          <p>Before you can launch a Scheduled Instance, you must purchase it and obtain an identifier using <a>PurchaseScheduledInstances</a>.</p>
 *          <p>You must launch a Scheduled Instance during its scheduled time period. You can't stop or reboot a Scheduled Instance,
 *          but you can terminate it as needed. If you terminate a Scheduled Instance before the current scheduled time period ends,
 *          you can launch it again after a few minutes. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-scheduled-instances.html">Scheduled Instances</a>
 *          in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RunScheduledInstancesCommand } from "../../client-ec2/mod.ts";
 * // const { EC2Client, RunScheduledInstancesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new RunScheduledInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RunScheduledInstancesCommandInput} for command's `input` shape.
 * @see {@link RunScheduledInstancesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class RunScheduledInstancesCommand extends $Command<
  RunScheduledInstancesCommandInput,
  RunScheduledInstancesCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RunScheduledInstancesCommandInput) {
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
  ): Handler<RunScheduledInstancesCommandInput, RunScheduledInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "RunScheduledInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RunScheduledInstancesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RunScheduledInstancesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RunScheduledInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2RunScheduledInstancesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RunScheduledInstancesCommandOutput> {
    return deserializeAws_ec2RunScheduledInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
