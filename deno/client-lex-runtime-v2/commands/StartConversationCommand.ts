import { LexRuntimeV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexRuntimeV2Client.ts";
import { StartConversationRequest, StartConversationResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1StartConversationCommand,
  serializeAws_restJson1StartConversationCommand,
} from "../protocols/Aws_restJson1.ts";
import { getEventStreamPlugin } from "../../middleware-eventstream/mod.ts";
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

export interface StartConversationCommandInput extends StartConversationRequest {}
export interface StartConversationCommandOutput extends StartConversationResponse, __MetadataBearer {}

/**
 * <p>Starts an HTTP/2 bidirectional event stream that enables you to send
 *          audio, text, or DTMF input in real time. After your application starts
 *          a conversation, users send input to Amazon Lex as a stream of events. Amazon Lex
 *          processes the incoming events and responds with streaming text or audio
 *          events.
 *       </p>
 *          <p></p>
 */
export class StartConversationCommand extends $Command<
  StartConversationCommandInput,
  StartConversationCommandOutput,
  LexRuntimeV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartConversationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexRuntimeV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartConversationCommandInput, StartConversationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEventStreamPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexRuntimeV2Client";
    const commandName = "StartConversationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartConversationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartConversationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: StartConversationCommandInput,
    context: __SerdeContext & __EventStreamSerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1StartConversationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext & __EventStreamSerdeContext
  ): Promise<StartConversationCommandOutput> {
    return deserializeAws_restJson1StartConversationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
