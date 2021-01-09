import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient.ts";
import { DeleteNotebookInstanceLifecycleConfigInput } from "../models/models_1.ts";
import {
  deserializeAws_json1_1DeleteNotebookInstanceLifecycleConfigCommand,
  serializeAws_json1_1DeleteNotebookInstanceLifecycleConfigCommand,
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

export type DeleteNotebookInstanceLifecycleConfigCommandInput = DeleteNotebookInstanceLifecycleConfigInput;
export type DeleteNotebookInstanceLifecycleConfigCommandOutput = __MetadataBearer;

/**
 * <p>Deletes a notebook instance lifecycle configuration.</p>
 */
export class DeleteNotebookInstanceLifecycleConfigCommand extends $Command<
  DeleteNotebookInstanceLifecycleConfigCommandInput,
  DeleteNotebookInstanceLifecycleConfigCommandOutput,
  SageMakerClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteNotebookInstanceLifecycleConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteNotebookInstanceLifecycleConfigCommandInput, DeleteNotebookInstanceLifecycleConfigCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DeleteNotebookInstanceLifecycleConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteNotebookInstanceLifecycleConfigInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteNotebookInstanceLifecycleConfigCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteNotebookInstanceLifecycleConfigCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteNotebookInstanceLifecycleConfigCommandOutput> {
    return deserializeAws_json1_1DeleteNotebookInstanceLifecycleConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
