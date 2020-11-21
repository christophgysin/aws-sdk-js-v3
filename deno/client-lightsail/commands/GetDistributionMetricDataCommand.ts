
import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient.ts";
import { GetDistributionMetricDataRequest, GetDistributionMetricDataResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetDistributionMetricDataCommand,
  serializeAws_json1_1GetDistributionMetricDataCommand,
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

export type GetDistributionMetricDataCommandInput = GetDistributionMetricDataRequest;
export type GetDistributionMetricDataCommandOutput = GetDistributionMetricDataResult & __MetadataBearer;

export class GetDistributionMetricDataCommand extends $Command<
  GetDistributionMetricDataCommandInput,
  GetDistributionMetricDataCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetDistributionMetricDataCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDistributionMetricDataCommandInput, GetDistributionMetricDataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetDistributionMetricDataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDistributionMetricDataRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetDistributionMetricDataResult.filterSensitiveLog,
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

  private serialize(input: GetDistributionMetricDataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetDistributionMetricDataCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetDistributionMetricDataCommandOutput> {
    return deserializeAws_json1_1GetDistributionMetricDataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
