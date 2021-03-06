import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient.ts";
import { StartTopicsDetectionJobRequest, StartTopicsDetectionJobResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1StartTopicsDetectionJobCommand,
  serializeAws_json1_1StartTopicsDetectionJobCommand,
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

export interface StartTopicsDetectionJobCommandInput extends StartTopicsDetectionJobRequest {}
export interface StartTopicsDetectionJobCommandOutput extends StartTopicsDetectionJobResponse, __MetadataBearer {}

/**
 * <p>Starts an asynchronous topic detection job. Use the
 *         <code>DescribeTopicDetectionJob</code> operation to track the status of a job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, StartTopicsDetectionJobCommand } from "../../client-comprehend/mod.ts";
 * // const { ComprehendClient, StartTopicsDetectionJobCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new StartTopicsDetectionJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartTopicsDetectionJobCommandInput} for command's `input` shape.
 * @see {@link StartTopicsDetectionJobCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class StartTopicsDetectionJobCommand extends $Command<
  StartTopicsDetectionJobCommandInput,
  StartTopicsDetectionJobCommandOutput,
  ComprehendClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartTopicsDetectionJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComprehendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartTopicsDetectionJobCommandInput, StartTopicsDetectionJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "StartTopicsDetectionJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartTopicsDetectionJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartTopicsDetectionJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartTopicsDetectionJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartTopicsDetectionJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartTopicsDetectionJobCommandOutput> {
    return deserializeAws_json1_1StartTopicsDetectionJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
