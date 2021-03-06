import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient.ts";
import { DisassociateDeviceFromRoomRequest, DisassociateDeviceFromRoomResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DisassociateDeviceFromRoomCommand,
  serializeAws_json1_1DisassociateDeviceFromRoomCommand,
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

export interface DisassociateDeviceFromRoomCommandInput extends DisassociateDeviceFromRoomRequest {}
export interface DisassociateDeviceFromRoomCommandOutput extends DisassociateDeviceFromRoomResponse, __MetadataBearer {}

/**
 * <p>Disassociates a device from its current room. The device continues to be connected to
 *          the Wi-Fi network and is still registered to the account. The device settings and skills
 *          are removed from the room.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, DisassociateDeviceFromRoomCommand } from "../../client-alexa-for-business/mod.ts";
 * // const { AlexaForBusinessClient, DisassociateDeviceFromRoomCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new DisassociateDeviceFromRoomCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateDeviceFromRoomCommandInput} for command's `input` shape.
 * @see {@link DisassociateDeviceFromRoomCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DisassociateDeviceFromRoomCommand extends $Command<
  DisassociateDeviceFromRoomCommandInput,
  DisassociateDeviceFromRoomCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateDeviceFromRoomCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateDeviceFromRoomCommandInput, DisassociateDeviceFromRoomCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "DisassociateDeviceFromRoomCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateDeviceFromRoomRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateDeviceFromRoomResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisassociateDeviceFromRoomCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DisassociateDeviceFromRoomCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateDeviceFromRoomCommandOutput> {
    return deserializeAws_json1_1DisassociateDeviceFromRoomCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
