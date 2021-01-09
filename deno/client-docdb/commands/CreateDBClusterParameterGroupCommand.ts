import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient.ts";
import { CreateDBClusterParameterGroupMessage, CreateDBClusterParameterGroupResult } from "../models/models_0.ts";
import {
  deserializeAws_queryCreateDBClusterParameterGroupCommand,
  serializeAws_queryCreateDBClusterParameterGroupCommand,
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

export type CreateDBClusterParameterGroupCommandInput = CreateDBClusterParameterGroupMessage;
export type CreateDBClusterParameterGroupCommandOutput = CreateDBClusterParameterGroupResult & __MetadataBearer;

/**
 * <p>Creates a new cluster parameter group.</p>
 *         <p>Parameters in a cluster parameter group apply to all of the
 *             instances in a cluster.</p>
 *         <p>A cluster parameter group is initially created with the default
 *             parameters for the database engine used by instances in the cluster.
 *             In Amazon DocumentDB, you cannot make modifications directly to the
 *             <code>default.docdb3.6</code> cluster parameter group. If your
 *             Amazon DocumentDB cluster is using the default cluster parameter group and you
 *             want to modify a value in it, you must first <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/cluster_parameter_group-create.html">
 *                 create a new parameter group</a>
 *             or <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/cluster_parameter_group-copy.html">
 *                 copy an existing parameter group</a>,
 *             modify it, and then apply the modified parameter group to your
 *             cluster. For the new cluster parameter group and associated settings
 *             to take effect, you must then reboot the instances in the cluster
 *             without failover. For more information,
 *             see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/cluster_parameter_group-modify.html">
 *                 Modifying Amazon DocumentDB Cluster Parameter Groups</a>.
 *             </p>
 */
export class CreateDBClusterParameterGroupCommand extends $Command<
  CreateDBClusterParameterGroupCommandInput,
  CreateDBClusterParameterGroupCommandOutput,
  DocDBClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateDBClusterParameterGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DocDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDBClusterParameterGroupCommandInput, CreateDBClusterParameterGroupCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DocDBClient";
    const commandName = "CreateDBClusterParameterGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDBClusterParameterGroupMessage.filterSensitiveLog,
      outputFilterSensitiveLog: CreateDBClusterParameterGroupResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDBClusterParameterGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateDBClusterParameterGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateDBClusterParameterGroupCommandOutput> {
    return deserializeAws_queryCreateDBClusterParameterGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
