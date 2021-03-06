import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient.ts";
import { DeleteFleetLocationsInput, DeleteFleetLocationsOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DeleteFleetLocationsCommand,
  serializeAws_json1_1DeleteFleetLocationsCommand,
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

export interface DeleteFleetLocationsCommandInput extends DeleteFleetLocationsInput {}
export interface DeleteFleetLocationsCommandOutput extends DeleteFleetLocationsOutput, __MetadataBearer {}

/**
 * <p>Removes locations from a multi-location fleet. When deleting a location, all game
 *             server process and all instances that are still active in the location are shut down. </p>
 *         <p>To delete fleet locations, identify the fleet ID and provide a list of the locations
 *             to be deleted. </p>
 *         <p>If successful, GameLift sets the location status to <code>DELETING</code>, and begins
 *             to shut down existing server processes and terminate instances in each location being
 *             deleted. When completed, the location status changes to <code>TERMINATED</code>.</p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up GameLift fleets</a>
 *          </p>
 *         <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a>CreateFleetLocations</a> |
 *                     <a>DescribeFleetLocationAttributes</a> |
 *                     <a>DescribeFleetLocationCapacity</a> |
 *                     <a>DescribeFleetLocationUtilization</a> |
 *                     <a>DescribeFleetAttributes</a> |
 *                     <a>DescribeFleetCapacity</a> |
 *                     <a>DescribeFleetUtilization</a> |
 *                     <a>UpdateFleetCapacity</a> |
 *                     <a>StopFleetActions</a> |
 *                     <a>DeleteFleetLocations</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DeleteFleetLocationsCommand } from "../../client-gamelift/mod.ts";
 * // const { GameLiftClient, DeleteFleetLocationsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DeleteFleetLocationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFleetLocationsCommandInput} for command's `input` shape.
 * @see {@link DeleteFleetLocationsCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteFleetLocationsCommand extends $Command<
  DeleteFleetLocationsCommandInput,
  DeleteFleetLocationsCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteFleetLocationsCommandInput) {
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
  ): Handler<DeleteFleetLocationsCommandInput, DeleteFleetLocationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "DeleteFleetLocationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteFleetLocationsInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteFleetLocationsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteFleetLocationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteFleetLocationsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteFleetLocationsCommandOutput> {
    return deserializeAws_json1_1DeleteFleetLocationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
