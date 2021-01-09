import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient.ts";
import { CreateChannelModeratorRequest, CreateChannelModeratorResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1CreateChannelModeratorCommand,
  serializeAws_restJson1CreateChannelModeratorCommand,
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

export type CreateChannelModeratorCommandInput = CreateChannelModeratorRequest;
export type CreateChannelModeratorCommandOutput = CreateChannelModeratorResponse & __MetadataBearer;

/**
 * <p>Creates a new <code>ChannelModerator</code>. A channel moderator can:</p>
 *          <ul>
 *             <li>
 *                <p>Add and remove other members of the channel.</p>
 *             </li>
 *             <li>
 *                <p>Add and remove other moderators of the channel.</p>
 *             </li>
 *             <li>
 *                <p>Add and remove user bans for the channel.</p>
 *             </li>
 *             <li>
 *                <p>Redact messages in the channel.</p>
 *             </li>
 *             <li>
 *                <p>List messages in the channel.</p>
 *             </li>
 *          </ul>
 */
export class CreateChannelModeratorCommand extends $Command<
  CreateChannelModeratorCommandInput,
  CreateChannelModeratorCommandOutput,
  ChimeClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateChannelModeratorCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateChannelModeratorCommandInput, CreateChannelModeratorCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "CreateChannelModeratorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateChannelModeratorRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateChannelModeratorResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateChannelModeratorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateChannelModeratorCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateChannelModeratorCommandOutput> {
    return deserializeAws_restJson1CreateChannelModeratorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
