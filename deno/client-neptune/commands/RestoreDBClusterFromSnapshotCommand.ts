import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient.ts";
import { RestoreDBClusterFromSnapshotMessage, RestoreDBClusterFromSnapshotResult } from "../models/models_0.ts";
import {
  deserializeAws_queryRestoreDBClusterFromSnapshotCommand,
  serializeAws_queryRestoreDBClusterFromSnapshotCommand,
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

export interface RestoreDBClusterFromSnapshotCommandInput extends RestoreDBClusterFromSnapshotMessage {}
export interface RestoreDBClusterFromSnapshotCommandOutput
  extends RestoreDBClusterFromSnapshotResult,
    __MetadataBearer {}

/**
 * <p>Creates a new DB cluster from a DB snapshot or DB cluster snapshot.</p>
 *          <p>If a DB snapshot is specified, the target DB cluster is created from the source DB
 *       snapshot with a default configuration and default security group.</p>
 *          <p>If a DB cluster snapshot is specified, the target DB cluster is created from the source DB
 *       cluster restore point with the same configuration as the original source DB cluster, except
 *       that the new DB cluster is created with the default security group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, RestoreDBClusterFromSnapshotCommand } from "../../client-neptune/mod.ts";
 * // const { NeptuneClient, RestoreDBClusterFromSnapshotCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new RestoreDBClusterFromSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RestoreDBClusterFromSnapshotCommandInput} for command's `input` shape.
 * @see {@link RestoreDBClusterFromSnapshotCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class RestoreDBClusterFromSnapshotCommand extends $Command<
  RestoreDBClusterFromSnapshotCommandInput,
  RestoreDBClusterFromSnapshotCommandOutput,
  NeptuneClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RestoreDBClusterFromSnapshotCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NeptuneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RestoreDBClusterFromSnapshotCommandInput, RestoreDBClusterFromSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NeptuneClient";
    const commandName = "RestoreDBClusterFromSnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RestoreDBClusterFromSnapshotMessage.filterSensitiveLog,
      outputFilterSensitiveLog: RestoreDBClusterFromSnapshotResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RestoreDBClusterFromSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryRestoreDBClusterFromSnapshotCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RestoreDBClusterFromSnapshotCommandOutput> {
    return deserializeAws_queryRestoreDBClusterFromSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
