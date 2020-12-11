import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient.ts";
import { CreateLicenseConfigurationRequest, CreateLicenseConfigurationResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1CreateLicenseConfigurationCommand,
  serializeAws_json1_1CreateLicenseConfigurationCommand,
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

export type CreateLicenseConfigurationCommandInput = CreateLicenseConfigurationRequest;
export type CreateLicenseConfigurationCommandOutput = CreateLicenseConfigurationResponse & __MetadataBearer;

/**
 * <p>Creates a license configuration.</p>
 *          <p>A license configuration is an abstraction of a customer license agreement that can be
 *          consumed and enforced by License Manager. Components include specifications for the license
 *          type (licensing by instance, socket, CPU, or vCPU), allowed tenancy (shared tenancy,
 *          Dedicated Instance, Dedicated Host, or all of these), license affinity  to host (how long a
 *          license must be associated with a host), and the number of licenses purchased and used.</p>
 */
export class CreateLicenseConfigurationCommand extends $Command<
  CreateLicenseConfigurationCommandInput,
  CreateLicenseConfigurationCommandOutput,
  LicenseManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateLicenseConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LicenseManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateLicenseConfigurationCommandInput, CreateLicenseConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LicenseManagerClient";
    const commandName = "CreateLicenseConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateLicenseConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateLicenseConfigurationResponse.filterSensitiveLog,
    };

    if (typeof logger.info === "function") {
      logger.info({
        clientName,
        commandName,
      });
    }

    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateLicenseConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateLicenseConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateLicenseConfigurationCommandOutput> {
    return deserializeAws_json1_1CreateLicenseConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
