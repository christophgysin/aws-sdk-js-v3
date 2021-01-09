import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient.ts";
import { CreateMeetingWithAttendeesRequest, CreateMeetingWithAttendeesResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1CreateMeetingWithAttendeesCommand,
  serializeAws_restJson1CreateMeetingWithAttendeesCommand,
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

export type CreateMeetingWithAttendeesCommandInput = CreateMeetingWithAttendeesRequest;
export type CreateMeetingWithAttendeesCommandOutput = CreateMeetingWithAttendeesResponse & __MetadataBearer;

/**
 * <p>Creates a new Amazon Chime SDK meeting in the specified media Region, with attendees. For more information about specifying media Regions,
 *       see <a href="https://docs.aws.amazon.com/chime/latest/dg/chime-sdk-meetings-regions.html">Amazon Chime SDK Media Regions</a> in the
 *       <i>Amazon Chime Developer Guide</i>. For more information about the Amazon Chime SDK, see
 *       <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the
 *       <i>Amazon Chime Developer Guide</i>.</p>
 */
export class CreateMeetingWithAttendeesCommand extends $Command<
  CreateMeetingWithAttendeesCommandInput,
  CreateMeetingWithAttendeesCommandOutput,
  ChimeClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateMeetingWithAttendeesCommandInput) {
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
  ): Handler<CreateMeetingWithAttendeesCommandInput, CreateMeetingWithAttendeesCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "CreateMeetingWithAttendeesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateMeetingWithAttendeesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateMeetingWithAttendeesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateMeetingWithAttendeesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateMeetingWithAttendeesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateMeetingWithAttendeesCommandOutput> {
    return deserializeAws_restJson1CreateMeetingWithAttendeesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
