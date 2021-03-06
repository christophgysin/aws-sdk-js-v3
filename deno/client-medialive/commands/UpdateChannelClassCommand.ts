import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient.ts";
import { UpdateChannelClassRequest, UpdateChannelClassResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1UpdateChannelClassCommand,
  serializeAws_restJson1UpdateChannelClassCommand,
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

export interface UpdateChannelClassCommandInput extends UpdateChannelClassRequest {}
export interface UpdateChannelClassCommandOutput extends UpdateChannelClassResponse, __MetadataBearer {}

/**
 * Changes the class of the channel.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, UpdateChannelClassCommand } from "../../client-medialive/mod.ts";
 * // const { MediaLiveClient, UpdateChannelClassCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new UpdateChannelClassCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateChannelClassCommandInput} for command's `input` shape.
 * @see {@link UpdateChannelClassCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateChannelClassCommand extends $Command<
  UpdateChannelClassCommandInput,
  UpdateChannelClassCommandOutput,
  MediaLiveClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateChannelClassCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaLiveClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateChannelClassCommandInput, UpdateChannelClassCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaLiveClient";
    const commandName = "UpdateChannelClassCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateChannelClassRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateChannelClassResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateChannelClassCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateChannelClassCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateChannelClassCommandOutput> {
    return deserializeAws_restJson1UpdateChannelClassCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
