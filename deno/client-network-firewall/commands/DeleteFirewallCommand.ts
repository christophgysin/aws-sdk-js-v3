import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient.ts";
import { DeleteFirewallRequest, DeleteFirewallResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_0DeleteFirewallCommand,
  serializeAws_json1_0DeleteFirewallCommand,
} from "../protocols/Aws_json1_0.ts";
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

export type DeleteFirewallCommandInput = DeleteFirewallRequest;
export type DeleteFirewallCommandOutput = DeleteFirewallResponse & __MetadataBearer;

/**
 * <p>Deletes the specified <a>Firewall</a> and its <a>FirewallStatus</a>. This operation requires the firewall's <code>DeleteProtection</code> flag to be
 *             <code>FALSE</code>. You can't revert this operation. </p>
 *          <p>You can check whether a firewall is
 *          in use by reviewing the route tables for the Availability Zones where you have
 *          firewall subnet mappings. Retrieve the subnet mappings by calling <a>DescribeFirewall</a>.
 *          You define and update the route tables through Amazon VPC. As needed, update the route tables for the
 *          zones to remove the firewall endpoints. When the route tables no longer use the firewall endpoints,
 *          you can remove the firewall safely.</p>
 *          <p>To delete a firewall, remove the delete protection if you need to using <a>UpdateFirewallDeleteProtection</a>,
 *          then delete the firewall by calling <a>DeleteFirewall</a>. </p>
 */
export class DeleteFirewallCommand extends $Command<
  DeleteFirewallCommandInput,
  DeleteFirewallCommandOutput,
  NetworkFirewallClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteFirewallCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NetworkFirewallClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteFirewallCommandInput, DeleteFirewallCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkFirewallClient";
    const commandName = "DeleteFirewallCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteFirewallRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteFirewallResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteFirewallCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0DeleteFirewallCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteFirewallCommandOutput> {
    return deserializeAws_json1_0DeleteFirewallCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
