import { IoTAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTAnalyticsClient.ts";
import { SampleChannelDataRequest, SampleChannelDataResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1SampleChannelDataCommand,
  serializeAws_restJson1SampleChannelDataCommand,
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

export interface SampleChannelDataCommandInput extends SampleChannelDataRequest {}
export interface SampleChannelDataCommandOutput extends SampleChannelDataResponse, __MetadataBearer {}

/**
 * <p>Retrieves a sample of messages from the specified channel ingested during the specified
 *       timeframe. Up to 10 messages can be retrieved.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, SampleChannelDataCommand } from "../../client-iotanalytics/mod.ts";
 * // const { IoTAnalyticsClient, SampleChannelDataCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * const client = new IoTAnalyticsClient(config);
 * const command = new SampleChannelDataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SampleChannelDataCommandInput} for command's `input` shape.
 * @see {@link SampleChannelDataCommandOutput} for command's `response` shape.
 * @see {@link IoTAnalyticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class SampleChannelDataCommand extends $Command<
  SampleChannelDataCommandInput,
  SampleChannelDataCommandOutput,
  IoTAnalyticsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SampleChannelDataCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTAnalyticsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SampleChannelDataCommandInput, SampleChannelDataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTAnalyticsClient";
    const commandName = "SampleChannelDataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SampleChannelDataRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SampleChannelDataResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SampleChannelDataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1SampleChannelDataCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SampleChannelDataCommandOutput> {
    return deserializeAws_restJson1SampleChannelDataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
