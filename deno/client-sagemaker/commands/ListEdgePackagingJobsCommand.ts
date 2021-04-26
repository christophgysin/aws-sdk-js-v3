import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient.ts";
import { ListEdgePackagingJobsRequest, ListEdgePackagingJobsResponse } from "../models/models_2.ts";
import {
  deserializeAws_json1_1ListEdgePackagingJobsCommand,
  serializeAws_json1_1ListEdgePackagingJobsCommand,
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

export interface ListEdgePackagingJobsCommandInput extends ListEdgePackagingJobsRequest {}
export interface ListEdgePackagingJobsCommandOutput extends ListEdgePackagingJobsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of edge packaging jobs.</p>
 */
export class ListEdgePackagingJobsCommand extends $Command<
  ListEdgePackagingJobsCommandInput,
  ListEdgePackagingJobsCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListEdgePackagingJobsCommandInput) {
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
  ): Handler<ListEdgePackagingJobsCommandInput, ListEdgePackagingJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListEdgePackagingJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListEdgePackagingJobsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListEdgePackagingJobsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListEdgePackagingJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListEdgePackagingJobsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListEdgePackagingJobsCommandOutput> {
    return deserializeAws_json1_1ListEdgePackagingJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
