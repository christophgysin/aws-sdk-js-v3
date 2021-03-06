import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient.ts";
import { DescribePortfolioShareStatusInput, DescribePortfolioShareStatusOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribePortfolioShareStatusCommand,
  serializeAws_json1_1DescribePortfolioShareStatusCommand,
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

export interface DescribePortfolioShareStatusCommandInput extends DescribePortfolioShareStatusInput {}
export interface DescribePortfolioShareStatusCommandOutput
  extends DescribePortfolioShareStatusOutput,
    __MetadataBearer {}

/**
 * <p>Gets the status of the specified portfolio share operation. This API can only be called
 *          by the management account in the organization or by a delegated admin.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DescribePortfolioShareStatusCommand } from "../../client-service-catalog/mod.ts";
 * // const { ServiceCatalogClient, DescribePortfolioShareStatusCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new DescribePortfolioShareStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePortfolioShareStatusCommandInput} for command's `input` shape.
 * @see {@link DescribePortfolioShareStatusCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribePortfolioShareStatusCommand extends $Command<
  DescribePortfolioShareStatusCommandInput,
  DescribePortfolioShareStatusCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribePortfolioShareStatusCommandInput) {
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
  ): Handler<DescribePortfolioShareStatusCommandInput, DescribePortfolioShareStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "DescribePortfolioShareStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribePortfolioShareStatusInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribePortfolioShareStatusOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribePortfolioShareStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribePortfolioShareStatusCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribePortfolioShareStatusCommandOutput> {
    return deserializeAws_json1_1DescribePortfolioShareStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
