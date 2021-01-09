import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient.ts";
import { ModifyMountTargetSecurityGroupsRequest } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ModifyMountTargetSecurityGroupsCommand,
  serializeAws_restJson1ModifyMountTargetSecurityGroupsCommand,
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

export type ModifyMountTargetSecurityGroupsCommandInput = ModifyMountTargetSecurityGroupsRequest;
export type ModifyMountTargetSecurityGroupsCommandOutput = __MetadataBearer;

/**
 * <p>Modifies the set of security groups in effect for a mount target.</p>
 *          <p>When you create a mount target, Amazon EFS also creates a new network interface. For
 *       more information, see <a>CreateMountTarget</a>. This operation replaces the security groups in effect for the
 *       network interface associated with a mount target, with the <code>SecurityGroups</code>
 *       provided in the request. This operation requires that the network interface of the mount
 *       target has been created and the lifecycle state of the mount target is not
 *         <code>deleted</code>. </p>
 *          <p>The operation requires permissions for the following actions:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>elasticfilesystem:ModifyMountTargetSecurityGroups</code> action on the mount
 *           target's file system. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ec2:ModifyNetworkInterfaceAttribute</code> action on the mount target's network
 *           interface. </p>
 *             </li>
 *          </ul>
 */
export class ModifyMountTargetSecurityGroupsCommand extends $Command<
  ModifyMountTargetSecurityGroupsCommandInput,
  ModifyMountTargetSecurityGroupsCommandOutput,
  EFSClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyMountTargetSecurityGroupsCommandInput) {
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
  ): Handler<ModifyMountTargetSecurityGroupsCommandInput, ModifyMountTargetSecurityGroupsCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EFSClient";
    const commandName = "ModifyMountTargetSecurityGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyMountTargetSecurityGroupsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ModifyMountTargetSecurityGroupsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ModifyMountTargetSecurityGroupsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyMountTargetSecurityGroupsCommandOutput> {
    return deserializeAws_restJson1ModifyMountTargetSecurityGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
