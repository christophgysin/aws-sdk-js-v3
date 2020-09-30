
import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient.ts";
import { SendBulkTemplatedEmailRequest, SendBulkTemplatedEmailResponse } from "../models/models_0.ts";
import {
  deserializeAws_querySendBulkTemplatedEmailCommand,
  serializeAws_querySendBulkTemplatedEmailCommand,
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

export type SendBulkTemplatedEmailCommandInput = SendBulkTemplatedEmailRequest;
export type SendBulkTemplatedEmailCommandOutput = SendBulkTemplatedEmailResponse & __MetadataBearer;

export class SendBulkTemplatedEmailCommand extends $Command<
  SendBulkTemplatedEmailCommandInput,
  SendBulkTemplatedEmailCommandOutput,
  SESClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SendBulkTemplatedEmailCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SendBulkTemplatedEmailCommandInput, SendBulkTemplatedEmailCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: SendBulkTemplatedEmailRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SendBulkTemplatedEmailResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SendBulkTemplatedEmailCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_querySendBulkTemplatedEmailCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SendBulkTemplatedEmailCommandOutput> {
    return deserializeAws_querySendBulkTemplatedEmailCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
