import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient.ts";
import { DeleteScriptInput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DeleteScriptCommand,
  serializeAws_json1_1DeleteScriptCommand,
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

export interface DeleteScriptCommandInput extends DeleteScriptInput {}
export interface DeleteScriptCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a Realtime script. This operation permanently deletes the script record. If
 *             script files were uploaded, they are also deleted (files stored in an S3 bucket are not
 *             deleted). </p>
 *         <p>To delete a script, specify the script ID.  Before deleting a script, be sure to
 *             terminate all fleets that are deployed with the script being deleted. Fleet instances
 *             periodically check for script updates, and if the script record no longer exists, the
 *             instance will go into an error state and be unable to host game sessions.</p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/realtime-intro.html">Amazon GameLift Realtime Servers</a>
 *         </p>
 *         <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a>CreateScript</a> |
 *                     <a>ListScripts</a> |
 *                     <a>DescribeScript</a> |
 *                     <a>UpdateScript</a> |
 *                     <a>DeleteScript</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DeleteScriptCommand } from "../../client-gamelift/mod.ts";
 * // const { GameLiftClient, DeleteScriptCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DeleteScriptCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteScriptCommandInput} for command's `input` shape.
 * @see {@link DeleteScriptCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteScriptCommand extends $Command<
  DeleteScriptCommandInput,
  DeleteScriptCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteScriptCommandInput) {
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
  ): Handler<DeleteScriptCommandInput, DeleteScriptCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "DeleteScriptCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteScriptInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteScriptCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteScriptCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteScriptCommandOutput> {
    return deserializeAws_json1_1DeleteScriptCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
