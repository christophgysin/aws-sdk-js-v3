import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient.ts";
import { UpdateServiceSettingsRequest, UpdateServiceSettingsResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1UpdateServiceSettingsCommand,
  serializeAws_json1_1UpdateServiceSettingsCommand,
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

export interface UpdateServiceSettingsCommandInput extends UpdateServiceSettingsRequest {}
export interface UpdateServiceSettingsCommandOutput extends UpdateServiceSettingsResponse, __MetadataBearer {}

/**
 * <p>Updates License Manager settings for the current Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, UpdateServiceSettingsCommand } from "../../client-license-manager/mod.ts";
 * // const { LicenseManagerClient, UpdateServiceSettingsCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new UpdateServiceSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateServiceSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdateServiceSettingsCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateServiceSettingsCommand extends $Command<
  UpdateServiceSettingsCommandInput,
  UpdateServiceSettingsCommandOutput,
  LicenseManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateServiceSettingsCommandInput) {
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
  ): Handler<UpdateServiceSettingsCommandInput, UpdateServiceSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LicenseManagerClient";
    const commandName = "UpdateServiceSettingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateServiceSettingsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateServiceSettingsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateServiceSettingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateServiceSettingsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateServiceSettingsCommandOutput> {
    return deserializeAws_json1_1UpdateServiceSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
