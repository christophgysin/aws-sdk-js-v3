import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient.ts";
import { DescribeAlarmsInput, DescribeAlarmsOutput } from "../models/models_0.ts";
import {
  deserializeAws_queryDescribeAlarmsCommand,
  serializeAws_queryDescribeAlarmsCommand,
} from "../protocols/Aws_query.ts";
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

export interface DescribeAlarmsCommandInput extends DescribeAlarmsInput {}
export interface DescribeAlarmsCommandOutput extends DescribeAlarmsOutput, __MetadataBearer {}

/**
 * <p>Retrieves the specified alarms. You can filter the results by specifying a prefix for the alarm
 * 			name, the alarm state, or a prefix for any action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, DescribeAlarmsCommand } from "../../client-cloudwatch/mod.ts";
 * // const { CloudWatchClient, DescribeAlarmsCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new DescribeAlarmsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAlarmsCommandInput} for command's `input` shape.
 * @see {@link DescribeAlarmsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeAlarmsCommand extends $Command<
  DescribeAlarmsCommandInput,
  DescribeAlarmsCommandOutput,
  CloudWatchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAlarmsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAlarmsCommandInput, DescribeAlarmsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchClient";
    const commandName = "DescribeAlarmsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAlarmsInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeAlarmsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAlarmsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeAlarmsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAlarmsCommandOutput> {
    return deserializeAws_queryDescribeAlarmsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
