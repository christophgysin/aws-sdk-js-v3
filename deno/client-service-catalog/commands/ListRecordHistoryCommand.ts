import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient.ts";
import { ListRecordHistoryInput, ListRecordHistoryOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListRecordHistoryCommand,
  serializeAws_json1_1ListRecordHistoryCommand,
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

export interface ListRecordHistoryCommandInput extends ListRecordHistoryInput {}
export interface ListRecordHistoryCommandOutput extends ListRecordHistoryOutput, __MetadataBearer {}

/**
 * <p>Lists the specified requests or all performed requests.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListRecordHistoryCommand } from "../../client-service-catalog/mod.ts";
 * // const { ServiceCatalogClient, ListRecordHistoryCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new ListRecordHistoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRecordHistoryCommandInput} for command's `input` shape.
 * @see {@link ListRecordHistoryCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListRecordHistoryCommand extends $Command<
  ListRecordHistoryCommandInput,
  ListRecordHistoryCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListRecordHistoryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceCatalogClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRecordHistoryCommandInput, ListRecordHistoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "ListRecordHistoryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListRecordHistoryInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListRecordHistoryOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListRecordHistoryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListRecordHistoryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListRecordHistoryCommandOutput> {
    return deserializeAws_json1_1ListRecordHistoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
