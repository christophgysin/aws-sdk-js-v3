import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient.ts";
import { UpdateFileSystemRequest, UpdateFileSystemResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1UpdateFileSystemCommand,
  serializeAws_json1_1UpdateFileSystemCommand,
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

export type UpdateFileSystemCommandInput = UpdateFileSystemRequest;
export type UpdateFileSystemCommandOutput = UpdateFileSystemResponse & __MetadataBearer;

/**
 * <p>Use this operation to update the configuration of an existing Amazon FSx file system.
 *       You can update multiple properties in a single request.</p>
 *          <p>For Amazon FSx for Windows File Server file systems, you can update the following
 *     properties:</p>
 *          <ul>
 *             <li>
 *                <p>AutomaticBackupRetentionDays</p>
 *             </li>
 *             <li>
 *                <p>DailyAutomaticBackupStartTime</p>
 *             </li>
 *             <li>
 *                <p>SelfManagedActiveDirectoryConfiguration</p>
 *             </li>
 *             <li>
 *                <p>StorageCapacity</p>
 *             </li>
 *             <li>
 *                <p>ThroughputCapacity</p>
 *             </li>
 *             <li>
 *                <p>WeeklyMaintenanceStartTime</p>
 *             </li>
 *          </ul>
 *          <p>For Amazon FSx for Lustre file systems, you can update the following
 *       properties:</p>
 *          <ul>
 *             <li>
 *                <p>AutoImportPolicy</p>
 *             </li>
 *             <li>
 *                <p>AutomaticBackupRetentionDays</p>
 *             </li>
 *             <li>
 *                <p>DailyAutomaticBackupStartTime</p>
 *             </li>
 *             <li>
 *                <p>StorageCapacity</p>
 *             </li>
 *             <li>
 *                <p>WeeklyMaintenanceStartTime</p>
 *             </li>
 *          </ul>
 */
export class UpdateFileSystemCommand extends $Command<
  UpdateFileSystemCommandInput,
  UpdateFileSystemCommandOutput,
  FSxClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateFileSystemCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FSxClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateFileSystemCommandInput, UpdateFileSystemCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FSxClient";
    const commandName = "UpdateFileSystemCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateFileSystemRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateFileSystemResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateFileSystemCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateFileSystemCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateFileSystemCommandOutput> {
    return deserializeAws_json1_1UpdateFileSystemCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
