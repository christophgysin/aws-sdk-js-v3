import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient.ts";
import { UpdateMatchmakingConfigurationInput, UpdateMatchmakingConfigurationOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1UpdateMatchmakingConfigurationCommand,
  serializeAws_json1_1UpdateMatchmakingConfigurationCommand,
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

export interface UpdateMatchmakingConfigurationCommandInput extends UpdateMatchmakingConfigurationInput {}
export interface UpdateMatchmakingConfigurationCommandOutput
  extends UpdateMatchmakingConfigurationOutput,
    __MetadataBearer {}

/**
 * <p>Updates settings for a FlexMatch matchmaking configuration. These changes affect all matches and game sessions
 *             that are created after the update. To update settings,
 *             specify the configuration name to be updated and provide the new settings. </p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-configuration.html">
 *             Design a FlexMatch matchmaker</a>
 *          </p>
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
 * import { GameLiftClient, UpdateMatchmakingConfigurationCommand } from "../../client-gamelift/mod.ts";
 * // const { GameLiftClient, UpdateMatchmakingConfigurationCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new UpdateMatchmakingConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateMatchmakingConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateMatchmakingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateMatchmakingConfigurationCommand extends $Command<
  UpdateMatchmakingConfigurationCommandInput,
  UpdateMatchmakingConfigurationCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateMatchmakingConfigurationCommandInput) {
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
  ): Handler<UpdateMatchmakingConfigurationCommandInput, UpdateMatchmakingConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "UpdateMatchmakingConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateMatchmakingConfigurationInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateMatchmakingConfigurationOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateMatchmakingConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateMatchmakingConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateMatchmakingConfigurationCommandOutput> {
    return deserializeAws_json1_1UpdateMatchmakingConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
