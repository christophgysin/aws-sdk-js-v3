import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient.ts";
import { DeleteMatchmakingConfigurationInput, DeleteMatchmakingConfigurationOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DeleteMatchmakingConfigurationCommand,
  serializeAws_json1_1DeleteMatchmakingConfigurationCommand,
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

export interface DeleteMatchmakingConfigurationCommandInput extends DeleteMatchmakingConfigurationInput {}
export interface DeleteMatchmakingConfigurationCommandOutput
  extends DeleteMatchmakingConfigurationOutput,
    __MetadataBearer {}

/**
 * <p>Permanently removes a FlexMatch matchmaking configuration. To delete, specify the
 *             configuration name. A matchmaking configuration cannot be deleted if it is being used in
 *             any active matchmaking tickets.</p>
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
 * import { GameLiftClient, DeleteMatchmakingConfigurationCommand } from "../../client-gamelift/mod.ts";
 * // const { GameLiftClient, DeleteMatchmakingConfigurationCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DeleteMatchmakingConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteMatchmakingConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteMatchmakingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteMatchmakingConfigurationCommand extends $Command<
  DeleteMatchmakingConfigurationCommandInput,
  DeleteMatchmakingConfigurationCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteMatchmakingConfigurationCommandInput) {
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
  ): Handler<DeleteMatchmakingConfigurationCommandInput, DeleteMatchmakingConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "DeleteMatchmakingConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteMatchmakingConfigurationInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteMatchmakingConfigurationOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteMatchmakingConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteMatchmakingConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteMatchmakingConfigurationCommandOutput> {
    return deserializeAws_json1_1DeleteMatchmakingConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
