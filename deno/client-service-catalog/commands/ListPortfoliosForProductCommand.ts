import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient.ts";
import { ListPortfoliosForProductInput, ListPortfoliosForProductOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListPortfoliosForProductCommand,
  serializeAws_json1_1ListPortfoliosForProductCommand,
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

export interface ListPortfoliosForProductCommandInput extends ListPortfoliosForProductInput {}
export interface ListPortfoliosForProductCommandOutput extends ListPortfoliosForProductOutput, __MetadataBearer {}

/**
 * <p>Lists all portfolios that the specified product is associated with.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListPortfoliosForProductCommand } from "../../client-service-catalog/mod.ts";
 * // const { ServiceCatalogClient, ListPortfoliosForProductCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new ListPortfoliosForProductCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPortfoliosForProductCommandInput} for command's `input` shape.
 * @see {@link ListPortfoliosForProductCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListPortfoliosForProductCommand extends $Command<
  ListPortfoliosForProductCommandInput,
  ListPortfoliosForProductCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListPortfoliosForProductCommandInput) {
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
  ): Handler<ListPortfoliosForProductCommandInput, ListPortfoliosForProductCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "ListPortfoliosForProductCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPortfoliosForProductInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListPortfoliosForProductOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListPortfoliosForProductCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListPortfoliosForProductCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPortfoliosForProductCommandOutput> {
    return deserializeAws_json1_1ListPortfoliosForProductCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
