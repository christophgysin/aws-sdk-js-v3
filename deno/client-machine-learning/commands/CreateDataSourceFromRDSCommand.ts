import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient.ts";
import { CreateDataSourceFromRDSInput, CreateDataSourceFromRDSOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1CreateDataSourceFromRDSCommand,
  serializeAws_json1_1CreateDataSourceFromRDSCommand,
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

export interface CreateDataSourceFromRDSCommandInput extends CreateDataSourceFromRDSInput {}
export interface CreateDataSourceFromRDSCommandOutput extends CreateDataSourceFromRDSOutput, __MetadataBearer {}

/**
 * <p>Creates a <code>DataSource</code> object from an <a href="http://aws.amazon.com/rds/"> Amazon Relational Database Service</a> (Amazon RDS). A <code>DataSource</code> references data that can be used to perform <code>CreateMLModel</code>, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations.</p>
 *
 *         <p>
 *             <code>CreateDataSourceFromRDS</code> is an asynchronous operation. In response to <code>CreateDataSourceFromRDS</code>,
 *          Amazon Machine Learning (Amazon ML) immediately returns and sets the <code>DataSource</code> status to <code>PENDING</code>.
 *             After the <code>DataSource</code> is created and ready for use, Amazon ML sets the <code>Status</code> parameter to <code>COMPLETED</code>.
 *             <code>DataSource</code> in the <code>COMPLETED</code> or <code>PENDING</code> state can
 *           be used only to perform <code>>CreateMLModel</code>>, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations.
 *         </p>
 *         <p>
 *           If Amazon ML cannot accept the input source, it sets the <code>Status</code> parameter to <code>FAILED</code> and includes an error message in the <code>Message</code> attribute of the <code>GetDataSource</code> operation response.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, CreateDataSourceFromRDSCommand } from "../../client-machine-learning/mod.ts";
 * // const { MachineLearningClient, CreateDataSourceFromRDSCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * const client = new MachineLearningClient(config);
 * const command = new CreateDataSourceFromRDSCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDataSourceFromRDSCommandInput} for command's `input` shape.
 * @see {@link CreateDataSourceFromRDSCommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateDataSourceFromRDSCommand extends $Command<
  CreateDataSourceFromRDSCommandInput,
  CreateDataSourceFromRDSCommandOutput,
  MachineLearningClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateDataSourceFromRDSCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MachineLearningClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDataSourceFromRDSCommandInput, CreateDataSourceFromRDSCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MachineLearningClient";
    const commandName = "CreateDataSourceFromRDSCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDataSourceFromRDSInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateDataSourceFromRDSOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDataSourceFromRDSCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateDataSourceFromRDSCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDataSourceFromRDSCommandOutput> {
    return deserializeAws_json1_1CreateDataSourceFromRDSCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
