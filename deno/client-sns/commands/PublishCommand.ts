
import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient.ts";
import { PublishInput, PublishResponse } from "../models/models_0.ts";
import { deserializeAws_queryPublishCommand, serializeAws_queryPublishCommand } from "../protocols/Aws_query.ts";
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

export type PublishCommandInput = PublishInput;
export type PublishCommandOutput = PublishResponse & __MetadataBearer;

export class PublishCommand extends $Command<PublishCommandInput, PublishCommandOutput, SNSClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PublishCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SNSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PublishCommandInput, PublishCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: PublishInput.filterSensitiveLog,
      outputFilterSensitiveLog: PublishResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PublishCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryPublishCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PublishCommandOutput> {
    return deserializeAws_queryPublishCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
