import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient.ts";
import { PolicyARNType, PutScalingPolicyType } from "../models/models_0.ts";
import {
  deserializeAws_queryPutScalingPolicyCommand,
  serializeAws_queryPutScalingPolicyCommand,
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

export interface PutScalingPolicyCommandInput extends PutScalingPolicyType {}
export interface PutScalingPolicyCommandOutput extends PolicyARNType, __MetadataBearer {}

/**
 * <p>Creates or updates a scaling policy for an Auto Scaling group.</p>
 *         <p>For more information about using scaling policies to scale your Auto Scaling group, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-target-tracking.html">Target tracking scaling policies</a> and <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-simple-step.html">Step and simple scaling
 *                 policies</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, PutScalingPolicyCommand } from "../../client-auto-scaling/mod.ts";
 * // const { AutoScalingClient, PutScalingPolicyCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new PutScalingPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutScalingPolicyCommandInput} for command's `input` shape.
 * @see {@link PutScalingPolicyCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class PutScalingPolicyCommand extends $Command<
  PutScalingPolicyCommandInput,
  PutScalingPolicyCommandOutput,
  AutoScalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutScalingPolicyCommandInput) {
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
  ): Handler<PutScalingPolicyCommandInput, PutScalingPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "PutScalingPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutScalingPolicyType.filterSensitiveLog,
      outputFilterSensitiveLog: PolicyARNType.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutScalingPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryPutScalingPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutScalingPolicyCommandOutput> {
    return deserializeAws_queryPutScalingPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
