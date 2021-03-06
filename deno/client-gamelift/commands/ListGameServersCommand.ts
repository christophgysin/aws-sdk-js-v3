import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient.ts";
import { ListGameServersInput, ListGameServersOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListGameServersCommand,
  serializeAws_json1_1ListGameServersCommand,
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

export interface ListGameServersCommandInput extends ListGameServersInput {}
export interface ListGameServersCommandOutput extends ListGameServersOutput, __MetadataBearer {}

/**
 * <p>
 *             <b>This operation is used with the GameLift FleetIQ solution and game server groups.</b>
 *          </p>
 *         <p>Retrieves information on all game servers that are currently active in a specified
 *             game server group. You can opt to sort the list by game server age. Use the
 *             pagination parameters to retrieve results in a set of sequential segments. </p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">GameLift FleetIQ Guide</a>
 *         </p>
 *         <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a>RegisterGameServer</a> |
 *                     <a>ListGameServers</a> |
 *                     <a>ClaimGameServer</a> |
 *                     <a>DescribeGameServer</a> |
 *                     <a>UpdateGameServer</a> |
 *                     <a>DeregisterGameServer</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/reference-awssdk-fleetiq.html">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, ListGameServersCommand } from "../../client-gamelift/mod.ts";
 * // const { GameLiftClient, ListGameServersCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new ListGameServersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListGameServersCommandInput} for command's `input` shape.
 * @see {@link ListGameServersCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListGameServersCommand extends $Command<
  ListGameServersCommandInput,
  ListGameServersCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListGameServersCommandInput) {
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
  ): Handler<ListGameServersCommandInput, ListGameServersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "ListGameServersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListGameServersInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListGameServersOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListGameServersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListGameServersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListGameServersCommandOutput> {
    return deserializeAws_json1_1ListGameServersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
