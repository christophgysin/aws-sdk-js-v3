import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient.ts";
import { UpdateGameSessionInput, UpdateGameSessionOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1UpdateGameSessionCommand,
  serializeAws_json1_1UpdateGameSessionCommand,
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

export interface UpdateGameSessionCommandInput extends UpdateGameSessionInput {}
export interface UpdateGameSessionCommandOutput extends UpdateGameSessionOutput, __MetadataBearer {}

/**
 * <p>Updates the mutable properties of a game session. </p>
 *         <p>To update a game session, specify the game session ID and the values you want to
 *             change. </p>
 *         <p>If successful, the updated <code>GameSession</code> object is returned. </p>
 *         <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a>CreateGameSession</a> |
 *                     <a>DescribeGameSessions</a> |
 *                     <a>DescribeGameSessionDetails</a> |
 *                     <a>SearchGameSessions</a> |
 *                     <a>UpdateGameSession</a> |
 *                     <a>GetGameSessionLogUrl</a> |
 *                     <a>StartGameSessionPlacement</a> |
 *                     <a>DescribeGameSessionPlacement</a> |
 *                     <a>StopGameSessionPlacement</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, UpdateGameSessionCommand } from "../../client-gamelift/mod.ts";
 * // const { GameLiftClient, UpdateGameSessionCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new UpdateGameSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateGameSessionCommandInput} for command's `input` shape.
 * @see {@link UpdateGameSessionCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateGameSessionCommand extends $Command<
  UpdateGameSessionCommandInput,
  UpdateGameSessionCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateGameSessionCommandInput) {
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
  ): Handler<UpdateGameSessionCommandInput, UpdateGameSessionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "UpdateGameSessionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateGameSessionInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateGameSessionOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateGameSessionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateGameSessionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateGameSessionCommandOutput> {
    return deserializeAws_json1_1UpdateGameSessionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
