import { LookoutMetricsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutMetricsClient.ts";
import { ListAnomalyGroupSummariesRequest, ListAnomalyGroupSummariesResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListAnomalyGroupSummariesCommand,
  serializeAws_restJson1ListAnomalyGroupSummariesCommand,
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

export interface ListAnomalyGroupSummariesCommandInput extends ListAnomalyGroupSummariesRequest {}
export interface ListAnomalyGroupSummariesCommandOutput extends ListAnomalyGroupSummariesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of anomaly groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, ListAnomalyGroupSummariesCommand } from "../../client-lookoutmetrics/mod.ts";
 * // const { LookoutMetricsClient, ListAnomalyGroupSummariesCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * const client = new LookoutMetricsClient(config);
 * const command = new ListAnomalyGroupSummariesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAnomalyGroupSummariesCommandInput} for command's `input` shape.
 * @see {@link ListAnomalyGroupSummariesCommandOutput} for command's `response` shape.
 * @see {@link LookoutMetricsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListAnomalyGroupSummariesCommand extends $Command<
  ListAnomalyGroupSummariesCommandInput,
  ListAnomalyGroupSummariesCommandOutput,
  LookoutMetricsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAnomalyGroupSummariesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LookoutMetricsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAnomalyGroupSummariesCommandInput, ListAnomalyGroupSummariesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutMetricsClient";
    const commandName = "ListAnomalyGroupSummariesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAnomalyGroupSummariesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAnomalyGroupSummariesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAnomalyGroupSummariesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListAnomalyGroupSummariesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAnomalyGroupSummariesCommandOutput> {
    return deserializeAws_restJson1ListAnomalyGroupSummariesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
