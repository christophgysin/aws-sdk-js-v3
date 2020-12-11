import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient.ts";
import { StartTaskRequest, StartTaskResponse } from "../models/models_0.ts";
import { deserializeAws_json1_1StartTaskCommand, serializeAws_json1_1StartTaskCommand } from "../protocols/Aws_json1_1.ts";
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

export type StartTaskCommandInput = StartTaskRequest;
export type StartTaskCommandOutput = StartTaskResponse & __MetadataBearer;

/**
 * <p>Starts a new task from the specified task definition on the specified container
 * 			instance or instances.</p>
 * 		       <p>Alternatively, you can use <a>RunTask</a> to place tasks for you. For more
 * 			information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/scheduling_tasks.html">Scheduling Tasks</a> in the
 * 				<i>Amazon Elastic Container Service Developer Guide</i>.</p>
 */
export class StartTaskCommand extends $Command<StartTaskCommandInput, StartTaskCommandOutput, ECSClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartTaskCommandInput) {
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
  ): Handler<StartTaskCommandInput, StartTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "StartTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartTaskRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartTaskResponse.filterSensitiveLog,
    };

    if (typeof logger.info === "function") {
      logger.info({
        clientName,
        commandName,
      });
    }

    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartTaskCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartTaskCommandOutput> {
    return deserializeAws_json1_1StartTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
