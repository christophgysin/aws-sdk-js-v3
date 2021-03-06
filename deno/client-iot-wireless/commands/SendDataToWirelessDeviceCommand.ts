import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient.ts";
import { SendDataToWirelessDeviceRequest, SendDataToWirelessDeviceResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1SendDataToWirelessDeviceCommand,
  serializeAws_restJson1SendDataToWirelessDeviceCommand,
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

export interface SendDataToWirelessDeviceCommandInput extends SendDataToWirelessDeviceRequest {}
export interface SendDataToWirelessDeviceCommandOutput extends SendDataToWirelessDeviceResponse, __MetadataBearer {}

/**
 * <p>Sends a decrypted application data frame to a device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, SendDataToWirelessDeviceCommand } from "../../client-iot-wireless/mod.ts";
 * // const { IoTWirelessClient, SendDataToWirelessDeviceCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new SendDataToWirelessDeviceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendDataToWirelessDeviceCommandInput} for command's `input` shape.
 * @see {@link SendDataToWirelessDeviceCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class SendDataToWirelessDeviceCommand extends $Command<
  SendDataToWirelessDeviceCommandInput,
  SendDataToWirelessDeviceCommandOutput,
  IoTWirelessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SendDataToWirelessDeviceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTWirelessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SendDataToWirelessDeviceCommandInput, SendDataToWirelessDeviceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "SendDataToWirelessDeviceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SendDataToWirelessDeviceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SendDataToWirelessDeviceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SendDataToWirelessDeviceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1SendDataToWirelessDeviceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SendDataToWirelessDeviceCommandOutput> {
    return deserializeAws_restJson1SendDataToWirelessDeviceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
