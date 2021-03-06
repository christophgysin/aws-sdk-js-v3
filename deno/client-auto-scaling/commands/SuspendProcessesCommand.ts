import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient.ts";
import { ScalingProcessQuery } from "../models/models_0.ts";
import {
  deserializeAws_querySuspendProcessesCommand,
  serializeAws_querySuspendProcessesCommand,
} from "../protocols/Aws_query.ts";
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

export interface SuspendProcessesCommandInput extends ScalingProcessQuery {}
export interface SuspendProcessesCommandOutput extends __MetadataBearer {}

/**
 * <p>Suspends the specified auto scaling processes, or all processes, for the specified
 *             Auto Scaling group.</p>
 *         <p>If you suspend either the <code>Launch</code> or <code>Terminate</code> process types,
 *             it can prevent other process types from functioning properly. For more information, see
 *                 <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html">Suspending and
 *                 resuming scaling processes</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 *         <p>To resume processes that have been suspended, call the <a>ResumeProcesses</a> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, SuspendProcessesCommand } from "../../client-auto-scaling/mod.ts";
 * // const { AutoScalingClient, SuspendProcessesCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new SuspendProcessesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SuspendProcessesCommandInput} for command's `input` shape.
 * @see {@link SuspendProcessesCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class SuspendProcessesCommand extends $Command<
  SuspendProcessesCommandInput,
  SuspendProcessesCommandOutput,
  AutoScalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SuspendProcessesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AutoScalingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SuspendProcessesCommandInput, SuspendProcessesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "SuspendProcessesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ScalingProcessQuery.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SuspendProcessesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_querySuspendProcessesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SuspendProcessesCommandOutput> {
    return deserializeAws_querySuspendProcessesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
