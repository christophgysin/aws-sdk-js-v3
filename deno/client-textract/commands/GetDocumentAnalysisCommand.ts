
import { ServiceInputTypes, ServiceOutputTypes, TextractClientResolvedConfig } from "../TextractClient.ts";
import { GetDocumentAnalysisRequest, GetDocumentAnalysisResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetDocumentAnalysisCommand,
  serializeAws_json1_1GetDocumentAnalysisCommand,
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

export type GetDocumentAnalysisCommandInput = GetDocumentAnalysisRequest;
export type GetDocumentAnalysisCommandOutput = GetDocumentAnalysisResponse & __MetadataBearer;

export class GetDocumentAnalysisCommand extends $Command<
  GetDocumentAnalysisCommandInput,
  GetDocumentAnalysisCommandOutput,
  TextractClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetDocumentAnalysisCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TextractClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDocumentAnalysisCommandInput, GetDocumentAnalysisCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: GetDocumentAnalysisRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetDocumentAnalysisResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDocumentAnalysisCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetDocumentAnalysisCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDocumentAnalysisCommandOutput> {
    return deserializeAws_json1_1GetDocumentAnalysisCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
