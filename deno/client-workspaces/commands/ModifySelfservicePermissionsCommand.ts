import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient.ts";
import { ModifySelfservicePermissionsRequest, ModifySelfservicePermissionsResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ModifySelfservicePermissionsCommand,
  serializeAws_json1_1ModifySelfservicePermissionsCommand,
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

export interface ModifySelfservicePermissionsCommandInput extends ModifySelfservicePermissionsRequest {}
export interface ModifySelfservicePermissionsCommandOutput
  extends ModifySelfservicePermissionsResult,
    __MetadataBearer {}

/**
 * <p>Modifies the self-service WorkSpace management capabilities for your users. For more
 *          information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/enable-user-self-service-workspace-management.html">Enable Self-Service WorkSpace Management Capabilities for Your Users</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, ModifySelfservicePermissionsCommand } from "../../client-workspaces/mod.ts";
 * // const { WorkSpacesClient, ModifySelfservicePermissionsCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new ModifySelfservicePermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifySelfservicePermissionsCommandInput} for command's `input` shape.
 * @see {@link ModifySelfservicePermissionsCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ModifySelfservicePermissionsCommand extends $Command<
  ModifySelfservicePermissionsCommandInput,
  ModifySelfservicePermissionsCommandOutput,
  WorkSpacesClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifySelfservicePermissionsCommandInput) {
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
  ): Handler<ModifySelfservicePermissionsCommandInput, ModifySelfservicePermissionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "ModifySelfservicePermissionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifySelfservicePermissionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ModifySelfservicePermissionsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifySelfservicePermissionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ModifySelfservicePermissionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifySelfservicePermissionsCommandOutput> {
    return deserializeAws_json1_1ModifySelfservicePermissionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
