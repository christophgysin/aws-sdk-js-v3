import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient.ts";
import { TagMeetingRequest } from "../models/models_1.ts";
import {
  deserializeAws_restJson1TagMeetingCommand,
  serializeAws_restJson1TagMeetingCommand,
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

export interface TagMeetingCommandInput extends TagMeetingRequest {}
export interface TagMeetingCommandOutput extends __MetadataBearer {}

/**
 * <p>Applies the specified tags to the specified Amazon Chime SDK meeting.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, TagMeetingCommand } from "../../client-chime/mod.ts";
 * // const { ChimeClient, TagMeetingCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new TagMeetingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TagMeetingCommandInput} for command's `input` shape.
 * @see {@link TagMeetingCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class TagMeetingCommand extends $Command<
  TagMeetingCommandInput,
  TagMeetingCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: TagMeetingCommandInput) {
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
  ): Handler<TagMeetingCommandInput, TagMeetingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "TagMeetingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TagMeetingRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: TagMeetingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1TagMeetingCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TagMeetingCommandOutput> {
    return deserializeAws_restJson1TagMeetingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
