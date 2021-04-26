import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient.ts";
import { GetJourneyExecutionMetricsRequest, GetJourneyExecutionMetricsResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1GetJourneyExecutionMetricsCommand,
  serializeAws_restJson1GetJourneyExecutionMetricsCommand,
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

export interface GetJourneyExecutionMetricsCommandInput extends GetJourneyExecutionMetricsRequest {}
export interface GetJourneyExecutionMetricsCommandOutput extends GetJourneyExecutionMetricsResponse, __MetadataBearer {}

/**
 * <p>Retrieves (queries) pre-aggregated data for a standard execution metric that applies to a journey.</p>
 */
export class GetJourneyExecutionMetricsCommand extends $Command<
  GetJourneyExecutionMetricsCommandInput,
  GetJourneyExecutionMetricsCommandOutput,
  PinpointClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetJourneyExecutionMetricsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetJourneyExecutionMetricsCommandInput, GetJourneyExecutionMetricsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "GetJourneyExecutionMetricsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetJourneyExecutionMetricsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetJourneyExecutionMetricsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetJourneyExecutionMetricsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetJourneyExecutionMetricsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetJourneyExecutionMetricsCommandOutput> {
    return deserializeAws_restJson1GetJourneyExecutionMetricsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
