import {
  ConnectParticipantClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ConnectParticipantClient.ts";
import { DisconnectParticipantRequest, DisconnectParticipantResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DisconnectParticipantCommand,
  serializeAws_restJson1DisconnectParticipantCommand,
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

export type DisconnectParticipantCommandInput = DisconnectParticipantRequest;
export type DisconnectParticipantCommandOutput = DisconnectParticipantResponse & __MetadataBearer;

/**
 * <p>Disconnects a participant. Note that ConnectionToken is used for invoking this API
 *             instead of ParticipantToken.</p>
 */
export class DisconnectParticipantCommand extends $Command<
  DisconnectParticipantCommandInput,
  DisconnectParticipantCommandOutput,
  ConnectParticipantClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisconnectParticipantCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectParticipantClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisconnectParticipantCommandInput, DisconnectParticipantCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectParticipantClient";
    const commandName = "DisconnectParticipantCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisconnectParticipantRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisconnectParticipantResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisconnectParticipantCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DisconnectParticipantCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisconnectParticipantCommandOutput> {
    return deserializeAws_restJson1DisconnectParticipantCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
