import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient.ts";
import { DescribeCopyProductStatusInput, DescribeCopyProductStatusOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeCopyProductStatusCommand,
  serializeAws_json1_1DescribeCopyProductStatusCommand,
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

export interface DescribeCopyProductStatusCommandInput extends DescribeCopyProductStatusInput {}
export interface DescribeCopyProductStatusCommandOutput extends DescribeCopyProductStatusOutput, __MetadataBearer {}

/**
 * <p>Gets the status of the specified copy product operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DescribeCopyProductStatusCommand } from "../../client-service-catalog/mod.ts";
 * // const { ServiceCatalogClient, DescribeCopyProductStatusCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new DescribeCopyProductStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCopyProductStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeCopyProductStatusCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeCopyProductStatusCommand extends $Command<
  DescribeCopyProductStatusCommandInput,
  DescribeCopyProductStatusCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeCopyProductStatusCommandInput) {
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
  ): Handler<DescribeCopyProductStatusCommandInput, DescribeCopyProductStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "DescribeCopyProductStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeCopyProductStatusInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeCopyProductStatusOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeCopyProductStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeCopyProductStatusCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeCopyProductStatusCommandOutput> {
    return deserializeAws_json1_1DescribeCopyProductStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
