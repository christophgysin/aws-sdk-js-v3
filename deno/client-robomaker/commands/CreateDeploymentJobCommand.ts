import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient.ts";
import { CreateDeploymentJobRequest, CreateDeploymentJobResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1CreateDeploymentJobCommand,
  serializeAws_restJson1CreateDeploymentJobCommand,
} from "../protocols/Aws_restJson1.ts";
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

export interface CreateDeploymentJobCommandInput extends CreateDeploymentJobRequest {}
export interface CreateDeploymentJobCommandOutput extends CreateDeploymentJobResponse, __MetadataBearer {}

/**
 * <p>Deploys a specific version of a robot application to robots in a fleet.</p>
 *          <p>The robot application must have a numbered <code>applicationVersion</code> for
 *          consistency reasons. To create a new version, use
 *             <code>CreateRobotApplicationVersion</code> or see <a href="https://docs.aws.amazon.com/robomaker/latest/dg/create-robot-application-version.html">Creating a Robot Application Version</a>. </p>
 *          <note>
 *             <p>After 90 days, deployment jobs expire and will be deleted. They will no longer be
 *             accessible. </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, CreateDeploymentJobCommand } from "../../client-robomaker/mod.ts";
 * // const { RoboMakerClient, CreateDeploymentJobCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new CreateDeploymentJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDeploymentJobCommandInput} for command's `input` shape.
 * @see {@link CreateDeploymentJobCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateDeploymentJobCommand extends $Command<
  CreateDeploymentJobCommandInput,
  CreateDeploymentJobCommandOutput,
  RoboMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateDeploymentJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RoboMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDeploymentJobCommandInput, CreateDeploymentJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RoboMakerClient";
    const commandName = "CreateDeploymentJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDeploymentJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateDeploymentJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDeploymentJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateDeploymentJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDeploymentJobCommandOutput> {
    return deserializeAws_restJson1CreateDeploymentJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
