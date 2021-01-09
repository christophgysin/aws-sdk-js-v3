import { KinesisVideoClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisVideoClient.ts";
import { UpdateSignalingChannelInput, UpdateSignalingChannelOutput } from "../models/models_0.ts";
import {
  deserializeAws_restJson1UpdateSignalingChannelCommand,
  serializeAws_restJson1UpdateSignalingChannelCommand,
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

export type UpdateSignalingChannelCommandInput = UpdateSignalingChannelInput;
export type UpdateSignalingChannelCommandOutput = UpdateSignalingChannelOutput & __MetadataBearer;

/**
 * <p>Updates the existing signaling channel. This is an asynchronous operation and takes
 *             time to complete. </p>
 *         <p>If the <code>MessageTtlSeconds</code> value is updated (either increased or reduced),
 *             it only applies to new messages sent via this channel after it's been updated. Existing
 *             messages are still expired as per the previous <code>MessageTtlSeconds</code>
 *             value.</p>
 */
export class UpdateSignalingChannelCommand extends $Command<
  UpdateSignalingChannelCommandInput,
  UpdateSignalingChannelCommandOutput,
  KinesisVideoClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateSignalingChannelCommandInput) {
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
  ): Handler<UpdateSignalingChannelCommandInput, UpdateSignalingChannelCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisVideoClient";
    const commandName = "UpdateSignalingChannelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateSignalingChannelInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateSignalingChannelOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateSignalingChannelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateSignalingChannelCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateSignalingChannelCommandOutput> {
    return deserializeAws_restJson1UpdateSignalingChannelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
