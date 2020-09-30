
import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient.ts";
import { StartTranscriptionJobRequest, StartTranscriptionJobResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1StartTranscriptionJobCommand,
  serializeAws_json1_1StartTranscriptionJobCommand,
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

export type StartTranscriptionJobCommandInput = StartTranscriptionJobRequest;
export type StartTranscriptionJobCommandOutput = StartTranscriptionJobResponse & __MetadataBearer;

export class StartTranscriptionJobCommand extends $Command<
  StartTranscriptionJobCommandInput,
  StartTranscriptionJobCommandOutput,
  TranscribeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartTranscriptionJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TranscribeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartTranscriptionJobCommandInput, StartTranscriptionJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: StartTranscriptionJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartTranscriptionJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartTranscriptionJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartTranscriptionJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartTranscriptionJobCommandOutput> {
    return deserializeAws_json1_1StartTranscriptionJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
