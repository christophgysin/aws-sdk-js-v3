import { PricingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PricingClient.ts";
import { DescribeServicesRequest, DescribeServicesResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeServicesCommand,
  serializeAws_json1_1DescribeServicesCommand,
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

export interface DescribeServicesCommandInput extends DescribeServicesRequest {}
export interface DescribeServicesCommandOutput extends DescribeServicesResponse, __MetadataBearer {}

/**
 * <p>Returns the metadata for one service or a list of the metadata for all services. Use
 *          this without a service code to get the service codes for all services.
 *          Use it with a service code, such as <code>AmazonEC2</code>, to get information specific to
 *          that service, such as the attribute
 *          names available for that service. For example, some of the attribute names available for EC2 are
 *          <code>volumeType</code>, <code>maxIopsVolume</code>, <code>operation</code>,
 *          <code>locationType</code>, and <code>instanceCapacity10xlarge</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PricingClient, DescribeServicesCommand } from "../../client-pricing/mod.ts";
 * // const { PricingClient, DescribeServicesCommand } = require("@aws-sdk/client-pricing"); // CommonJS import
 * const client = new PricingClient(config);
 * const command = new DescribeServicesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeServicesCommandInput} for command's `input` shape.
 * @see {@link DescribeServicesCommandOutput} for command's `response` shape.
 * @see {@link PricingClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeServicesCommand extends $Command<
  DescribeServicesCommandInput,
  DescribeServicesCommandOutput,
  PricingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeServicesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PricingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeServicesCommandInput, DescribeServicesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PricingClient";
    const commandName = "DescribeServicesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeServicesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeServicesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeServicesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeServicesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeServicesCommandOutput> {
    return deserializeAws_json1_1DescribeServicesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
