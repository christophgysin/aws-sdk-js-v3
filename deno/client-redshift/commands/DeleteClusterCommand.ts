import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient.ts";
import { DeleteClusterMessage, DeleteClusterResult } from "../models/models_0.ts";
import {
  deserializeAws_queryDeleteClusterCommand,
  serializeAws_queryDeleteClusterCommand,
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

export interface DeleteClusterCommandInput extends DeleteClusterMessage {}
export interface DeleteClusterCommandOutput extends DeleteClusterResult, __MetadataBearer {}

/**
 * <p>Deletes a previously provisioned cluster without its final snapshot being created. A successful response from the web
 *             service indicates that the request was received correctly. Use <a>DescribeClusters</a> to monitor the status of the deletion. The delete
 *             operation cannot be canceled or reverted once submitted.
 * For more information about managing clusters, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 *         <p>If you want to shut down the cluster and retain it for future use, set
 *                 <i>SkipFinalClusterSnapshot</i> to <code>false</code> and specify a
 *             name for <i>FinalClusterSnapshotIdentifier</i>. You can later restore this
 *             snapshot to resume using the cluster. If a final cluster snapshot is requested, the
 *             status of the cluster will be "final-snapshot" while the snapshot is being taken, then
 *             it's "deleting" once Amazon Redshift begins deleting the cluster. </p>
 *         <p>
 * For more information about managing clusters, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DeleteClusterCommand } from "../../client-redshift/mod.ts";
 * // const { RedshiftClient, DeleteClusterCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DeleteClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteClusterCommandInput} for command's `input` shape.
 * @see {@link DeleteClusterCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteClusterCommand extends $Command<
  DeleteClusterCommandInput,
  DeleteClusterCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteClusterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteClusterCommandInput, DeleteClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DeleteClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteClusterMessage.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteClusterResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteClusterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteClusterCommandOutput> {
    return deserializeAws_queryDeleteClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
