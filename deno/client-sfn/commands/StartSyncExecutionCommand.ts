import { SFNClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SFNClient.ts";
import { StartSyncExecutionInput, StartSyncExecutionOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_0StartSyncExecutionCommand,
  serializeAws_json1_0StartSyncExecutionCommand,
} from "../protocols/Aws_json1_0.ts";
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

export interface StartSyncExecutionCommandInput extends StartSyncExecutionInput {}
export interface StartSyncExecutionCommandOutput extends StartSyncExecutionOutput, __MetadataBearer {}

/**
 * <p>Starts a Synchronous Express state machine execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, StartSyncExecutionCommand } from "../../client-sfn/mod.ts";
 * // const { SFNClient, StartSyncExecutionCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const command = new StartSyncExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartSyncExecutionCommandInput} for command's `input` shape.
 * @see {@link StartSyncExecutionCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class StartSyncExecutionCommand extends $Command<
  StartSyncExecutionCommandInput,
  StartSyncExecutionCommandOutput,
  SFNClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartSyncExecutionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SFNClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartSyncExecutionCommandInput, StartSyncExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SFNClient";
    const commandName = "StartSyncExecutionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartSyncExecutionInput.filterSensitiveLog,
      outputFilterSensitiveLog: StartSyncExecutionOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartSyncExecutionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0StartSyncExecutionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartSyncExecutionCommandOutput> {
    return deserializeAws_json1_0StartSyncExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
