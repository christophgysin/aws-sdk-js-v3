import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient.ts";
import { DeleteStackRequest } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DeleteStackCommand,
  serializeAws_json1_1DeleteStackCommand,
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

export interface DeleteStackCommandInput extends DeleteStackRequest {}
export interface DeleteStackCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a specified stack. You must first delete all instances, layers, and apps or
 *       deregister registered instances. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-shutting.html">Shut Down a
 *         Stack</a>.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
 *       level for the stack, or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, DeleteStackCommand } from "../../client-opsworks/mod.ts";
 * // const { OpsWorksClient, DeleteStackCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new DeleteStackCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteStackCommandInput} for command's `input` shape.
 * @see {@link DeleteStackCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteStackCommand extends $Command<
  DeleteStackCommandInput,
  DeleteStackCommandOutput,
  OpsWorksClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteStackCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpsWorksClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteStackCommandInput, DeleteStackCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpsWorksClient";
    const commandName = "DeleteStackCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteStackRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteStackCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteStackCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteStackCommandOutput> {
    return deserializeAws_json1_1DeleteStackCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
