import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient.ts";
import { DisassociateResolverRuleRequest, DisassociateResolverRuleResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DisassociateResolverRuleCommand,
  serializeAws_json1_1DisassociateResolverRuleCommand,
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

export interface DisassociateResolverRuleCommandInput extends DisassociateResolverRuleRequest {}
export interface DisassociateResolverRuleCommandOutput extends DisassociateResolverRuleResponse, __MetadataBearer {}

/**
 * <p>Removes the association between a specified Resolver rule and a specified VPC.</p>
 * 		       <important>
 * 			         <p>If you disassociate a Resolver rule from a VPC, Resolver stops forwarding DNS queries for the
 * 				domain name that you specified in the Resolver rule. </p>
 * 		       </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, DisassociateResolverRuleCommand } from "../../client-route53resolver/mod.ts";
 * // const { Route53ResolverClient, DisassociateResolverRuleCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new DisassociateResolverRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateResolverRuleCommandInput} for command's `input` shape.
 * @see {@link DisassociateResolverRuleCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DisassociateResolverRuleCommand extends $Command<
  DisassociateResolverRuleCommandInput,
  DisassociateResolverRuleCommandOutput,
  Route53ResolverClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateResolverRuleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ResolverClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateResolverRuleCommandInput, DisassociateResolverRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53ResolverClient";
    const commandName = "DisassociateResolverRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateResolverRuleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateResolverRuleResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisassociateResolverRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DisassociateResolverRuleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisassociateResolverRuleCommandOutput> {
    return deserializeAws_json1_1DisassociateResolverRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
