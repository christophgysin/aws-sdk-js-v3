import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient.ts";
import { ListClusterOperationsRequest, ListClusterOperationsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListClusterOperationsCommand,
  serializeAws_restJson1ListClusterOperationsCommand,
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

export interface ListClusterOperationsCommandInput extends ListClusterOperationsRequest {}
export interface ListClusterOperationsCommandOutput extends ListClusterOperationsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of all the operations that have been performed on the specified MSK cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, ListClusterOperationsCommand } from "../../client-kafka/mod.ts";
 * // const { KafkaClient, ListClusterOperationsCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const command = new ListClusterOperationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListClusterOperationsCommandInput} for command's `input` shape.
 * @see {@link ListClusterOperationsCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListClusterOperationsCommand extends $Command<
  ListClusterOperationsCommandInput,
  ListClusterOperationsCommandOutput,
  KafkaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListClusterOperationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KafkaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListClusterOperationsCommandInput, ListClusterOperationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KafkaClient";
    const commandName = "ListClusterOperationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListClusterOperationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListClusterOperationsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListClusterOperationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListClusterOperationsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListClusterOperationsCommandOutput> {
    return deserializeAws_restJson1ListClusterOperationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
