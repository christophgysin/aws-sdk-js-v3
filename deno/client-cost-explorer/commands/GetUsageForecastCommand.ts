import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient.ts";
import { GetUsageForecastRequest, GetUsageForecastResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetUsageForecastCommand,
  serializeAws_json1_1GetUsageForecastCommand,
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

export interface GetUsageForecastCommandInput extends GetUsageForecastRequest {}
export interface GetUsageForecastCommandOutput extends GetUsageForecastResponse, __MetadataBearer {}

/**
 * <p>Retrieves a forecast for how much Amazon Web Services predicts that you will use over the forecast time period that you select, based on your past usage. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, GetUsageForecastCommand } from "../../client-cost-explorer/mod.ts";
 * // const { CostExplorerClient, GetUsageForecastCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new GetUsageForecastCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetUsageForecastCommandInput} for command's `input` shape.
 * @see {@link GetUsageForecastCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetUsageForecastCommand extends $Command<
  GetUsageForecastCommandInput,
  GetUsageForecastCommandOutput,
  CostExplorerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetUsageForecastCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CostExplorerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetUsageForecastCommandInput, GetUsageForecastCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CostExplorerClient";
    const commandName = "GetUsageForecastCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetUsageForecastRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetUsageForecastResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetUsageForecastCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetUsageForecastCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetUsageForecastCommandOutput> {
    return deserializeAws_json1_1GetUsageForecastCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
