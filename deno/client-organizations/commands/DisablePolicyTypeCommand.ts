import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient.ts";
import { DisablePolicyTypeRequest, DisablePolicyTypeResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DisablePolicyTypeCommand,
  serializeAws_json1_1DisablePolicyTypeCommand,
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

export interface DisablePolicyTypeCommandInput extends DisablePolicyTypeRequest {}
export interface DisablePolicyTypeCommandOutput extends DisablePolicyTypeResponse, __MetadataBearer {}

/**
 * <p>Disables an organizational policy type in a root. A policy of a certain type can be
 *             attached to entities in a root only if that type is enabled in the root. After you
 *             perform this operation, you no longer can attach policies of the specified type to that
 *             root or to any organizational unit (OU) or account in that root. You can undo this by
 *             using the <a>EnablePolicyType</a> operation.</p>
 *         <p>This is an asynchronous request that AWS performs in the background. If you disable
 *             a policy type for a root, it still appears enabled for the organization if <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">all features</a> are enabled for the organization. AWS recommends that you
 *             first use <a>ListRoots</a> to see the status of policy types for a specified
 *             root, and then use this operation.</p>
 *         <p>This operation can be called only from the organization's management account.</p>
 *         <p> To view the status of available policy types in the organization, use <a>DescribeOrganization</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, DisablePolicyTypeCommand } from "../../client-organizations/mod.ts";
 * // const { OrganizationsClient, DisablePolicyTypeCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new DisablePolicyTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisablePolicyTypeCommandInput} for command's `input` shape.
 * @see {@link DisablePolicyTypeCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DisablePolicyTypeCommand extends $Command<
  DisablePolicyTypeCommandInput,
  DisablePolicyTypeCommandOutput,
  OrganizationsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisablePolicyTypeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OrganizationsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisablePolicyTypeCommandInput, DisablePolicyTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OrganizationsClient";
    const commandName = "DisablePolicyTypeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisablePolicyTypeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisablePolicyTypeResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisablePolicyTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DisablePolicyTypeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisablePolicyTypeCommandOutput> {
    return deserializeAws_json1_1DisablePolicyTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
