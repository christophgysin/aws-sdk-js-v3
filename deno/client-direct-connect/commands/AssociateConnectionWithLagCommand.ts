import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient.ts";
import { AssociateConnectionWithLagRequest, Connection } from "../models/models_0.ts";
import {
  deserializeAws_json1_1AssociateConnectionWithLagCommand,
  serializeAws_json1_1AssociateConnectionWithLagCommand,
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

export type AssociateConnectionWithLagCommandInput = AssociateConnectionWithLagRequest;
export type AssociateConnectionWithLagCommandOutput = Connection & __MetadataBearer;

/**
 * <p>Associates an existing connection with a link aggregation group (LAG). The connection
 *       is interrupted and re-established as a member of the LAG (connectivity to AWS is
 *       interrupted). The connection must be hosted on the same AWS Direct Connect endpoint as the LAG, and its
 *       bandwidth must match the bandwidth for the LAG. You can re-associate a connection that's
 *       currently associated with a different LAG; however, if removing the connection would cause
 *       the original LAG to fall below its setting for minimum number of operational connections,
 *       the request fails.</p>
 *          <p>Any virtual interfaces that are directly associated with the connection are
 *       automatically re-associated with the LAG. If the connection was originally associated
 *       with a different LAG, the virtual interfaces remain associated with the original
 *       LAG.</p>
 *          <p>For interconnects, any hosted connections are automatically re-associated with the
 *       LAG. If the interconnect was originally associated with a different LAG, the hosted
 *       connections remain associated with the original LAG.</p>
 */
export class AssociateConnectionWithLagCommand extends $Command<
  AssociateConnectionWithLagCommandInput,
  AssociateConnectionWithLagCommandOutput,
  DirectConnectClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateConnectionWithLagCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateConnectionWithLagCommandInput, AssociateConnectionWithLagCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "AssociateConnectionWithLagCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateConnectionWithLagRequest.filterSensitiveLog,
      outputFilterSensitiveLog: Connection.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateConnectionWithLagCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AssociateConnectionWithLagCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateConnectionWithLagCommandOutput> {
    return deserializeAws_json1_1AssociateConnectionWithLagCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
