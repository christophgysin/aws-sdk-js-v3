
import { STSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../STSClient.ts";
import { DecodeAuthorizationMessageRequest, DecodeAuthorizationMessageResponse } from "../models/models_0.ts";
import {
  deserializeAws_queryDecodeAuthorizationMessageCommand,
  serializeAws_queryDecodeAuthorizationMessageCommand,
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

export type DecodeAuthorizationMessageCommandInput = DecodeAuthorizationMessageRequest;
export type DecodeAuthorizationMessageCommandOutput = DecodeAuthorizationMessageResponse & __MetadataBearer;

export class DecodeAuthorizationMessageCommand extends $Command<
  DecodeAuthorizationMessageCommandInput,
  DecodeAuthorizationMessageCommandOutput,
  STSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DecodeAuthorizationMessageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: STSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DecodeAuthorizationMessageCommandInput, DecodeAuthorizationMessageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: DecodeAuthorizationMessageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DecodeAuthorizationMessageResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DecodeAuthorizationMessageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDecodeAuthorizationMessageCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DecodeAuthorizationMessageCommandOutput> {
    return deserializeAws_queryDecodeAuthorizationMessageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
