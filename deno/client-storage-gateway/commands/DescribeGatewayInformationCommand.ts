import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient.ts";
import { DescribeGatewayInformationInput, DescribeGatewayInformationOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeGatewayInformationCommand,
  serializeAws_json1_1DescribeGatewayInformationCommand,
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

export interface DescribeGatewayInformationCommandInput extends DescribeGatewayInformationInput {}
export interface DescribeGatewayInformationCommandOutput extends DescribeGatewayInformationOutput, __MetadataBearer {}

/**
 * <p>Returns metadata about a gateway such as its name, network interfaces, configured time
 *          zone, and the state (whether the gateway is running or not). To specify which gateway to
 *          describe, use the Amazon Resource Name (ARN) of the gateway in your request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeGatewayInformationCommand } from "../../client-storage-gateway/mod.ts";
 * // const { StorageGatewayClient, DescribeGatewayInformationCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DescribeGatewayInformationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeGatewayInformationCommandInput} for command's `input` shape.
 * @see {@link DescribeGatewayInformationCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeGatewayInformationCommand extends $Command<
  DescribeGatewayInformationCommandInput,
  DescribeGatewayInformationCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeGatewayInformationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: StorageGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeGatewayInformationCommandInput, DescribeGatewayInformationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "DescribeGatewayInformationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeGatewayInformationInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeGatewayInformationOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeGatewayInformationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeGatewayInformationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeGatewayInformationCommandOutput> {
    return deserializeAws_json1_1DescribeGatewayInformationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
