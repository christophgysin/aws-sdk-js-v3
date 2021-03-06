import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient.ts";
import { ListEventSourceMappingsRequest, ListEventSourceMappingsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListEventSourceMappingsCommand,
  serializeAws_restJson1ListEventSourceMappingsCommand,
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

export interface ListEventSourceMappingsCommandInput extends ListEventSourceMappingsRequest {}
export interface ListEventSourceMappingsCommandOutput extends ListEventSourceMappingsResponse, __MetadataBearer {}

/**
 * <p>Lists event source mappings. Specify an <code>EventSourceArn</code> to only show event source mappings for a
 *       single event source.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, ListEventSourceMappingsCommand } from "../../client-lambda/mod.ts";
 * // const { LambdaClient, ListEventSourceMappingsCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new ListEventSourceMappingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEventSourceMappingsCommandInput} for command's `input` shape.
 * @see {@link ListEventSourceMappingsCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListEventSourceMappingsCommand extends $Command<
  ListEventSourceMappingsCommandInput,
  ListEventSourceMappingsCommandOutput,
  LambdaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListEventSourceMappingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListEventSourceMappingsCommandInput, ListEventSourceMappingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "ListEventSourceMappingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListEventSourceMappingsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListEventSourceMappingsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListEventSourceMappingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListEventSourceMappingsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListEventSourceMappingsCommandOutput> {
    return deserializeAws_restJson1ListEventSourceMappingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
