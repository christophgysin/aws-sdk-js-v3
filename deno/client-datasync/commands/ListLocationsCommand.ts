import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient.ts";
import { ListLocationsRequest, ListLocationsResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListLocationsCommand,
  serializeAws_json1_1ListLocationsCommand,
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

export interface ListLocationsCommandInput extends ListLocationsRequest {}
export interface ListLocationsCommandOutput extends ListLocationsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of source and destination locations.</p>
 *          <p>If you have more locations than are returned in a response (that is, the response
 *       returns only a truncated list of your agents), the response contains a token that you can
 *       specify in your next request to fetch the next page of locations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, ListLocationsCommand } from "../../client-datasync/mod.ts";
 * // const { DataSyncClient, ListLocationsCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new ListLocationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLocationsCommandInput} for command's `input` shape.
 * @see {@link ListLocationsCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListLocationsCommand extends $Command<
  ListLocationsCommandInput,
  ListLocationsCommandOutput,
  DataSyncClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListLocationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListLocationsCommandInput, ListLocationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataSyncClient";
    const commandName = "ListLocationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListLocationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListLocationsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListLocationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListLocationsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListLocationsCommandOutput> {
    return deserializeAws_json1_1ListLocationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
