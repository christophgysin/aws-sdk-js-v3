import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient.ts";
import { ListCompilationJobsRequest, ListCompilationJobsResponse } from "../models/models_2.ts";
import {
  deserializeAws_json1_1ListCompilationJobsCommand,
  serializeAws_json1_1ListCompilationJobsCommand,
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

export interface ListCompilationJobsCommandInput extends ListCompilationJobsRequest {}
export interface ListCompilationJobsCommandOutput extends ListCompilationJobsResponse, __MetadataBearer {}

/**
 * <p>Lists model compilation jobs that satisfy various filters.</p>
 *         <p>To create a model compilation job, use <a>CreateCompilationJob</a>. To get
 *             information about a particular model compilation job you have created, use <a>DescribeCompilationJob</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListCompilationJobsCommand } from "../../client-sagemaker/mod.ts";
 * // const { SageMakerClient, ListCompilationJobsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListCompilationJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCompilationJobsCommandInput} for command's `input` shape.
 * @see {@link ListCompilationJobsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListCompilationJobsCommand extends $Command<
  ListCompilationJobsCommandInput,
  ListCompilationJobsCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListCompilationJobsCommandInput) {
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
  ): Handler<ListCompilationJobsCommandInput, ListCompilationJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListCompilationJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListCompilationJobsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListCompilationJobsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListCompilationJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListCompilationJobsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListCompilationJobsCommandOutput> {
    return deserializeAws_json1_1ListCompilationJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
