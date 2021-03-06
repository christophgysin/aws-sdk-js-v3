import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient.ts";
import { UpdateProvisionedProductInput, UpdateProvisionedProductOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1UpdateProvisionedProductCommand,
  serializeAws_json1_1UpdateProvisionedProductCommand,
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

export interface UpdateProvisionedProductCommandInput extends UpdateProvisionedProductInput {}
export interface UpdateProvisionedProductCommandOutput extends UpdateProvisionedProductOutput, __MetadataBearer {}

/**
 * <p>Requests updates to the configuration of the specified provisioned product.</p>
 *          <p>If there are tags associated with the object, they cannot be updated or added.
 *          Depending on the specific updates requested, this operation can update with no
 *          interruption, with some interruption, or replace the provisioned product entirely.</p>
 *          <p>You can check the status of this request using <a>DescribeRecord</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, UpdateProvisionedProductCommand } from "../../client-service-catalog/mod.ts";
 * // const { ServiceCatalogClient, UpdateProvisionedProductCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new UpdateProvisionedProductCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateProvisionedProductCommandInput} for command's `input` shape.
 * @see {@link UpdateProvisionedProductCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateProvisionedProductCommand extends $Command<
  UpdateProvisionedProductCommandInput,
  UpdateProvisionedProductCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateProvisionedProductCommandInput) {
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
  ): Handler<UpdateProvisionedProductCommandInput, UpdateProvisionedProductCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "UpdateProvisionedProductCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateProvisionedProductInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateProvisionedProductOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateProvisionedProductCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateProvisionedProductCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateProvisionedProductCommandOutput> {
    return deserializeAws_json1_1UpdateProvisionedProductCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
