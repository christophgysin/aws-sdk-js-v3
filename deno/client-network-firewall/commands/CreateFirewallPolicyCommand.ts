import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient.ts";
import { CreateFirewallPolicyRequest, CreateFirewallPolicyResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_0CreateFirewallPolicyCommand,
  serializeAws_json1_0CreateFirewallPolicyCommand,
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

export interface CreateFirewallPolicyCommandInput extends CreateFirewallPolicyRequest {}
export interface CreateFirewallPolicyCommandOutput extends CreateFirewallPolicyResponse, __MetadataBearer {}

/**
 * <p>Creates the firewall policy for the firewall according to the specifications. </p>
 *          <p>An AWS Network Firewall firewall policy defines the behavior of a firewall, in a collection of
 *          stateless and stateful rule groups and other settings. You can use one firewall policy for
 *          multiple firewalls. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, CreateFirewallPolicyCommand } from "../../client-network-firewall/mod.ts";
 * // const { NetworkFirewallClient, CreateFirewallPolicyCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const command = new CreateFirewallPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFirewallPolicyCommandInput} for command's `input` shape.
 * @see {@link CreateFirewallPolicyCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateFirewallPolicyCommand extends $Command<
  CreateFirewallPolicyCommandInput,
  CreateFirewallPolicyCommandOutput,
  NetworkFirewallClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateFirewallPolicyCommandInput) {
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
  ): Handler<CreateFirewallPolicyCommandInput, CreateFirewallPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkFirewallClient";
    const commandName = "CreateFirewallPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateFirewallPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateFirewallPolicyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateFirewallPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0CreateFirewallPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateFirewallPolicyCommandOutput> {
    return deserializeAws_json1_0CreateFirewallPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
