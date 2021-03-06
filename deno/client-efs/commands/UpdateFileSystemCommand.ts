import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient.ts";
import { FileSystemDescription, UpdateFileSystemRequest } from "../models/models_0.ts";
import {
  deserializeAws_restJson1UpdateFileSystemCommand,
  serializeAws_restJson1UpdateFileSystemCommand,
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

export interface UpdateFileSystemCommandInput extends UpdateFileSystemRequest {}
export interface UpdateFileSystemCommandOutput extends FileSystemDescription, __MetadataBearer {}

/**
 * <p>Updates the throughput mode or the amount of provisioned throughput of an existing file
 *       system.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, UpdateFileSystemCommand } from "../../client-efs/mod.ts";
 * // const { EFSClient, UpdateFileSystemCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * const client = new EFSClient(config);
 * const command = new UpdateFileSystemCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFileSystemCommandInput} for command's `input` shape.
 * @see {@link UpdateFileSystemCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateFileSystemCommand extends $Command<
  UpdateFileSystemCommandInput,
  UpdateFileSystemCommandOutput,
  EFSClientResolvedConfig
> {
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
    configuration: EFSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateFileSystemCommandInput, UpdateFileSystemCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EFSClient";
    const commandName = "UpdateFileSystemCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateFileSystemRequest.filterSensitiveLog,
      outputFilterSensitiveLog: FileSystemDescription.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateFileSystemCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateFileSystemCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateFileSystemCommandOutput> {
    return deserializeAws_restJson1UpdateFileSystemCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
