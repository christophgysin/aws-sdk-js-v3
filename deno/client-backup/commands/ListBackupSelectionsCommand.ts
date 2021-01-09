import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient.ts";
import { ListBackupSelectionsInput, ListBackupSelectionsOutput } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListBackupSelectionsCommand,
  serializeAws_restJson1ListBackupSelectionsCommand,
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

export type ListBackupSelectionsCommandInput = ListBackupSelectionsInput;
export type ListBackupSelectionsCommandOutput = ListBackupSelectionsOutput & __MetadataBearer;

/**
 * <p>Returns an array containing metadata of the resources associated with the target backup
 *          plan.</p>
 */
export class ListBackupSelectionsCommand extends $Command<
  ListBackupSelectionsCommandInput,
  ListBackupSelectionsCommandOutput,
  BackupClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListBackupSelectionsCommandInput) {
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
  ): Handler<ListBackupSelectionsCommandInput, ListBackupSelectionsCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "ListBackupSelectionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListBackupSelectionsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListBackupSelectionsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListBackupSelectionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListBackupSelectionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListBackupSelectionsCommandOutput> {
    return deserializeAws_restJson1ListBackupSelectionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
