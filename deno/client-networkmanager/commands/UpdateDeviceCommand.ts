import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient.ts";
import { UpdateDeviceRequest, UpdateDeviceResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1UpdateDeviceCommand,
  serializeAws_restJson1UpdateDeviceCommand,
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

export interface UpdateDeviceCommandInput extends UpdateDeviceRequest {}
export interface UpdateDeviceCommandOutput extends UpdateDeviceResponse, __MetadataBearer {}

/**
 * <p>Updates the details for an existing device. To remove information for any of the
 *             parameters, specify an empty string.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, UpdateDeviceCommand } from "../../client-networkmanager/mod.ts";
 * // const { NetworkManagerClient, UpdateDeviceCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new UpdateDeviceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDeviceCommandInput} for command's `input` shape.
 * @see {@link UpdateDeviceCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateDeviceCommand extends $Command<
  UpdateDeviceCommandInput,
  UpdateDeviceCommandOutput,
  NetworkManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateDeviceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NetworkManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateDeviceCommandInput, UpdateDeviceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkManagerClient";
    const commandName = "UpdateDeviceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateDeviceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateDeviceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateDeviceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateDeviceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateDeviceCommandOutput> {
    return deserializeAws_restJson1UpdateDeviceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
