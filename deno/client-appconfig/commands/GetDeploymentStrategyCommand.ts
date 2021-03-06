import { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient.ts";
import { DeploymentStrategy, GetDeploymentStrategyRequest } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetDeploymentStrategyCommand,
  serializeAws_restJson1GetDeploymentStrategyCommand,
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

export interface GetDeploymentStrategyCommandInput extends GetDeploymentStrategyRequest {}
export interface GetDeploymentStrategyCommandOutput extends DeploymentStrategy, __MetadataBearer {}

/**
 * <p>Retrieve information about a deployment strategy. A deployment strategy defines
 *          important criteria for rolling out your configuration to the designated targets. A
 *          deployment strategy includes: the overall duration required, a percentage of targets to
 *          receive the deployment during each interval, an algorithm that defines how percentage
 *          grows, and bake time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, GetDeploymentStrategyCommand } from "../../client-appconfig/mod.ts";
 * // const { AppConfigClient, GetDeploymentStrategyCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * const client = new AppConfigClient(config);
 * const command = new GetDeploymentStrategyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDeploymentStrategyCommandInput} for command's `input` shape.
 * @see {@link GetDeploymentStrategyCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetDeploymentStrategyCommand extends $Command<
  GetDeploymentStrategyCommandInput,
  GetDeploymentStrategyCommandOutput,
  AppConfigClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetDeploymentStrategyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppConfigClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDeploymentStrategyCommandInput, GetDeploymentStrategyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppConfigClient";
    const commandName = "GetDeploymentStrategyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDeploymentStrategyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeploymentStrategy.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDeploymentStrategyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetDeploymentStrategyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDeploymentStrategyCommandOutput> {
    return deserializeAws_restJson1GetDeploymentStrategyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
