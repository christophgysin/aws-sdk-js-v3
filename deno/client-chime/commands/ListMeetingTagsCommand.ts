import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient.ts";
import { ListMeetingTagsRequest, ListMeetingTagsResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1ListMeetingTagsCommand,
  serializeAws_restJson1ListMeetingTagsCommand,
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

export interface ListMeetingTagsCommandInput extends ListMeetingTagsRequest {}
export interface ListMeetingTagsCommandOutput extends ListMeetingTagsResponse, __MetadataBearer {}

/**
 * <p>Lists the tags applied to an Amazon Chime SDK meeting resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ListMeetingTagsCommand } from "../../client-chime/mod.ts";
 * // const { ChimeClient, ListMeetingTagsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new ListMeetingTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMeetingTagsCommandInput} for command's `input` shape.
 * @see {@link ListMeetingTagsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListMeetingTagsCommand extends $Command<
  ListMeetingTagsCommandInput,
  ListMeetingTagsCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListMeetingTagsCommandInput) {
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
  ): Handler<ListMeetingTagsCommandInput, ListMeetingTagsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "ListMeetingTagsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListMeetingTagsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListMeetingTagsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListMeetingTagsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListMeetingTagsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListMeetingTagsCommandOutput> {
    return deserializeAws_restJson1ListMeetingTagsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
