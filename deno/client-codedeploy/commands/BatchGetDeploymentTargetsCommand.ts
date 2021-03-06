import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient.ts";
import { BatchGetDeploymentTargetsInput, BatchGetDeploymentTargetsOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1BatchGetDeploymentTargetsCommand,
  serializeAws_json1_1BatchGetDeploymentTargetsCommand,
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

export interface BatchGetDeploymentTargetsCommandInput extends BatchGetDeploymentTargetsInput {}
export interface BatchGetDeploymentTargetsCommandOutput extends BatchGetDeploymentTargetsOutput, __MetadataBearer {}

/**
 * <p> Returns an array of one or more targets associated with a deployment. This method
 *             works with all compute types and should be used instead of the deprecated
 *                 <code>BatchGetDeploymentInstances</code>. The maximum number of targets that can be
 *             returned is 25.</p>
 *         <p> The type of targets returned depends on the deployment's compute platform or
 *             deployment method: </p>
 *         <ul>
 *             <li>
 *                 <p>
 *                     <b>EC2/On-premises</b>: Information about EC2 instance
 *                     targets. </p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <b>AWS Lambda</b>: Information about Lambda functions
 *                     targets. </p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <b>Amazon ECS</b>: Information about Amazon ECS
 *                     service targets. </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <b>CloudFormation</b>: Information about targets of
 *                     blue/green deployments initiated by a CloudFormation stack update.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, BatchGetDeploymentTargetsCommand } from "../../client-codedeploy/mod.ts";
 * // const { CodeDeployClient, BatchGetDeploymentTargetsCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const command = new BatchGetDeploymentTargetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetDeploymentTargetsCommandInput} for command's `input` shape.
 * @see {@link BatchGetDeploymentTargetsCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class BatchGetDeploymentTargetsCommand extends $Command<
  BatchGetDeploymentTargetsCommandInput,
  BatchGetDeploymentTargetsCommandOutput,
  CodeDeployClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchGetDeploymentTargetsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeDeployClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchGetDeploymentTargetsCommandInput, BatchGetDeploymentTargetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeDeployClient";
    const commandName = "BatchGetDeploymentTargetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchGetDeploymentTargetsInput.filterSensitiveLog,
      outputFilterSensitiveLog: BatchGetDeploymentTargetsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchGetDeploymentTargetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1BatchGetDeploymentTargetsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchGetDeploymentTargetsCommandOutput> {
    return deserializeAws_json1_1BatchGetDeploymentTargetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
