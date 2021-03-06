import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient.ts";
import { DescribeThemePermissionsRequest, DescribeThemePermissionsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DescribeThemePermissionsCommand,
  serializeAws_restJson1DescribeThemePermissionsCommand,
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

export interface DescribeThemePermissionsCommandInput extends DescribeThemePermissionsRequest {}
export interface DescribeThemePermissionsCommandOutput extends DescribeThemePermissionsResponse, __MetadataBearer {}

/**
 * <p>Describes the read and write permissions for a theme.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeThemePermissionsCommand } from "../../client-quicksight/mod.ts";
 * // const { QuickSightClient, DescribeThemePermissionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new DescribeThemePermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeThemePermissionsCommandInput} for command's `input` shape.
 * @see {@link DescribeThemePermissionsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeThemePermissionsCommand extends $Command<
  DescribeThemePermissionsCommandInput,
  DescribeThemePermissionsCommandOutput,
  QuickSightClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeThemePermissionsCommandInput) {
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
  ): Handler<DescribeThemePermissionsCommandInput, DescribeThemePermissionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "DescribeThemePermissionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeThemePermissionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeThemePermissionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeThemePermissionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeThemePermissionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeThemePermissionsCommandOutput> {
    return deserializeAws_restJson1DescribeThemePermissionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
