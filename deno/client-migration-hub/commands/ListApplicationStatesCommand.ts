import { MigrationHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubClient.ts";
import { ListApplicationStatesRequest, ListApplicationStatesResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListApplicationStatesCommand,
  serializeAws_json1_1ListApplicationStatesCommand,
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

export interface ListApplicationStatesCommandInput extends ListApplicationStatesRequest {}
export interface ListApplicationStatesCommandOutput extends ListApplicationStatesResult, __MetadataBearer {}

/**
 * <p>Lists all the migration statuses for your applications. If you use the optional
 *             <code>ApplicationIds</code> parameter, only the migration statuses for those
 *          applications will be returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, ListApplicationStatesCommand } from "../../client-migration-hub/mod.ts";
 * // const { MigrationHubClient, ListApplicationStatesCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
 * const client = new MigrationHubClient(config);
 * const command = new ListApplicationStatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListApplicationStatesCommandInput} for command's `input` shape.
 * @see {@link ListApplicationStatesCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListApplicationStatesCommand extends $Command<
  ListApplicationStatesCommandInput,
  ListApplicationStatesCommandOutput,
  MigrationHubClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListApplicationStatesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MigrationHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListApplicationStatesCommandInput, ListApplicationStatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubClient";
    const commandName = "ListApplicationStatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListApplicationStatesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListApplicationStatesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListApplicationStatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListApplicationStatesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListApplicationStatesCommandOutput> {
    return deserializeAws_json1_1ListApplicationStatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
