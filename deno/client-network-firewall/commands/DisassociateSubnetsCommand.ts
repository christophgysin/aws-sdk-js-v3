import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient.ts";
import { DisassociateSubnetsRequest, DisassociateSubnetsResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_0DisassociateSubnetsCommand,
  serializeAws_json1_0DisassociateSubnetsCommand,
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

export interface DisassociateSubnetsCommandInput extends DisassociateSubnetsRequest {}
export interface DisassociateSubnetsCommandOutput extends DisassociateSubnetsResponse, __MetadataBearer {}

/**
 * <p>Removes the specified subnet associations from the firewall. This removes the
 *           firewall endpoints from the subnets and removes any network filtering protections that the endpoints
 *           were providing.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, DisassociateSubnetsCommand } from "../../client-network-firewall/mod.ts";
 * // const { NetworkFirewallClient, DisassociateSubnetsCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const command = new DisassociateSubnetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateSubnetsCommandInput} for command's `input` shape.
 * @see {@link DisassociateSubnetsCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DisassociateSubnetsCommand extends $Command<
  DisassociateSubnetsCommandInput,
  DisassociateSubnetsCommandOutput,
  NetworkFirewallClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateSubnetsCommandInput) {
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
  ): Handler<DisassociateSubnetsCommandInput, DisassociateSubnetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkFirewallClient";
    const commandName = "DisassociateSubnetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateSubnetsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateSubnetsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisassociateSubnetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0DisassociateSubnetsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisassociateSubnetsCommandOutput> {
    return deserializeAws_json1_0DisassociateSubnetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
