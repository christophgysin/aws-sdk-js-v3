import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient.ts";
import { DeleteRoomSkillParameterRequest, DeleteRoomSkillParameterResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DeleteRoomSkillParameterCommand,
  serializeAws_json1_1DeleteRoomSkillParameterCommand,
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

export interface DeleteRoomSkillParameterCommandInput extends DeleteRoomSkillParameterRequest {}
export interface DeleteRoomSkillParameterCommandOutput extends DeleteRoomSkillParameterResponse, __MetadataBearer {}

/**
 * <p>Deletes room skill parameter details by room, skill, and parameter key ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, DeleteRoomSkillParameterCommand } from "../../client-alexa-for-business/mod.ts";
 * // const { AlexaForBusinessClient, DeleteRoomSkillParameterCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new DeleteRoomSkillParameterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRoomSkillParameterCommandInput} for command's `input` shape.
 * @see {@link DeleteRoomSkillParameterCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteRoomSkillParameterCommand extends $Command<
  DeleteRoomSkillParameterCommandInput,
  DeleteRoomSkillParameterCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteRoomSkillParameterCommandInput) {
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
  ): Handler<DeleteRoomSkillParameterCommandInput, DeleteRoomSkillParameterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "DeleteRoomSkillParameterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteRoomSkillParameterRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteRoomSkillParameterResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteRoomSkillParameterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteRoomSkillParameterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteRoomSkillParameterCommandOutput> {
    return deserializeAws_json1_1DeleteRoomSkillParameterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
