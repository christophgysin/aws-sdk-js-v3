
import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient.ts";
import { DeleteEvaluationResultsRequest, DeleteEvaluationResultsResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DeleteEvaluationResultsCommand,
  serializeAws_json1_1DeleteEvaluationResultsCommand,
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

export type DeleteEvaluationResultsCommandInput = DeleteEvaluationResultsRequest;
export type DeleteEvaluationResultsCommandOutput = DeleteEvaluationResultsResponse & __MetadataBearer;

export class DeleteEvaluationResultsCommand extends $Command<
  DeleteEvaluationResultsCommandInput,
  DeleteEvaluationResultsCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteEvaluationResultsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteEvaluationResultsCommandInput, DeleteEvaluationResultsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: DeleteEvaluationResultsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteEvaluationResultsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteEvaluationResultsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteEvaluationResultsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteEvaluationResultsCommandOutput> {
    return deserializeAws_json1_1DeleteEvaluationResultsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
