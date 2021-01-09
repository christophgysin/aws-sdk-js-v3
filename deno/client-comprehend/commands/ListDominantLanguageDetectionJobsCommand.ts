import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient.ts";
import {
  ListDominantLanguageDetectionJobsRequest,
  ListDominantLanguageDetectionJobsResponse,
} from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListDominantLanguageDetectionJobsCommand,
  serializeAws_json1_1ListDominantLanguageDetectionJobsCommand,
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

export type ListDominantLanguageDetectionJobsCommandInput = ListDominantLanguageDetectionJobsRequest;
export type ListDominantLanguageDetectionJobsCommandOutput = ListDominantLanguageDetectionJobsResponse &
  __MetadataBearer;

/**
 * <p>Gets a list of the dominant language detection jobs that you have submitted.</p>
 */
export class ListDominantLanguageDetectionJobsCommand extends $Command<
  ListDominantLanguageDetectionJobsCommandInput,
  ListDominantLanguageDetectionJobsCommandOutput,
  ComprehendClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListDominantLanguageDetectionJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComprehendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDominantLanguageDetectionJobsCommandInput, ListDominantLanguageDetectionJobsCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "ListDominantLanguageDetectionJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDominantLanguageDetectionJobsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListDominantLanguageDetectionJobsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListDominantLanguageDetectionJobsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListDominantLanguageDetectionJobsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListDominantLanguageDetectionJobsCommandOutput> {
    return deserializeAws_json1_1ListDominantLanguageDetectionJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
