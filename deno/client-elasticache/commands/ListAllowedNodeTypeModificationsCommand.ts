import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient.ts";
import { AllowedNodeTypeModificationsMessage, ListAllowedNodeTypeModificationsMessage } from "../models/models_0.ts";
import {
  deserializeAws_queryListAllowedNodeTypeModificationsCommand,
  serializeAws_queryListAllowedNodeTypeModificationsCommand,
} from "../protocols/Aws_query.ts";
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

export interface ListAllowedNodeTypeModificationsCommandInput extends ListAllowedNodeTypeModificationsMessage {}
export interface ListAllowedNodeTypeModificationsCommandOutput
  extends AllowedNodeTypeModificationsMessage,
    __MetadataBearer {}

/**
 * <p>Lists all available node types that you
 *             can scale your Redis cluster's or replication group's current node type.</p>
 *
 *         <p>When you use the <code>ModifyCacheCluster</code> or <code>ModifyReplicationGroup</code> operations to
 *             scale your cluster or replication group, the value of the <code>CacheNodeType</code> parameter
 *             must be one of the node types returned by this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, ListAllowedNodeTypeModificationsCommand } from "../../client-elasticache/mod.ts";
 * // const { ElastiCacheClient, ListAllowedNodeTypeModificationsCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new ListAllowedNodeTypeModificationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAllowedNodeTypeModificationsCommandInput} for command's `input` shape.
 * @see {@link ListAllowedNodeTypeModificationsCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListAllowedNodeTypeModificationsCommand extends $Command<
  ListAllowedNodeTypeModificationsCommandInput,
  ListAllowedNodeTypeModificationsCommandOutput,
  ElastiCacheClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAllowedNodeTypeModificationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElastiCacheClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAllowedNodeTypeModificationsCommandInput, ListAllowedNodeTypeModificationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "ListAllowedNodeTypeModificationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAllowedNodeTypeModificationsMessage.filterSensitiveLog,
      outputFilterSensitiveLog: AllowedNodeTypeModificationsMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListAllowedNodeTypeModificationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryListAllowedNodeTypeModificationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAllowedNodeTypeModificationsCommandOutput> {
    return deserializeAws_queryListAllowedNodeTypeModificationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
