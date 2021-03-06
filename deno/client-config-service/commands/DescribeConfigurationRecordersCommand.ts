import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient.ts";
import { DescribeConfigurationRecordersRequest, DescribeConfigurationRecordersResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeConfigurationRecordersCommand,
  serializeAws_json1_1DescribeConfigurationRecordersCommand,
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

export interface DescribeConfigurationRecordersCommandInput extends DescribeConfigurationRecordersRequest {}
export interface DescribeConfigurationRecordersCommandOutput
  extends DescribeConfigurationRecordersResponse,
    __MetadataBearer {}

/**
 * <p>Returns the details for the specified configuration recorders.
 * 			If the configuration recorder is not specified, this action returns
 * 			the details for all configuration recorders associated with the
 * 			account.</p>
 * 		       <note>
 * 			         <p>Currently, you can specify only one configuration recorder
 * 				per region in your account.</p>
 * 		       </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeConfigurationRecordersCommand } from "../../client-config-service/mod.ts";
 * // const { ConfigServiceClient, DescribeConfigurationRecordersCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DescribeConfigurationRecordersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeConfigurationRecordersCommandInput} for command's `input` shape.
 * @see {@link DescribeConfigurationRecordersCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeConfigurationRecordersCommand extends $Command<
  DescribeConfigurationRecordersCommandInput,
  DescribeConfigurationRecordersCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeConfigurationRecordersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeConfigurationRecordersCommandInput, DescribeConfigurationRecordersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "DescribeConfigurationRecordersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeConfigurationRecordersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeConfigurationRecordersResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeConfigurationRecordersCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeConfigurationRecordersCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeConfigurationRecordersCommandOutput> {
    return deserializeAws_json1_1DescribeConfigurationRecordersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
