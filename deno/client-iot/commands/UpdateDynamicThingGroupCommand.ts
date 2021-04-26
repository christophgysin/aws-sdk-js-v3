import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient.ts";
import { UpdateDynamicThingGroupRequest, UpdateDynamicThingGroupResponse } from "../models/models_2.ts";
import {
  deserializeAws_restJson1UpdateDynamicThingGroupCommand,
  serializeAws_restJson1UpdateDynamicThingGroupCommand,
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

export interface UpdateDynamicThingGroupCommandInput extends UpdateDynamicThingGroupRequest {}
export interface UpdateDynamicThingGroupCommandOutput extends UpdateDynamicThingGroupResponse, __MetadataBearer {}

/**
 * <p>Updates a dynamic thing group.</p>
 */
export class UpdateDynamicThingGroupCommand extends $Command<
  UpdateDynamicThingGroupCommandInput,
  UpdateDynamicThingGroupCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateDynamicThingGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateDynamicThingGroupCommandInput, UpdateDynamicThingGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "UpdateDynamicThingGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateDynamicThingGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateDynamicThingGroupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateDynamicThingGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateDynamicThingGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateDynamicThingGroupCommandOutput> {
    return deserializeAws_restJson1UpdateDynamicThingGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
