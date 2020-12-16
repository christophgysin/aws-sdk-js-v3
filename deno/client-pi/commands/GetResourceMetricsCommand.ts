import { PIClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PIClient.ts";
import { GetResourceMetricsRequest, GetResourceMetricsResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetResourceMetricsCommand,
  serializeAws_json1_1GetResourceMetricsCommand,
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

export type GetResourceMetricsCommandInput = GetResourceMetricsRequest;
export type GetResourceMetricsCommandOutput = GetResourceMetricsResponse & __MetadataBearer;

/**
 * <p>Retrieve Performance Insights metrics for a set of data sources, over a time period. You can provide
 *       specific dimension groups and dimensions, and provide aggregation and filtering criteria for
 *       each group.</p>
 */
export class GetResourceMetricsCommand extends $Command<
  GetResourceMetricsCommandInput,
  GetResourceMetricsCommandOutput,
  PIClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetResourceMetricsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PIClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetResourceMetricsCommandInput, GetResourceMetricsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PIClient";
    const commandName = "GetResourceMetricsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetResourceMetricsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetResourceMetricsResponse.filterSensitiveLog,
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

  private serialize(input: GetResourceMetricsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetResourceMetricsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetResourceMetricsCommandOutput> {
    return deserializeAws_json1_1GetResourceMetricsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
