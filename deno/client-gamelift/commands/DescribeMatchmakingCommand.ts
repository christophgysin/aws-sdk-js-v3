import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient.ts";
import { DescribeMatchmakingInput, DescribeMatchmakingOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeMatchmakingCommand,
  serializeAws_json1_1DescribeMatchmakingCommand,
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

export interface DescribeMatchmakingCommandInput extends DescribeMatchmakingInput {}
export interface DescribeMatchmakingCommandOutput extends DescribeMatchmakingOutput, __MetadataBearer {}

/**
 * <p>Retrieves one or more matchmaking tickets. Use this operation to retrieve ticket
 *             information, including--after a successful match is made--connection information for the
 *             resulting new game session. </p>
 *         <p>To request matchmaking tickets, provide a list of up to 10 ticket IDs. If the
 *             request is successful, a ticket object is returned for each requested ID that currently
 *             exists.</p>
 *         <p>This operation is not designed to be continually called to track matchmaking ticket
 *             status. This practice can cause you to exceed your API limit, which results in errors.
 *             Instead, as a best practice, set up an Amazon Simple Notification Service (SNS) to receive notifications, and provide
 *             the topic ARN in the matchmaking configuration. Continuously poling ticket status with
 *                 <a>DescribeMatchmaking</a> should only be used for games in development
 *             with low matchmaking usage.</p>
 *         <p></p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-client.html">
 *             Add FlexMatch to a game client</a>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-notification.html">
 *             Set Up FlexMatch event notification</a>
 *          </p>
 *         <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a>StartMatchmaking</a> |
 *                     <a>DescribeMatchmaking</a> |
 *                     <a>StopMatchmaking</a> |
 *                     <a>AcceptMatch</a> |
 *                     <a>StartMatchBackfill</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DescribeMatchmakingCommand } from "../../client-gamelift/mod.ts";
 * // const { GameLiftClient, DescribeMatchmakingCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DescribeMatchmakingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeMatchmakingCommandInput} for command's `input` shape.
 * @see {@link DescribeMatchmakingCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeMatchmakingCommand extends $Command<
  DescribeMatchmakingCommandInput,
  DescribeMatchmakingCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeMatchmakingCommandInput) {
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
  ): Handler<DescribeMatchmakingCommandInput, DescribeMatchmakingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "DescribeMatchmakingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeMatchmakingInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeMatchmakingOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeMatchmakingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeMatchmakingCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeMatchmakingCommandOutput> {
    return deserializeAws_json1_1DescribeMatchmakingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
