import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient.ts";
import { ListConstraintsForPortfolioInput, ListConstraintsForPortfolioOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListConstraintsForPortfolioCommand,
  serializeAws_json1_1ListConstraintsForPortfolioCommand,
} from "../protocols/Aws_json1_1.ts";
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

export interface ListConstraintsForPortfolioCommandInput extends ListConstraintsForPortfolioInput {}
export interface ListConstraintsForPortfolioCommandOutput extends ListConstraintsForPortfolioOutput, __MetadataBearer {}

/**
 * <p>Lists the constraints for the specified portfolio and product.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListConstraintsForPortfolioCommand } from "../../client-service-catalog/mod.ts";
 * // const { ServiceCatalogClient, ListConstraintsForPortfolioCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new ListConstraintsForPortfolioCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListConstraintsForPortfolioCommandInput} for command's `input` shape.
 * @see {@link ListConstraintsForPortfolioCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListConstraintsForPortfolioCommand extends $Command<
  ListConstraintsForPortfolioCommandInput,
  ListConstraintsForPortfolioCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListConstraintsForPortfolioCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceCatalogClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListConstraintsForPortfolioCommandInput, ListConstraintsForPortfolioCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "ListConstraintsForPortfolioCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListConstraintsForPortfolioInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListConstraintsForPortfolioOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListConstraintsForPortfolioCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListConstraintsForPortfolioCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListConstraintsForPortfolioCommandOutput> {
    return deserializeAws_json1_1ListConstraintsForPortfolioCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
