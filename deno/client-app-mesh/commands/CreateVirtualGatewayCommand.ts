import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient.ts";
import { CreateVirtualGatewayInput, CreateVirtualGatewayOutput } from "../models/models_0.ts";
import {
  deserializeAws_restJson1CreateVirtualGatewayCommand,
  serializeAws_restJson1CreateVirtualGatewayCommand,
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

export interface CreateVirtualGatewayCommandInput extends CreateVirtualGatewayInput {}
export interface CreateVirtualGatewayCommandOutput extends CreateVirtualGatewayOutput, __MetadataBearer {}

/**
 * <p>Creates a virtual gateway.</p>
 *          <p>A virtual gateway allows resources outside your mesh to communicate to resources that
 *          are inside your mesh. The virtual gateway represents an Envoy proxy running in an Amazon ECS
 *          task, in a Kubernetes service, or on an Amazon EC2 instance. Unlike a virtual node, which
 *          represents an Envoy running with an application, a virtual gateway represents Envoy
 *          deployed by itself.</p>
 *          <p>For more information about virtual gateways, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_gateways.html">Virtual gateways</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, CreateVirtualGatewayCommand } from "../../client-app-mesh/mod.ts";
 * // const { AppMeshClient, CreateVirtualGatewayCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new CreateVirtualGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateVirtualGatewayCommandInput} for command's `input` shape.
 * @see {@link CreateVirtualGatewayCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateVirtualGatewayCommand extends $Command<
  CreateVirtualGatewayCommandInput,
  CreateVirtualGatewayCommandOutput,
  AppMeshClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateVirtualGatewayCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppMeshClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateVirtualGatewayCommandInput, CreateVirtualGatewayCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppMeshClient";
    const commandName = "CreateVirtualGatewayCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateVirtualGatewayInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateVirtualGatewayOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateVirtualGatewayCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateVirtualGatewayCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateVirtualGatewayCommandOutput> {
    return deserializeAws_restJson1CreateVirtualGatewayCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
