import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient.ts";
import { AssociateIdentityProviderConfigRequest, AssociateIdentityProviderConfigResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1AssociateIdentityProviderConfigCommand,
  serializeAws_restJson1AssociateIdentityProviderConfigCommand,
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

export interface AssociateIdentityProviderConfigCommandInput extends AssociateIdentityProviderConfigRequest {}
export interface AssociateIdentityProviderConfigCommandOutput
  extends AssociateIdentityProviderConfigResponse,
    __MetadataBearer {}

/**
 * <p>Associate an identity provider configuration to a cluster.</p>
 *         <p>If you want to authenticate identities using an identity provider, you can create an
 *             identity provider configuration and associate it to your cluster. After configuring
 *             authentication to your cluster you can create Kubernetes <code>roles</code> and
 *                 <code>clusterroles</code> to assign permissions to the roles, and then bind the
 *             roles to the identities using Kubernetes <code>rolebindings</code> and
 *                 <code>clusterrolebindings</code>. For more information see <a href="https://kubernetes.io/docs/reference/access-authn-authz/rbac/">Using RBAC
 *                 Authorization</a> in the Kubernetes documentation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, AssociateIdentityProviderConfigCommand } from "../../client-eks/mod.ts";
 * // const { EKSClient, AssociateIdentityProviderConfigCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new AssociateIdentityProviderConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateIdentityProviderConfigCommandInput} for command's `input` shape.
 * @see {@link AssociateIdentityProviderConfigCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class AssociateIdentityProviderConfigCommand extends $Command<
  AssociateIdentityProviderConfigCommandInput,
  AssociateIdentityProviderConfigCommandOutput,
  EKSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateIdentityProviderConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EKSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateIdentityProviderConfigCommandInput, AssociateIdentityProviderConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EKSClient";
    const commandName = "AssociateIdentityProviderConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateIdentityProviderConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateIdentityProviderConfigResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AssociateIdentityProviderConfigCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1AssociateIdentityProviderConfigCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateIdentityProviderConfigCommandOutput> {
    return deserializeAws_restJson1AssociateIdentityProviderConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
