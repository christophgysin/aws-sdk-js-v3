import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient.ts";
import { AssociateMemberToGroupRequest, AssociateMemberToGroupResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1AssociateMemberToGroupCommand,
  serializeAws_json1_1AssociateMemberToGroupCommand,
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

export interface AssociateMemberToGroupCommandInput extends AssociateMemberToGroupRequest {}
export interface AssociateMemberToGroupCommandOutput extends AssociateMemberToGroupResponse, __MetadataBearer {}

/**
 * <p>Adds a member (user or group) to the group's set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, AssociateMemberToGroupCommand } from "../../client-workmail/mod.ts";
 * // const { WorkMailClient, AssociateMemberToGroupCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new AssociateMemberToGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateMemberToGroupCommandInput} for command's `input` shape.
 * @see {@link AssociateMemberToGroupCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class AssociateMemberToGroupCommand extends $Command<
  AssociateMemberToGroupCommandInput,
  AssociateMemberToGroupCommandOutput,
  WorkMailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateMemberToGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkMailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateMemberToGroupCommandInput, AssociateMemberToGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkMailClient";
    const commandName = "AssociateMemberToGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateMemberToGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateMemberToGroupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateMemberToGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AssociateMemberToGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateMemberToGroupCommandOutput> {
    return deserializeAws_json1_1AssociateMemberToGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
