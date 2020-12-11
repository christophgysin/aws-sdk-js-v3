import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient.ts";
import { PutInsightRuleInput, PutInsightRuleOutput } from "../models/models_0.ts";
import {
  deserializeAws_queryPutInsightRuleCommand,
  serializeAws_queryPutInsightRuleCommand,
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

export type PutInsightRuleCommandInput = PutInsightRuleInput;
export type PutInsightRuleCommandOutput = PutInsightRuleOutput & __MetadataBearer;

/**
 * <p>Creates a Contributor Insights rule. Rules evaluate log events in a
 * 		CloudWatch Logs log group, enabling you to find contributor data for the log events in that log group. For more information,
 * 		see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ContributorInsights.html">Using Contributor Insights to Analyze High-Cardinality Data</a>.</p>
 * 		       <p>If you create a rule, delete it, and then re-create it with the same name, historical data from the first time
 * 			the rule was created might not be available.</p>
 */
export class PutInsightRuleCommand extends $Command<
  PutInsightRuleCommandInput,
  PutInsightRuleCommandOutput,
  CloudWatchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutInsightRuleCommandInput) {
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
  ): Handler<PutInsightRuleCommandInput, PutInsightRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchClient";
    const commandName = "PutInsightRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutInsightRuleInput.filterSensitiveLog,
      outputFilterSensitiveLog: PutInsightRuleOutput.filterSensitiveLog,
    };

    if (typeof logger.info === "function") {
      logger.info({
        clientName,
        commandName,
      });
    }

    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutInsightRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryPutInsightRuleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutInsightRuleCommandOutput> {
    return deserializeAws_queryPutInsightRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
