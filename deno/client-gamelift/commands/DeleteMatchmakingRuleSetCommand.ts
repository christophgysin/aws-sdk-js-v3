import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient.ts";
import { DeleteMatchmakingRuleSetInput, DeleteMatchmakingRuleSetOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DeleteMatchmakingRuleSetCommand,
  serializeAws_json1_1DeleteMatchmakingRuleSetCommand,
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

export interface DeleteMatchmakingRuleSetCommandInput extends DeleteMatchmakingRuleSetInput {}
export interface DeleteMatchmakingRuleSetCommandOutput extends DeleteMatchmakingRuleSetOutput, __MetadataBearer {}

/**
 * <p>Deletes an existing matchmaking rule set. To delete the rule set, provide the rule
 *             set name. Rule sets cannot be deleted if they are currently being used by a matchmaking
 *             configuration. </p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-rulesets.html">Build a rule
 *                         set</a>
 *                </p>
 *             </li>
 *          </ul>
 *         <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a>CreateMatchmakingConfiguration</a> |
 *                     <a>DescribeMatchmakingConfigurations</a> |
 *                     <a>UpdateMatchmakingConfiguration</a> |
 *                     <a>DeleteMatchmakingConfiguration</a> |
 *                     <a>CreateMatchmakingRuleSet</a> |
 *                     <a>DescribeMatchmakingRuleSets</a> |
 *                     <a>ValidateMatchmakingRuleSet</a> |
 *                     <a>DeleteMatchmakingRuleSet</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DeleteMatchmakingRuleSetCommand } from "../../client-gamelift/mod.ts";
 * // const { GameLiftClient, DeleteMatchmakingRuleSetCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DeleteMatchmakingRuleSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteMatchmakingRuleSetCommandInput} for command's `input` shape.
 * @see {@link DeleteMatchmakingRuleSetCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteMatchmakingRuleSetCommand extends $Command<
  DeleteMatchmakingRuleSetCommandInput,
  DeleteMatchmakingRuleSetCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteMatchmakingRuleSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GameLiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteMatchmakingRuleSetCommandInput, DeleteMatchmakingRuleSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "DeleteMatchmakingRuleSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteMatchmakingRuleSetInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteMatchmakingRuleSetOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteMatchmakingRuleSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteMatchmakingRuleSetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteMatchmakingRuleSetCommandOutput> {
    return deserializeAws_json1_1DeleteMatchmakingRuleSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
