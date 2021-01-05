import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient.ts";
import { EnableEnhancedMonitoringInput, EnhancedMonitoringOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1EnableEnhancedMonitoringCommand,
  serializeAws_json1_1EnableEnhancedMonitoringCommand,
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

export type EnableEnhancedMonitoringCommandInput = EnableEnhancedMonitoringInput;
export type EnableEnhancedMonitoringCommandOutput = EnhancedMonitoringOutput & __MetadataBearer;

/**
 * <p>Enables enhanced Kinesis data stream monitoring for shard-level metrics.</p>
 */
export class EnableEnhancedMonitoringCommand extends $Command<
  EnableEnhancedMonitoringCommandInput,
  EnableEnhancedMonitoringCommandOutput,
  KinesisClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: EnableEnhancedMonitoringCommandInput) {
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
  ): Handler<EnableEnhancedMonitoringCommandInput, EnableEnhancedMonitoringCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisClient";
    const commandName = "EnableEnhancedMonitoringCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: EnableEnhancedMonitoringInput.filterSensitiveLog,
      outputFilterSensitiveLog: EnhancedMonitoringOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: EnableEnhancedMonitoringCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1EnableEnhancedMonitoringCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<EnableEnhancedMonitoringCommandOutput> {
    return deserializeAws_json1_1EnableEnhancedMonitoringCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
