import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient.ts";
import { DisableAWSOrganizationsAccessInput, DisableAWSOrganizationsAccessOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DisableAWSOrganizationsAccessCommand,
  serializeAws_json1_1DisableAWSOrganizationsAccessCommand,
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

export type DisableAWSOrganizationsAccessCommandInput = DisableAWSOrganizationsAccessInput;
export type DisableAWSOrganizationsAccessCommandOutput = DisableAWSOrganizationsAccessOutput & __MetadataBearer;

/**
 * <p>Disable portfolio sharing through AWS Organizations feature. This feature will not
 *          delete your current shares but it will prevent you from creating new shares throughout your
 *          organization. Current shares will not be in sync with your organization structure if it
 *          changes after calling this API. This API can only be called by the management  account in
 *          the organization.</p>
 *          <p>This API can't be invoked if there are active delegated administrators in the organization.</p>
 *          <p>Note that a delegated administrator is not authorized to invoke <code>DisableAWSOrganizationsAccess</code>.</p>
 */
export class DisableAWSOrganizationsAccessCommand extends $Command<
  DisableAWSOrganizationsAccessCommandInput,
  DisableAWSOrganizationsAccessCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisableAWSOrganizationsAccessCommandInput) {
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
  ): Handler<DisableAWSOrganizationsAccessCommandInput, DisableAWSOrganizationsAccessCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "DisableAWSOrganizationsAccessCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisableAWSOrganizationsAccessInput.filterSensitiveLog,
      outputFilterSensitiveLog: DisableAWSOrganizationsAccessOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisableAWSOrganizationsAccessCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DisableAWSOrganizationsAccessCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisableAWSOrganizationsAccessCommandOutput> {
    return deserializeAws_json1_1DisableAWSOrganizationsAccessCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
