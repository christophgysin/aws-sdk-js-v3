import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient.ts";
import { UpdateDeviceInstanceRequest, UpdateDeviceInstanceResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1UpdateDeviceInstanceCommand,
  serializeAws_json1_1UpdateDeviceInstanceCommand,
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

export type UpdateDeviceInstanceCommandInput = UpdateDeviceInstanceRequest;
export type UpdateDeviceInstanceCommandOutput = UpdateDeviceInstanceResult & __MetadataBearer;

/**
 * <p>Updates information about a private device instance.</p>
 */
export class UpdateDeviceInstanceCommand extends $Command<
  UpdateDeviceInstanceCommandInput,
  UpdateDeviceInstanceCommandOutput,
  DeviceFarmClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateDeviceInstanceCommandInput) {
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
  ): Handler<UpdateDeviceInstanceCommandInput, UpdateDeviceInstanceCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "UpdateDeviceInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateDeviceInstanceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateDeviceInstanceResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateDeviceInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateDeviceInstanceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateDeviceInstanceCommandOutput> {
    return deserializeAws_json1_1UpdateDeviceInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
