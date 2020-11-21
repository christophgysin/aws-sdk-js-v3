
import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient.ts";
import { SubscribeToShardInput, SubscribeToShardOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1SubscribeToShardCommand,
  serializeAws_json1_1SubscribeToShardCommand,
} from "../protocols/Aws_json1_1.ts";
import { getSerdePlugin } from "../../middleware-serde/mod.ts";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "../../protocol-http/mod.ts";
import { Command as $Command } from "../../smithy-client/mod.ts";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  EventStreamSerdeContext as __EventStreamSerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "../../types/mod.ts";

export type SubscribeToShardCommandInput = SubscribeToShardInput;
export type SubscribeToShardCommandOutput = SubscribeToShardOutput & __MetadataBearer;

export class SubscribeToShardCommand extends $Command<
  SubscribeToShardCommandInput,
  SubscribeToShardCommandOutput,
  KinesisClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SubscribeToShardCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SubscribeToShardCommandInput, SubscribeToShardCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisClient";
    const commandName = "SubscribeToShardCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SubscribeToShardInput.filterSensitiveLog,
      outputFilterSensitiveLog: SubscribeToShardOutput.filterSensitiveLog,
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

  private serialize(input: SubscribeToShardCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1SubscribeToShardCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext & __EventStreamSerdeContext
  ): Promise<SubscribeToShardCommandOutput> {
    return deserializeAws_json1_1SubscribeToShardCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
