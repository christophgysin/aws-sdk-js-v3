import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient.ts";
import { DeleteBackupVaultAccessPolicyInput } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DeleteBackupVaultAccessPolicyCommand,
  serializeAws_restJson1DeleteBackupVaultAccessPolicyCommand,
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

export interface DeleteBackupVaultAccessPolicyCommandInput extends DeleteBackupVaultAccessPolicyInput {}
export interface DeleteBackupVaultAccessPolicyCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the policy document that manages permissions on a backup vault.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DeleteBackupVaultAccessPolicyCommand } from "../../client-backup/mod.ts";
 * // const { BackupClient, DeleteBackupVaultAccessPolicyCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new DeleteBackupVaultAccessPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBackupVaultAccessPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteBackupVaultAccessPolicyCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteBackupVaultAccessPolicyCommand extends $Command<
  DeleteBackupVaultAccessPolicyCommandInput,
  DeleteBackupVaultAccessPolicyCommandOutput,
  BackupClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteBackupVaultAccessPolicyCommandInput) {
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
  ): Handler<DeleteBackupVaultAccessPolicyCommandInput, DeleteBackupVaultAccessPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "DeleteBackupVaultAccessPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteBackupVaultAccessPolicyInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteBackupVaultAccessPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteBackupVaultAccessPolicyCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteBackupVaultAccessPolicyCommandOutput> {
    return deserializeAws_restJson1DeleteBackupVaultAccessPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
