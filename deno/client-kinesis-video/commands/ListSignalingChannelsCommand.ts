import { KinesisVideoClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisVideoClient.ts";
import { ListSignalingChannelsInput, ListSignalingChannelsOutput } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListSignalingChannelsCommand,
  serializeAws_restJson1ListSignalingChannelsCommand,
} from "../protocols/Aws_restJson1.ts";
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

export interface ListSignalingChannelsCommandInput extends ListSignalingChannelsInput {}
export interface ListSignalingChannelsCommandOutput extends ListSignalingChannelsOutput, __MetadataBearer {}

/**
 * <p>Returns an array of <code>ChannelInfo</code> objects. Each object describes a
 *             signaling channel. To retrieve only those channels that satisfy a specific condition, you can
 *             specify a <code>ChannelNameCondition</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, ListSignalingChannelsCommand } from "../../client-kinesis-video/mod.ts";
 * // const { KinesisVideoClient, ListSignalingChannelsCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * const client = new KinesisVideoClient(config);
 * const command = new ListSignalingChannelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSignalingChannelsCommandInput} for command's `input` shape.
 * @see {@link ListSignalingChannelsCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListSignalingChannelsCommand extends $Command<
  ListSignalingChannelsCommandInput,
  ListSignalingChannelsCommandOutput,
  KinesisVideoClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListSignalingChannelsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisVideoClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSignalingChannelsCommandInput, ListSignalingChannelsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisVideoClient";
    const commandName = "ListSignalingChannelsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSignalingChannelsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListSignalingChannelsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListSignalingChannelsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListSignalingChannelsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSignalingChannelsCommandOutput> {
    return deserializeAws_restJson1ListSignalingChannelsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
