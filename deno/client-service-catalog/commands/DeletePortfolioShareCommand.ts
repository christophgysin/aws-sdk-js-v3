import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient.ts";
import { DeletePortfolioShareInput, DeletePortfolioShareOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DeletePortfolioShareCommand,
  serializeAws_json1_1DeletePortfolioShareCommand,
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

export interface DeletePortfolioShareCommandInput extends DeletePortfolioShareInput {}
export interface DeletePortfolioShareCommandOutput extends DeletePortfolioShareOutput, __MetadataBearer {}

/**
 * <p>Stops sharing the specified portfolio with the specified account or organization
 *          node. Shares to an organization node can only be deleted by the management account of an
 *          organization or by a delegated administrator.</p>
 *          <p>Note that if a delegated admin is de-registered, portfolio shares created from that account are removed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DeletePortfolioShareCommand } from "../../client-service-catalog/mod.ts";
 * // const { ServiceCatalogClient, DeletePortfolioShareCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new DeletePortfolioShareCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePortfolioShareCommandInput} for command's `input` shape.
 * @see {@link DeletePortfolioShareCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeletePortfolioShareCommand extends $Command<
  DeletePortfolioShareCommandInput,
  DeletePortfolioShareCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeletePortfolioShareCommandInput) {
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
  ): Handler<DeletePortfolioShareCommandInput, DeletePortfolioShareCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "DeletePortfolioShareCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeletePortfolioShareInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeletePortfolioShareOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeletePortfolioShareCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeletePortfolioShareCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeletePortfolioShareCommandOutput> {
    return deserializeAws_json1_1DeletePortfolioShareCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
