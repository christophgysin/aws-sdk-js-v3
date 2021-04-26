import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient.ts";
import { ListSAMLProvidersRequest, ListSAMLProvidersResponse } from "../models/models_0.ts";
import {
  deserializeAws_queryListSAMLProvidersCommand,
  serializeAws_queryListSAMLProvidersCommand,
} from "../protocols/Aws_query.ts";
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

export interface ListSAMLProvidersCommandInput extends ListSAMLProvidersRequest {}
export interface ListSAMLProvidersCommandOutput extends ListSAMLProvidersResponse, __MetadataBearer {}

/**
 * <p>Lists the SAML provider resource objects defined in IAM in the account.
 *             IAM resource-listing operations return a subset of the available
 *    attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a SAML provider, see <a>GetSAMLProvider</a>.</p>
 *         <important>
 *             <p> This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p>
 *         </important>
 */
export class ListSAMLProvidersCommand extends $Command<
  ListSAMLProvidersCommandInput,
  ListSAMLProvidersCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListSAMLProvidersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSAMLProvidersCommandInput, ListSAMLProvidersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "ListSAMLProvidersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSAMLProvidersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListSAMLProvidersResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListSAMLProvidersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryListSAMLProvidersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSAMLProvidersCommandOutput> {
    return deserializeAws_queryListSAMLProvidersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
