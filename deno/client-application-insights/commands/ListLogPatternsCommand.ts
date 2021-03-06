import {
  ApplicationInsightsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationInsightsClient.ts";
import { ListLogPatternsRequest, ListLogPatternsResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListLogPatternsCommand,
  serializeAws_json1_1ListLogPatternsCommand,
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

export interface ListLogPatternsCommandInput extends ListLogPatternsRequest {}
export interface ListLogPatternsCommandOutput extends ListLogPatternsResponse, __MetadataBearer {}

/**
 * <p>Lists the log patterns in the specific log <code>LogPatternSet</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationInsightsClient, ListLogPatternsCommand } from "../../client-application-insights/mod.ts";
 * // const { ApplicationInsightsClient, ListLogPatternsCommand } = require("@aws-sdk/client-application-insights"); // CommonJS import
 * const client = new ApplicationInsightsClient(config);
 * const command = new ListLogPatternsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLogPatternsCommandInput} for command's `input` shape.
 * @see {@link ListLogPatternsCommandOutput} for command's `response` shape.
 * @see {@link ApplicationInsightsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListLogPatternsCommand extends $Command<
  ListLogPatternsCommandInput,
  ListLogPatternsCommandOutput,
  ApplicationInsightsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListLogPatternsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApplicationInsightsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListLogPatternsCommandInput, ListLogPatternsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApplicationInsightsClient";
    const commandName = "ListLogPatternsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListLogPatternsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListLogPatternsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListLogPatternsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListLogPatternsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListLogPatternsCommandOutput> {
    return deserializeAws_json1_1ListLogPatternsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
