import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient.ts";
import { ExtendLicenseConsumptionRequest, ExtendLicenseConsumptionResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ExtendLicenseConsumptionCommand,
  serializeAws_json1_1ExtendLicenseConsumptionCommand,
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

export interface ExtendLicenseConsumptionCommandInput extends ExtendLicenseConsumptionRequest {}
export interface ExtendLicenseConsumptionCommandOutput extends ExtendLicenseConsumptionResponse, __MetadataBearer {}

/**
 * <p>Extends the expiration date for license consumption.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, ExtendLicenseConsumptionCommand } from "../../client-license-manager/mod.ts";
 * // const { LicenseManagerClient, ExtendLicenseConsumptionCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new ExtendLicenseConsumptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExtendLicenseConsumptionCommandInput} for command's `input` shape.
 * @see {@link ExtendLicenseConsumptionCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ExtendLicenseConsumptionCommand extends $Command<
  ExtendLicenseConsumptionCommandInput,
  ExtendLicenseConsumptionCommandOutput,
  LicenseManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ExtendLicenseConsumptionCommandInput) {
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
  ): Handler<ExtendLicenseConsumptionCommandInput, ExtendLicenseConsumptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LicenseManagerClient";
    const commandName = "ExtendLicenseConsumptionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ExtendLicenseConsumptionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ExtendLicenseConsumptionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ExtendLicenseConsumptionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ExtendLicenseConsumptionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ExtendLicenseConsumptionCommandOutput> {
    return deserializeAws_json1_1ExtendLicenseConsumptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
