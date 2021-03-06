import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient.ts";
import { ListKeywordsForDataSourceRequest, ListKeywordsForDataSourceResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListKeywordsForDataSourceCommand,
  serializeAws_restJson1ListKeywordsForDataSourceCommand,
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

export interface ListKeywordsForDataSourceCommandInput extends ListKeywordsForDataSourceRequest {}
export interface ListKeywordsForDataSourceCommandOutput extends ListKeywordsForDataSourceResponse, __MetadataBearer {}

/**
 * <p>
 * Returns a list of keywords that pre-mapped to the specified control data source.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, ListKeywordsForDataSourceCommand } from "../../client-auditmanager/mod.ts";
 * // const { AuditManagerClient, ListKeywordsForDataSourceCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new ListKeywordsForDataSourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListKeywordsForDataSourceCommandInput} for command's `input` shape.
 * @see {@link ListKeywordsForDataSourceCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListKeywordsForDataSourceCommand extends $Command<
  ListKeywordsForDataSourceCommandInput,
  ListKeywordsForDataSourceCommandOutput,
  AuditManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListKeywordsForDataSourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AuditManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListKeywordsForDataSourceCommandInput, ListKeywordsForDataSourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AuditManagerClient";
    const commandName = "ListKeywordsForDataSourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListKeywordsForDataSourceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListKeywordsForDataSourceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListKeywordsForDataSourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListKeywordsForDataSourceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListKeywordsForDataSourceCommandOutput> {
    return deserializeAws_restJson1ListKeywordsForDataSourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
