import { RedshiftDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftDataClient.ts";
import { ListStatementsRequest, ListStatementsResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListStatementsCommand,
  serializeAws_json1_1ListStatementsCommand,
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

export interface ListStatementsCommandInput extends ListStatementsRequest {}
export interface ListStatementsCommandOutput extends ListStatementsResponse, __MetadataBearer {}

/**
 * <p>List of SQL statements. By default, only finished statements are shown.
 *         A token is returned to page through the statement list. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftDataClient, ListStatementsCommand } from "../../client-redshift-data/mod.ts";
 * // const { RedshiftDataClient, ListStatementsCommand } = require("@aws-sdk/client-redshift-data"); // CommonJS import
 * const client = new RedshiftDataClient(config);
 * const command = new ListStatementsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListStatementsCommandInput} for command's `input` shape.
 * @see {@link ListStatementsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftDataClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListStatementsCommand extends $Command<
  ListStatementsCommandInput,
  ListStatementsCommandOutput,
  RedshiftDataClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListStatementsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftDataClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListStatementsCommandInput, ListStatementsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftDataClient";
    const commandName = "ListStatementsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListStatementsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListStatementsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListStatementsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListStatementsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListStatementsCommandOutput> {
    return deserializeAws_json1_1ListStatementsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
