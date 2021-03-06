import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient.ts";
import {
  IncreaseNodeGroupsInGlobalReplicationGroupMessage,
  IncreaseNodeGroupsInGlobalReplicationGroupResult,
} from "../models/models_0.ts";
import {
  deserializeAws_queryIncreaseNodeGroupsInGlobalReplicationGroupCommand,
  serializeAws_queryIncreaseNodeGroupsInGlobalReplicationGroupCommand,
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

export interface IncreaseNodeGroupsInGlobalReplicationGroupCommandInput
  extends IncreaseNodeGroupsInGlobalReplicationGroupMessage {}
export interface IncreaseNodeGroupsInGlobalReplicationGroupCommandOutput
  extends IncreaseNodeGroupsInGlobalReplicationGroupResult,
    __MetadataBearer {}

/**
 * <p>Increase the number of node groups in the Global datastore</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, IncreaseNodeGroupsInGlobalReplicationGroupCommand } from "../../client-elasticache/mod.ts";
 * // const { ElastiCacheClient, IncreaseNodeGroupsInGlobalReplicationGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new IncreaseNodeGroupsInGlobalReplicationGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link IncreaseNodeGroupsInGlobalReplicationGroupCommandInput} for command's `input` shape.
 * @see {@link IncreaseNodeGroupsInGlobalReplicationGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class IncreaseNodeGroupsInGlobalReplicationGroupCommand extends $Command<
  IncreaseNodeGroupsInGlobalReplicationGroupCommandInput,
  IncreaseNodeGroupsInGlobalReplicationGroupCommandOutput,
  ElastiCacheClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: IncreaseNodeGroupsInGlobalReplicationGroupCommandInput) {
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
  ): Handler<
    IncreaseNodeGroupsInGlobalReplicationGroupCommandInput,
    IncreaseNodeGroupsInGlobalReplicationGroupCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "IncreaseNodeGroupsInGlobalReplicationGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: IncreaseNodeGroupsInGlobalReplicationGroupMessage.filterSensitiveLog,
      outputFilterSensitiveLog: IncreaseNodeGroupsInGlobalReplicationGroupResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: IncreaseNodeGroupsInGlobalReplicationGroupCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryIncreaseNodeGroupsInGlobalReplicationGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<IncreaseNodeGroupsInGlobalReplicationGroupCommandOutput> {
    return deserializeAws_queryIncreaseNodeGroupsInGlobalReplicationGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
