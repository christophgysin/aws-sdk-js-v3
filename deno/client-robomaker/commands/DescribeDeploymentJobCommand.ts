import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient.ts";
import { DescribeDeploymentJobRequest, DescribeDeploymentJobResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DescribeDeploymentJobCommand,
  serializeAws_restJson1DescribeDeploymentJobCommand,
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

export interface DescribeDeploymentJobCommandInput extends DescribeDeploymentJobRequest {}
export interface DescribeDeploymentJobCommandOutput extends DescribeDeploymentJobResponse, __MetadataBearer {}

/**
 * <p>Describes a deployment job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, DescribeDeploymentJobCommand } from "../../client-robomaker/mod.ts";
 * // const { RoboMakerClient, DescribeDeploymentJobCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new DescribeDeploymentJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDeploymentJobCommandInput} for command's `input` shape.
 * @see {@link DescribeDeploymentJobCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeDeploymentJobCommand extends $Command<
  DescribeDeploymentJobCommandInput,
  DescribeDeploymentJobCommandOutput,
  RoboMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeDeploymentJobCommandInput) {
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
  ): Handler<DescribeDeploymentJobCommandInput, DescribeDeploymentJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RoboMakerClient";
    const commandName = "DescribeDeploymentJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDeploymentJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeDeploymentJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeDeploymentJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeDeploymentJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDeploymentJobCommandOutput> {
    return deserializeAws_restJson1DescribeDeploymentJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
