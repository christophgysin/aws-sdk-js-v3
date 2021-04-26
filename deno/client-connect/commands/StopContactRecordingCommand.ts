import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient.ts";
import { StopContactRecordingRequest, StopContactRecordingResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1StopContactRecordingCommand,
  serializeAws_restJson1StopContactRecordingCommand,
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

export interface StopContactRecordingCommandInput extends StopContactRecordingRequest {}
export interface StopContactRecordingCommandOutput extends StopContactRecordingResponse, __MetadataBearer {}

/**
 * <p>Stops recording a call when a contact is being recorded. StopContactRecording is a one-time
 *    action. If you use StopContactRecording to stop recording an ongoing call, you can't use
 *    StartContactRecording to restart it. For scenarios where the recording has started and you want
 *    to suspend it for sensitive information (for example, to collect a credit card number), and then
 *    restart it, use SuspendContactRecording and ResumeContactRecording.</p>
 *
 *          <p>Only voice recordings are supported at this time.</p>
 */
export class StopContactRecordingCommand extends $Command<
  StopContactRecordingCommandInput,
  StopContactRecordingCommandOutput,
  ConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StopContactRecordingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopContactRecordingCommandInput, StopContactRecordingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "StopContactRecordingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopContactRecordingRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StopContactRecordingResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopContactRecordingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StopContactRecordingCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopContactRecordingCommandOutput> {
    return deserializeAws_restJson1StopContactRecordingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
