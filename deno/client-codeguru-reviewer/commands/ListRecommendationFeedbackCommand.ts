import { CodeGuruReviewerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruReviewerClient.ts";
import { ListRecommendationFeedbackRequest, ListRecommendationFeedbackResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListRecommendationFeedbackCommand,
  serializeAws_restJson1ListRecommendationFeedbackCommand,
} from "../protocols/Aws_restJson1.ts";
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

export type ListRecommendationFeedbackCommandInput = ListRecommendationFeedbackRequest;
export type ListRecommendationFeedbackCommandOutput = ListRecommendationFeedbackResponse & __MetadataBearer;

/**
 * <p>
 *          Returns a list of
 *          <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RecommendationFeedbackSummary.html">
 *                <code>RecommendationFeedbackSummary</code>
 *             </a>
 *          objects that contain customer recommendation feedback for all CodeGuru Reviewer users.
 *       </p>
 */
export class ListRecommendationFeedbackCommand extends $Command<
  ListRecommendationFeedbackCommandInput,
  ListRecommendationFeedbackCommandOutput,
  CodeGuruReviewerClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListRecommendationFeedbackCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeGuruReviewerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRecommendationFeedbackCommandInput, ListRecommendationFeedbackCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeGuruReviewerClient";
    const commandName = "ListRecommendationFeedbackCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListRecommendationFeedbackRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListRecommendationFeedbackResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListRecommendationFeedbackCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListRecommendationFeedbackCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListRecommendationFeedbackCommandOutput> {
    return deserializeAws_restJson1ListRecommendationFeedbackCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
