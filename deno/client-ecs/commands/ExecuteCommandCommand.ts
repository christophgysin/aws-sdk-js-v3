import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient.ts";
import { ExecuteCommandRequest, ExecuteCommandResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ExecuteCommandCommand,
  serializeAws_json1_1ExecuteCommandCommand,
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

export interface ExecuteCommandCommandInput extends ExecuteCommandRequest {}
export interface ExecuteCommandCommandOutput extends ExecuteCommandResponse, __MetadataBearer {}

/**
 * <p>Runs a command remotely on a container within a task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, ExecuteCommandCommand } from "../../client-ecs/mod.ts";
 * // const { ECSClient, ExecuteCommandCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new ExecuteCommandCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExecuteCommandCommandInput} for command's `input` shape.
 * @see {@link ExecuteCommandCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ExecuteCommandCommand extends $Command<
  ExecuteCommandCommandInput,
  ExecuteCommandCommandOutput,
  ECSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ExecuteCommandCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ExecuteCommandCommandInput, ExecuteCommandCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "ExecuteCommandCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ExecuteCommandRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ExecuteCommandResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ExecuteCommandCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ExecuteCommandCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ExecuteCommandCommandOutput> {
    return deserializeAws_json1_1ExecuteCommandCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
