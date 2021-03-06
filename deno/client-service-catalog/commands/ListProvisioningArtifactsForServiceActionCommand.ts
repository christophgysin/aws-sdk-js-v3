import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient.ts";
import {
  ListProvisioningArtifactsForServiceActionInput,
  ListProvisioningArtifactsForServiceActionOutput,
} from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListProvisioningArtifactsForServiceActionCommand,
  serializeAws_json1_1ListProvisioningArtifactsForServiceActionCommand,
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

export interface ListProvisioningArtifactsForServiceActionCommandInput
  extends ListProvisioningArtifactsForServiceActionInput {}
export interface ListProvisioningArtifactsForServiceActionCommandOutput
  extends ListProvisioningArtifactsForServiceActionOutput,
    __MetadataBearer {}

/**
 * <p>Lists all provisioning artifacts (also known as versions) for the specified self-service action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListProvisioningArtifactsForServiceActionCommand } from "../../client-service-catalog/mod.ts";
 * // const { ServiceCatalogClient, ListProvisioningArtifactsForServiceActionCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new ListProvisioningArtifactsForServiceActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProvisioningArtifactsForServiceActionCommandInput} for command's `input` shape.
 * @see {@link ListProvisioningArtifactsForServiceActionCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListProvisioningArtifactsForServiceActionCommand extends $Command<
  ListProvisioningArtifactsForServiceActionCommandInput,
  ListProvisioningArtifactsForServiceActionCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListProvisioningArtifactsForServiceActionCommandInput) {
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
  ): Handler<
    ListProvisioningArtifactsForServiceActionCommandInput,
    ListProvisioningArtifactsForServiceActionCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "ListProvisioningArtifactsForServiceActionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListProvisioningArtifactsForServiceActionInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListProvisioningArtifactsForServiceActionOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListProvisioningArtifactsForServiceActionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListProvisioningArtifactsForServiceActionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListProvisioningArtifactsForServiceActionCommandOutput> {
    return deserializeAws_json1_1ListProvisioningArtifactsForServiceActionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
