import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient.ts";
import { CreateProvisioningArtifactInput, CreateProvisioningArtifactOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1CreateProvisioningArtifactCommand,
  serializeAws_json1_1CreateProvisioningArtifactCommand,
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

export interface CreateProvisioningArtifactCommandInput extends CreateProvisioningArtifactInput {}
export interface CreateProvisioningArtifactCommandOutput extends CreateProvisioningArtifactOutput, __MetadataBearer {}

/**
 * <p>Creates a provisioning artifact (also known as a version) for the specified product.</p>
 *          <p>You cannot create a provisioning artifact for a product that was shared with you.</p>
 *
 *          <p>The user or role that performs this operation must have the <code>cloudformation:GetTemplate</code>
 *          IAM policy permission. This policy permission is required when using the
 *          <code>ImportFromPhysicalId</code> template source in the information data section.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, CreateProvisioningArtifactCommand } from "../../client-service-catalog/mod.ts";
 * // const { ServiceCatalogClient, CreateProvisioningArtifactCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new CreateProvisioningArtifactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateProvisioningArtifactCommandInput} for command's `input` shape.
 * @see {@link CreateProvisioningArtifactCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateProvisioningArtifactCommand extends $Command<
  CreateProvisioningArtifactCommandInput,
  CreateProvisioningArtifactCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateProvisioningArtifactCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceCatalogClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateProvisioningArtifactCommandInput, CreateProvisioningArtifactCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "CreateProvisioningArtifactCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateProvisioningArtifactInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateProvisioningArtifactOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateProvisioningArtifactCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateProvisioningArtifactCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateProvisioningArtifactCommandOutput> {
    return deserializeAws_json1_1CreateProvisioningArtifactCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
