
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient.ts";
import { StartActivityStreamRequest, StartActivityStreamResponse } from "../models/models_1.ts";
import {
  deserializeAws_queryStartActivityStreamCommand,
  serializeAws_queryStartActivityStreamCommand,
} from "../protocols/Aws_query.ts";
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

export type StartActivityStreamCommandInput = StartActivityStreamRequest;
export type StartActivityStreamCommandOutput = StartActivityStreamResponse & __MetadataBearer;

export class StartActivityStreamCommand extends $Command<
  StartActivityStreamCommandInput,
  StartActivityStreamCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartActivityStreamCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartActivityStreamCommandInput, StartActivityStreamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: StartActivityStreamRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartActivityStreamResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartActivityStreamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryStartActivityStreamCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartActivityStreamCommandOutput> {
    return deserializeAws_queryStartActivityStreamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
