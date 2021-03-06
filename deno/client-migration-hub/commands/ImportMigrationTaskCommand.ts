import { MigrationHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubClient.ts";
import { ImportMigrationTaskRequest, ImportMigrationTaskResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ImportMigrationTaskCommand,
  serializeAws_json1_1ImportMigrationTaskCommand,
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

export interface ImportMigrationTaskCommandInput extends ImportMigrationTaskRequest {}
export interface ImportMigrationTaskCommandOutput extends ImportMigrationTaskResult, __MetadataBearer {}

/**
 * <p>Registers a new migration task which represents a server, database, etc., being migrated
 *          to AWS by a migration tool.</p>
 *          <p>This API is a prerequisite to calling the <code>NotifyMigrationTaskState</code> API as
 *          the migration tool must first register the migration task with Migration Hub.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, ImportMigrationTaskCommand } from "../../client-migration-hub/mod.ts";
 * // const { MigrationHubClient, ImportMigrationTaskCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
 * const client = new MigrationHubClient(config);
 * const command = new ImportMigrationTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportMigrationTaskCommandInput} for command's `input` shape.
 * @see {@link ImportMigrationTaskCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ImportMigrationTaskCommand extends $Command<
  ImportMigrationTaskCommandInput,
  ImportMigrationTaskCommandOutput,
  MigrationHubClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ImportMigrationTaskCommandInput) {
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
  ): Handler<ImportMigrationTaskCommandInput, ImportMigrationTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubClient";
    const commandName = "ImportMigrationTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ImportMigrationTaskRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ImportMigrationTaskResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ImportMigrationTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ImportMigrationTaskCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ImportMigrationTaskCommandOutput> {
    return deserializeAws_json1_1ImportMigrationTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
