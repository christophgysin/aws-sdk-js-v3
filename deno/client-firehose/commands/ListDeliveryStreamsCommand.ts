import { FirehoseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FirehoseClient.ts";
import { ListDeliveryStreamsInput, ListDeliveryStreamsOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListDeliveryStreamsCommand,
  serializeAws_json1_1ListDeliveryStreamsCommand,
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

export interface ListDeliveryStreamsCommandInput extends ListDeliveryStreamsInput {}
export interface ListDeliveryStreamsCommandOutput extends ListDeliveryStreamsOutput, __MetadataBearer {}

/**
 * <p>Lists your delivery streams in alphabetical order of their names.</p>
 *          <p>The number of delivery streams might be too large to return using a single call to
 *             <code>ListDeliveryStreams</code>. You can limit the number of delivery streams returned,
 *          using the <code>Limit</code> parameter. To determine whether there are more delivery
 *          streams to list, check the value of <code>HasMoreDeliveryStreams</code> in the output. If
 *          there are more delivery streams to list, you can request them by calling this operation
 *          again and setting the <code>ExclusiveStartDeliveryStreamName</code> parameter to the name
 *          of the last delivery stream returned in the last call.</p>
 */
export class ListDeliveryStreamsCommand extends $Command<
  ListDeliveryStreamsCommandInput,
  ListDeliveryStreamsCommandOutput,
  FirehoseClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListDeliveryStreamsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FirehoseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDeliveryStreamsCommandInput, ListDeliveryStreamsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FirehoseClient";
    const commandName = "ListDeliveryStreamsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDeliveryStreamsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListDeliveryStreamsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListDeliveryStreamsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListDeliveryStreamsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDeliveryStreamsCommandOutput> {
    return deserializeAws_json1_1ListDeliveryStreamsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
