import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient.ts";
import { DescribeContributorInsightsInput, DescribeContributorInsightsOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_0DescribeContributorInsightsCommand,
  serializeAws_json1_0DescribeContributorInsightsCommand,
} from "../protocols/Aws_json1_0.ts";
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

export interface DescribeContributorInsightsCommandInput extends DescribeContributorInsightsInput {}
export interface DescribeContributorInsightsCommandOutput extends DescribeContributorInsightsOutput, __MetadataBearer {}

/**
 * <p>Returns information about contributor insights, for a given table or global secondary index.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, DescribeContributorInsightsCommand } from "../../client-dynamodb/mod.ts";
 * // const { DynamoDBClient, DescribeContributorInsightsCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new DescribeContributorInsightsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeContributorInsightsCommandInput} for command's `input` shape.
 * @see {@link DescribeContributorInsightsCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeContributorInsightsCommand extends $Command<
  DescribeContributorInsightsCommandInput,
  DescribeContributorInsightsCommandOutput,
  DynamoDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeContributorInsightsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeContributorInsightsCommandInput, DescribeContributorInsightsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DynamoDBClient";
    const commandName = "DescribeContributorInsightsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeContributorInsightsInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeContributorInsightsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeContributorInsightsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0DescribeContributorInsightsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeContributorInsightsCommandOutput> {
    return deserializeAws_json1_0DescribeContributorInsightsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
