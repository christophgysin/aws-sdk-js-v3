import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient.ts";
import { ListAttachedIndicesRequest, ListAttachedIndicesResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListAttachedIndicesCommand,
  serializeAws_restJson1ListAttachedIndicesCommand,
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

export interface ListAttachedIndicesCommandInput extends ListAttachedIndicesRequest {}
export interface ListAttachedIndicesCommandOutput extends ListAttachedIndicesResponse, __MetadataBearer {}

/**
 * <p>Lists indices attached to the specified object.</p>
 */
export class ListAttachedIndicesCommand extends $Command<
  ListAttachedIndicesCommandInput,
  ListAttachedIndicesCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAttachedIndicesCommandInput) {
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
  ): Handler<ListAttachedIndicesCommandInput, ListAttachedIndicesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudDirectoryClient";
    const commandName = "ListAttachedIndicesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAttachedIndicesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAttachedIndicesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAttachedIndicesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListAttachedIndicesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAttachedIndicesCommandOutput> {
    return deserializeAws_restJson1ListAttachedIndicesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
