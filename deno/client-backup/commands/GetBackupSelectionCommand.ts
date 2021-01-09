import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient.ts";
import { GetBackupSelectionInput, GetBackupSelectionOutput } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetBackupSelectionCommand,
  serializeAws_restJson1GetBackupSelectionCommand,
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

export type GetBackupSelectionCommandInput = GetBackupSelectionInput;
export type GetBackupSelectionCommandOutput = GetBackupSelectionOutput & __MetadataBearer;

/**
 * <p>Returns selection metadata and a document in JSON format that specifies a list of
 *          resources that are associated with a backup plan.</p>
 */
export class GetBackupSelectionCommand extends $Command<
  GetBackupSelectionCommandInput,
  GetBackupSelectionCommandOutput,
  BackupClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetBackupSelectionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetBackupSelectionCommandInput, GetBackupSelectionCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "GetBackupSelectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetBackupSelectionInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetBackupSelectionOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetBackupSelectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetBackupSelectionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetBackupSelectionCommandOutput> {
    return deserializeAws_restJson1GetBackupSelectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
