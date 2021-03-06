import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient.ts";
import { InstallToRemoteAccessSessionRequest, InstallToRemoteAccessSessionResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1InstallToRemoteAccessSessionCommand,
  serializeAws_json1_1InstallToRemoteAccessSessionCommand,
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

export interface InstallToRemoteAccessSessionCommandInput extends InstallToRemoteAccessSessionRequest {}
export interface InstallToRemoteAccessSessionCommandOutput
  extends InstallToRemoteAccessSessionResult,
    __MetadataBearer {}

/**
 * <p>Installs an application to the device in a remote access session. For Android
 *             applications, the file must be in .apk format. For iOS applications, the file must be in
 *             .ipa format.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, InstallToRemoteAccessSessionCommand } from "../../client-device-farm/mod.ts";
 * // const { DeviceFarmClient, InstallToRemoteAccessSessionCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new InstallToRemoteAccessSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link InstallToRemoteAccessSessionCommandInput} for command's `input` shape.
 * @see {@link InstallToRemoteAccessSessionCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class InstallToRemoteAccessSessionCommand extends $Command<
  InstallToRemoteAccessSessionCommandInput,
  InstallToRemoteAccessSessionCommandOutput,
  DeviceFarmClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: InstallToRemoteAccessSessionCommandInput) {
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
  ): Handler<InstallToRemoteAccessSessionCommandInput, InstallToRemoteAccessSessionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "InstallToRemoteAccessSessionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: InstallToRemoteAccessSessionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: InstallToRemoteAccessSessionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: InstallToRemoteAccessSessionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1InstallToRemoteAccessSessionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<InstallToRemoteAccessSessionCommandOutput> {
    return deserializeAws_json1_1InstallToRemoteAccessSessionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
