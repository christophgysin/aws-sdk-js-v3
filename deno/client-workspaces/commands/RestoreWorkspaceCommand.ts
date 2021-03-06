import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient.ts";
import { RestoreWorkspaceRequest, RestoreWorkspaceResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1RestoreWorkspaceCommand,
  serializeAws_json1_1RestoreWorkspaceCommand,
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

export interface RestoreWorkspaceCommandInput extends RestoreWorkspaceRequest {}
export interface RestoreWorkspaceCommandOutput extends RestoreWorkspaceResult, __MetadataBearer {}

/**
 * <p>Restores the specified WorkSpace to its last known healthy state.</p>
 *          <p>You cannot restore a WorkSpace unless its state is <code> AVAILABLE</code>,
 *             <code>ERROR</code>, <code>UNHEALTHY</code>, or <code>STOPPED</code>.</p>
 *          <p>Restoring a WorkSpace is a potentially destructive action that can result in the loss of
 *          data. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/restore-workspace.html">Restore a
 *          WorkSpace</a>.</p>
 *          <p>This operation is asynchronous and returns before the WorkSpace is completely
 *          restored.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, RestoreWorkspaceCommand } from "../../client-workspaces/mod.ts";
 * // const { WorkSpacesClient, RestoreWorkspaceCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new RestoreWorkspaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RestoreWorkspaceCommandInput} for command's `input` shape.
 * @see {@link RestoreWorkspaceCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class RestoreWorkspaceCommand extends $Command<
  RestoreWorkspaceCommandInput,
  RestoreWorkspaceCommandOutput,
  WorkSpacesClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RestoreWorkspaceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkSpacesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RestoreWorkspaceCommandInput, RestoreWorkspaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "RestoreWorkspaceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RestoreWorkspaceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RestoreWorkspaceResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RestoreWorkspaceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RestoreWorkspaceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RestoreWorkspaceCommandOutput> {
    return deserializeAws_json1_1RestoreWorkspaceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
