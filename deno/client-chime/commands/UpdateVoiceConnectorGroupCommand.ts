import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient.ts";
import { UpdateVoiceConnectorGroupRequest, UpdateVoiceConnectorGroupResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1UpdateVoiceConnectorGroupCommand,
  serializeAws_restJson1UpdateVoiceConnectorGroupCommand,
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

export interface UpdateVoiceConnectorGroupCommandInput extends UpdateVoiceConnectorGroupRequest {}
export interface UpdateVoiceConnectorGroupCommandOutput extends UpdateVoiceConnectorGroupResponse, __MetadataBearer {}

/**
 * <p>Updates details of the specified Amazon Chime Voice Connector group, such as the name and
 *             Amazon Chime Voice Connector priority ranking.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, UpdateVoiceConnectorGroupCommand } from "../../client-chime/mod.ts";
 * // const { ChimeClient, UpdateVoiceConnectorGroupCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new UpdateVoiceConnectorGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateVoiceConnectorGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateVoiceConnectorGroupCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateVoiceConnectorGroupCommand extends $Command<
  UpdateVoiceConnectorGroupCommandInput,
  UpdateVoiceConnectorGroupCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateVoiceConnectorGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateVoiceConnectorGroupCommandInput, UpdateVoiceConnectorGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "UpdateVoiceConnectorGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateVoiceConnectorGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateVoiceConnectorGroupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateVoiceConnectorGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateVoiceConnectorGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateVoiceConnectorGroupCommandOutput> {
    return deserializeAws_restJson1UpdateVoiceConnectorGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
