import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient.ts";
import { ExportBackupPlanTemplateInput, ExportBackupPlanTemplateOutput } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ExportBackupPlanTemplateCommand,
  serializeAws_restJson1ExportBackupPlanTemplateCommand,
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

export interface ExportBackupPlanTemplateCommandInput extends ExportBackupPlanTemplateInput {}
export interface ExportBackupPlanTemplateCommandOutput extends ExportBackupPlanTemplateOutput, __MetadataBearer {}

/**
 * <p>Returns the backup plan that is specified by the plan ID as a backup template.</p>
 */
export class ExportBackupPlanTemplateCommand extends $Command<
  ExportBackupPlanTemplateCommandInput,
  ExportBackupPlanTemplateCommandOutput,
  BackupClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ExportBackupPlanTemplateCommandInput) {
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
  ): Handler<ExportBackupPlanTemplateCommandInput, ExportBackupPlanTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "ExportBackupPlanTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ExportBackupPlanTemplateInput.filterSensitiveLog,
      outputFilterSensitiveLog: ExportBackupPlanTemplateOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ExportBackupPlanTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ExportBackupPlanTemplateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ExportBackupPlanTemplateCommandOutput> {
    return deserializeAws_restJson1ExportBackupPlanTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
