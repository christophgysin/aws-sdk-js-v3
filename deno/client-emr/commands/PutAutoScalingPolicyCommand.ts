import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient.ts";
import { PutAutoScalingPolicyInput, PutAutoScalingPolicyOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1PutAutoScalingPolicyCommand,
  serializeAws_json1_1PutAutoScalingPolicyCommand,
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

export type PutAutoScalingPolicyCommandInput = PutAutoScalingPolicyInput;
export type PutAutoScalingPolicyCommandOutput = PutAutoScalingPolicyOutput & __MetadataBearer;

/**
 * <p>Creates or updates an automatic scaling policy for a core instance group or task
 *          instance group in an Amazon EMR cluster. The automatic scaling policy defines how an
 *          instance group dynamically adds and terminates EC2 instances in response to the value of a
 *          CloudWatch metric.</p>
 */
export class PutAutoScalingPolicyCommand extends $Command<
  PutAutoScalingPolicyCommandInput,
  PutAutoScalingPolicyCommandOutput,
  EMRClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutAutoScalingPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutAutoScalingPolicyCommandInput, PutAutoScalingPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "PutAutoScalingPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutAutoScalingPolicyInput.filterSensitiveLog,
      outputFilterSensitiveLog: PutAutoScalingPolicyOutput.filterSensitiveLog,
    };

    if (typeof logger.info === "function") {
      logger.info({
        clientName,
        commandName,
      });
    }

    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutAutoScalingPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutAutoScalingPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutAutoScalingPolicyCommandOutput> {
    return deserializeAws_json1_1PutAutoScalingPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
