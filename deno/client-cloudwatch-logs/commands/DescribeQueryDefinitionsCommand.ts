import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient.ts";
import { DescribeQueryDefinitionsRequest, DescribeQueryDefinitionsResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeQueryDefinitionsCommand,
  serializeAws_json1_1DescribeQueryDefinitionsCommand,
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

export type DescribeQueryDefinitionsCommandInput = DescribeQueryDefinitionsRequest;
export type DescribeQueryDefinitionsCommandOutput = DescribeQueryDefinitionsResponse & __MetadataBearer;

/**
 * <p>This operation returns a paginated list of your saved CloudWatch Logs Insights query definitions.</p>
 *          <p>You can use the <code>queryDefinitionNamePrefix</code> parameter to limit the results to only the
 *       query definitions that have names that start with a certain string.</p>
 */
export class DescribeQueryDefinitionsCommand extends $Command<
  DescribeQueryDefinitionsCommandInput,
  DescribeQueryDefinitionsCommandOutput,
  CloudWatchLogsClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeQueryDefinitionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeQueryDefinitionsCommandInput, DescribeQueryDefinitionsCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchLogsClient";
    const commandName = "DescribeQueryDefinitionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeQueryDefinitionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeQueryDefinitionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeQueryDefinitionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeQueryDefinitionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeQueryDefinitionsCommandOutput> {
    return deserializeAws_json1_1DescribeQueryDefinitionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
