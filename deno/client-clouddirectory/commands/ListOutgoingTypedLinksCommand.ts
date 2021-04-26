import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient.ts";
import { ListOutgoingTypedLinksRequest, ListOutgoingTypedLinksResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListOutgoingTypedLinksCommand,
  serializeAws_restJson1ListOutgoingTypedLinksCommand,
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

export interface ListOutgoingTypedLinksCommandInput extends ListOutgoingTypedLinksRequest {}
export interface ListOutgoingTypedLinksCommandOutput extends ListOutgoingTypedLinksResponse, __MetadataBearer {}

/**
 * <p>Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a>
 *       information for an object. It also supports filtering by typed link facet and identity
 *       attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
 */
export class ListOutgoingTypedLinksCommand extends $Command<
  ListOutgoingTypedLinksCommandInput,
  ListOutgoingTypedLinksCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListOutgoingTypedLinksCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudDirectoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListOutgoingTypedLinksCommandInput, ListOutgoingTypedLinksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudDirectoryClient";
    const commandName = "ListOutgoingTypedLinksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListOutgoingTypedLinksRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListOutgoingTypedLinksResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListOutgoingTypedLinksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListOutgoingTypedLinksCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListOutgoingTypedLinksCommandOutput> {
    return deserializeAws_restJson1ListOutgoingTypedLinksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
