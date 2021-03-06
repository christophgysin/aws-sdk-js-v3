import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient.ts";
import {
  ListNotebookInstanceLifecycleConfigsInput,
  ListNotebookInstanceLifecycleConfigsOutput,
} from "../models/models_2.ts";
import {
  deserializeAws_json1_1ListNotebookInstanceLifecycleConfigsCommand,
  serializeAws_json1_1ListNotebookInstanceLifecycleConfigsCommand,
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

export interface ListNotebookInstanceLifecycleConfigsCommandInput extends ListNotebookInstanceLifecycleConfigsInput {}
export interface ListNotebookInstanceLifecycleConfigsCommandOutput
  extends ListNotebookInstanceLifecycleConfigsOutput,
    __MetadataBearer {}

/**
 * <p>Lists notebook instance lifestyle configurations created with the <a>CreateNotebookInstanceLifecycleConfig</a> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListNotebookInstanceLifecycleConfigsCommand } from "../../client-sagemaker/mod.ts";
 * // const { SageMakerClient, ListNotebookInstanceLifecycleConfigsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListNotebookInstanceLifecycleConfigsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListNotebookInstanceLifecycleConfigsCommandInput} for command's `input` shape.
 * @see {@link ListNotebookInstanceLifecycleConfigsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListNotebookInstanceLifecycleConfigsCommand extends $Command<
  ListNotebookInstanceLifecycleConfigsCommandInput,
  ListNotebookInstanceLifecycleConfigsCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListNotebookInstanceLifecycleConfigsCommandInput) {
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
  ): Handler<ListNotebookInstanceLifecycleConfigsCommandInput, ListNotebookInstanceLifecycleConfigsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListNotebookInstanceLifecycleConfigsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListNotebookInstanceLifecycleConfigsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListNotebookInstanceLifecycleConfigsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListNotebookInstanceLifecycleConfigsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListNotebookInstanceLifecycleConfigsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListNotebookInstanceLifecycleConfigsCommandOutput> {
    return deserializeAws_json1_1ListNotebookInstanceLifecycleConfigsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
