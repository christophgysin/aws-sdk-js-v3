import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient.ts";
import { DescribeDataSourcePermissionsRequest, DescribeDataSourcePermissionsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DescribeDataSourcePermissionsCommand,
  serializeAws_restJson1DescribeDataSourcePermissionsCommand,
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

export interface DescribeDataSourcePermissionsCommandInput extends DescribeDataSourcePermissionsRequest {}
export interface DescribeDataSourcePermissionsCommandOutput
  extends DescribeDataSourcePermissionsResponse,
    __MetadataBearer {}

/**
 * <p>Describes the resource permissions for a data source.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeDataSourcePermissionsCommand } from "../../client-quicksight/mod.ts";
 * // const { QuickSightClient, DescribeDataSourcePermissionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new DescribeDataSourcePermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDataSourcePermissionsCommandInput} for command's `input` shape.
 * @see {@link DescribeDataSourcePermissionsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeDataSourcePermissionsCommand extends $Command<
  DescribeDataSourcePermissionsCommandInput,
  DescribeDataSourcePermissionsCommandOutput,
  QuickSightClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeDataSourcePermissionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDataSourcePermissionsCommandInput, DescribeDataSourcePermissionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "DescribeDataSourcePermissionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDataSourcePermissionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeDataSourcePermissionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeDataSourcePermissionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeDataSourcePermissionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDataSourcePermissionsCommandOutput> {
    return deserializeAws_restJson1DescribeDataSourcePermissionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
