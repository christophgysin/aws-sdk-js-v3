import { DataExchangeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataExchangeClient.ts";
import { ListDataSetRevisionsRequest, ListDataSetRevisionsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListDataSetRevisionsCommand,
  serializeAws_restJson1ListDataSetRevisionsCommand,
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

export interface ListDataSetRevisionsCommandInput extends ListDataSetRevisionsRequest {}
export interface ListDataSetRevisionsCommandOutput extends ListDataSetRevisionsResponse, __MetadataBearer {}

/**
 * <p>This operation lists a data set's revisions sorted by CreatedAt in descending order.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, ListDataSetRevisionsCommand } from "../../client-dataexchange/mod.ts";
 * // const { DataExchangeClient, ListDataSetRevisionsCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * const client = new DataExchangeClient(config);
 * const command = new ListDataSetRevisionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDataSetRevisionsCommandInput} for command's `input` shape.
 * @see {@link ListDataSetRevisionsCommandOutput} for command's `response` shape.
 * @see {@link DataExchangeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListDataSetRevisionsCommand extends $Command<
  ListDataSetRevisionsCommandInput,
  ListDataSetRevisionsCommandOutput,
  DataExchangeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListDataSetRevisionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataExchangeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDataSetRevisionsCommandInput, ListDataSetRevisionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataExchangeClient";
    const commandName = "ListDataSetRevisionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDataSetRevisionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListDataSetRevisionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListDataSetRevisionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListDataSetRevisionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDataSetRevisionsCommandOutput> {
    return deserializeAws_restJson1ListDataSetRevisionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
