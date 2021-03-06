import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient.ts";
import { CreateDeploymentRequest, Deployment } from "../models/models_0.ts";
import {
  deserializeAws_restJson1CreateDeploymentCommand,
  serializeAws_restJson1CreateDeploymentCommand,
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

export interface CreateDeploymentCommandInput extends CreateDeploymentRequest {}
export interface CreateDeploymentCommandOutput extends Deployment, __MetadataBearer {}

/**
 * <p>Creates a <a>Deployment</a> resource, which makes a specified <a>RestApi</a> callable over the internet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, CreateDeploymentCommand } from "../../client-api-gateway/mod.ts";
 * // const { APIGatewayClient, CreateDeploymentCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new CreateDeploymentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDeploymentCommandInput} for command's `input` shape.
 * @see {@link CreateDeploymentCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateDeploymentCommand extends $Command<
  CreateDeploymentCommandInput,
  CreateDeploymentCommandOutput,
  APIGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateDeploymentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDeploymentCommandInput, CreateDeploymentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "APIGatewayClient";
    const commandName = "CreateDeploymentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDeploymentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: Deployment.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDeploymentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateDeploymentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDeploymentCommandOutput> {
    return deserializeAws_restJson1CreateDeploymentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
