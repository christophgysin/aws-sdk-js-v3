import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient.ts";
import { StopRemoteAccessSessionRequest, StopRemoteAccessSessionResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1StopRemoteAccessSessionCommand,
  serializeAws_json1_1StopRemoteAccessSessionCommand,
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

export interface StopRemoteAccessSessionCommandInput extends StopRemoteAccessSessionRequest {}
export interface StopRemoteAccessSessionCommandOutput extends StopRemoteAccessSessionResult, __MetadataBearer {}

/**
 * <p>Ends a specified remote access session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, StopRemoteAccessSessionCommand } from "../../client-device-farm/mod.ts";
 * // const { DeviceFarmClient, StopRemoteAccessSessionCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new StopRemoteAccessSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopRemoteAccessSessionCommandInput} for command's `input` shape.
 * @see {@link StopRemoteAccessSessionCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class StopRemoteAccessSessionCommand extends $Command<
  StopRemoteAccessSessionCommandInput,
  StopRemoteAccessSessionCommandOutput,
  DeviceFarmClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StopRemoteAccessSessionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DeviceFarmClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopRemoteAccessSessionCommandInput, StopRemoteAccessSessionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "StopRemoteAccessSessionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopRemoteAccessSessionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StopRemoteAccessSessionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopRemoteAccessSessionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StopRemoteAccessSessionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopRemoteAccessSessionCommandOutput> {
    return deserializeAws_json1_1StopRemoteAccessSessionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
