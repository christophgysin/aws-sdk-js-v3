import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient.ts";
import { AssociateSkillGroupWithRoomRequest, AssociateSkillGroupWithRoomResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1AssociateSkillGroupWithRoomCommand,
  serializeAws_json1_1AssociateSkillGroupWithRoomCommand,
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

export interface AssociateSkillGroupWithRoomCommandInput extends AssociateSkillGroupWithRoomRequest {}
export interface AssociateSkillGroupWithRoomCommandOutput
  extends AssociateSkillGroupWithRoomResponse,
    __MetadataBearer {}

/**
 * <p>Associates a skill group with a given room. This enables all skills in the associated
 *          skill group on all devices in the room.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, AssociateSkillGroupWithRoomCommand } from "../../client-alexa-for-business/mod.ts";
 * // const { AlexaForBusinessClient, AssociateSkillGroupWithRoomCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new AssociateSkillGroupWithRoomCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateSkillGroupWithRoomCommandInput} for command's `input` shape.
 * @see {@link AssociateSkillGroupWithRoomCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class AssociateSkillGroupWithRoomCommand extends $Command<
  AssociateSkillGroupWithRoomCommandInput,
  AssociateSkillGroupWithRoomCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateSkillGroupWithRoomCommandInput) {
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
  ): Handler<AssociateSkillGroupWithRoomCommandInput, AssociateSkillGroupWithRoomCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "AssociateSkillGroupWithRoomCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateSkillGroupWithRoomRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateSkillGroupWithRoomResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateSkillGroupWithRoomCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AssociateSkillGroupWithRoomCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateSkillGroupWithRoomCommandOutput> {
    return deserializeAws_json1_1AssociateSkillGroupWithRoomCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
