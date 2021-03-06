import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient.ts";
import { StopPiiEntitiesDetectionJobRequest, StopPiiEntitiesDetectionJobResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1StopPiiEntitiesDetectionJobCommand,
  serializeAws_json1_1StopPiiEntitiesDetectionJobCommand,
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

export interface StopPiiEntitiesDetectionJobCommandInput extends StopPiiEntitiesDetectionJobRequest {}
export interface StopPiiEntitiesDetectionJobCommandOutput
  extends StopPiiEntitiesDetectionJobResponse,
    __MetadataBearer {}

/**
 * <p>Stops a PII entities detection job in progress.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, StopPiiEntitiesDetectionJobCommand } from "../../client-comprehend/mod.ts";
 * // const { ComprehendClient, StopPiiEntitiesDetectionJobCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new StopPiiEntitiesDetectionJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopPiiEntitiesDetectionJobCommandInput} for command's `input` shape.
 * @see {@link StopPiiEntitiesDetectionJobCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class StopPiiEntitiesDetectionJobCommand extends $Command<
  StopPiiEntitiesDetectionJobCommandInput,
  StopPiiEntitiesDetectionJobCommandOutput,
  ComprehendClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StopPiiEntitiesDetectionJobCommandInput) {
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
  ): Handler<StopPiiEntitiesDetectionJobCommandInput, StopPiiEntitiesDetectionJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "StopPiiEntitiesDetectionJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopPiiEntitiesDetectionJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StopPiiEntitiesDetectionJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopPiiEntitiesDetectionJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StopPiiEntitiesDetectionJobCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StopPiiEntitiesDetectionJobCommandOutput> {
    return deserializeAws_json1_1StopPiiEntitiesDetectionJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
