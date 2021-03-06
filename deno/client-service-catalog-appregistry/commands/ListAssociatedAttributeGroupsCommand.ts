import {
  ServiceCatalogAppRegistryClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ServiceCatalogAppRegistryClient.ts";
import { ListAssociatedAttributeGroupsRequest, ListAssociatedAttributeGroupsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListAssociatedAttributeGroupsCommand,
  serializeAws_restJson1ListAssociatedAttributeGroupsCommand,
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

export interface ListAssociatedAttributeGroupsCommandInput extends ListAssociatedAttributeGroupsRequest {}
export interface ListAssociatedAttributeGroupsCommandOutput
  extends ListAssociatedAttributeGroupsResponse,
    __MetadataBearer {}

/**
 * <p>Lists all attribute groups that are associated with specified application.  Results are paginated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogAppRegistryClient, ListAssociatedAttributeGroupsCommand } from "../../client-service-catalog-appregistry/mod.ts";
 * // const { ServiceCatalogAppRegistryClient, ListAssociatedAttributeGroupsCommand } = require("@aws-sdk/client-service-catalog-appregistry"); // CommonJS import
 * const client = new ServiceCatalogAppRegistryClient(config);
 * const command = new ListAssociatedAttributeGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAssociatedAttributeGroupsCommandInput} for command's `input` shape.
 * @see {@link ListAssociatedAttributeGroupsCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogAppRegistryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListAssociatedAttributeGroupsCommand extends $Command<
  ListAssociatedAttributeGroupsCommandInput,
  ListAssociatedAttributeGroupsCommandOutput,
  ServiceCatalogAppRegistryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAssociatedAttributeGroupsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceCatalogAppRegistryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAssociatedAttributeGroupsCommandInput, ListAssociatedAttributeGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogAppRegistryClient";
    const commandName = "ListAssociatedAttributeGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAssociatedAttributeGroupsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAssociatedAttributeGroupsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAssociatedAttributeGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListAssociatedAttributeGroupsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAssociatedAttributeGroupsCommandOutput> {
    return deserializeAws_restJson1ListAssociatedAttributeGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
