import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient.ts";
import { SubscribeToEventRequest } from "../models/models_0.ts";
import {
  deserializeAws_json1_1SubscribeToEventCommand,
  serializeAws_json1_1SubscribeToEventCommand,
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

export interface SubscribeToEventCommandInput extends SubscribeToEventRequest {}
export interface SubscribeToEventCommandOutput extends __MetadataBearer {}

/**
 * <p>Enables the process of sending Amazon Simple Notification Service (SNS) notifications
 *          about a specified event to a specified SNS topic.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, SubscribeToEventCommand } from "../../client-inspector/mod.ts";
 * // const { InspectorClient, SubscribeToEventCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new SubscribeToEventCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SubscribeToEventCommandInput} for command's `input` shape.
 * @see {@link SubscribeToEventCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class SubscribeToEventCommand extends $Command<
  SubscribeToEventCommandInput,
  SubscribeToEventCommandOutput,
  InspectorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SubscribeToEventCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: InspectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SubscribeToEventCommandInput, SubscribeToEventCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InspectorClient";
    const commandName = "SubscribeToEventCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SubscribeToEventRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SubscribeToEventCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1SubscribeToEventCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SubscribeToEventCommandOutput> {
    return deserializeAws_json1_1SubscribeToEventCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
