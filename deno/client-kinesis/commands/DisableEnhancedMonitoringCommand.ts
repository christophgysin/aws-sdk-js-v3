import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient.ts";
import { DisableEnhancedMonitoringInput, EnhancedMonitoringOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DisableEnhancedMonitoringCommand,
  serializeAws_json1_1DisableEnhancedMonitoringCommand,
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

export interface DisableEnhancedMonitoringCommandInput extends DisableEnhancedMonitoringInput {}
export interface DisableEnhancedMonitoringCommandOutput extends EnhancedMonitoringOutput, __MetadataBearer {}

/**
 * <p>Disables enhanced monitoring.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, DisableEnhancedMonitoringCommand } from "../../client-kinesis/mod.ts";
 * // const { KinesisClient, DisableEnhancedMonitoringCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * const client = new KinesisClient(config);
 * const command = new DisableEnhancedMonitoringCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableEnhancedMonitoringCommandInput} for command's `input` shape.
 * @see {@link DisableEnhancedMonitoringCommandOutput} for command's `response` shape.
 * @see {@link KinesisClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DisableEnhancedMonitoringCommand extends $Command<
  DisableEnhancedMonitoringCommandInput,
  DisableEnhancedMonitoringCommandOutput,
  KinesisClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisableEnhancedMonitoringCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisableEnhancedMonitoringCommandInput, DisableEnhancedMonitoringCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisClient";
    const commandName = "DisableEnhancedMonitoringCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisableEnhancedMonitoringInput.filterSensitiveLog,
      outputFilterSensitiveLog: EnhancedMonitoringOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisableEnhancedMonitoringCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DisableEnhancedMonitoringCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisableEnhancedMonitoringCommandOutput> {
    return deserializeAws_json1_1DisableEnhancedMonitoringCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
