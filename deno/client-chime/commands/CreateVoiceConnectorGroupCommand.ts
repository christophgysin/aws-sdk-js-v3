import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient.ts";
import { CreateVoiceConnectorGroupRequest, CreateVoiceConnectorGroupResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1CreateVoiceConnectorGroupCommand,
  serializeAws_restJson1CreateVoiceConnectorGroupCommand,
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

export interface CreateVoiceConnectorGroupCommandInput extends CreateVoiceConnectorGroupRequest {}
export interface CreateVoiceConnectorGroupCommandOutput extends CreateVoiceConnectorGroupResponse, __MetadataBearer {}

/**
 * <p>Creates an Amazon Chime Voice Connector group under the administrator's AWS account. You can
 *             associate Amazon Chime Voice Connectors with the Amazon Chime Voice Connector group by
 *             including <code>VoiceConnectorItems</code> in the request.</p>
 *          <p>You can include Amazon Chime Voice Connectors from different AWS Regions in your group. This
 *             creates a fault tolerant mechanism for fallback in case of availability events.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, CreateVoiceConnectorGroupCommand } from "../../client-chime/mod.ts";
 * // const { ChimeClient, CreateVoiceConnectorGroupCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new CreateVoiceConnectorGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateVoiceConnectorGroupCommandInput} for command's `input` shape.
 * @see {@link CreateVoiceConnectorGroupCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateVoiceConnectorGroupCommand extends $Command<
  CreateVoiceConnectorGroupCommandInput,
  CreateVoiceConnectorGroupCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateVoiceConnectorGroupCommandInput) {
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
  ): Handler<CreateVoiceConnectorGroupCommandInput, CreateVoiceConnectorGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "CreateVoiceConnectorGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateVoiceConnectorGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateVoiceConnectorGroupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateVoiceConnectorGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateVoiceConnectorGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateVoiceConnectorGroupCommandOutput> {
    return deserializeAws_restJson1CreateVoiceConnectorGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
