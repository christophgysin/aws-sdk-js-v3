
import { SQSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SQSClient.ts";
import { CreateQueueRequest, CreateQueueResult } from "../models/models_0.ts";
import { deserializeAws_queryCreateQueueCommand, serializeAws_queryCreateQueueCommand } from "../protocols/Aws_query.ts";
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

export type CreateQueueCommandInput = CreateQueueRequest;
export type CreateQueueCommandOutput = CreateQueueResult & __MetadataBearer;

export class CreateQueueCommand extends $Command<
  CreateQueueCommandInput,
  CreateQueueCommandOutput,
  SQSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateQueueCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SQSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateQueueCommandInput, CreateQueueCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: CreateQueueRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateQueueResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateQueueCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateQueueCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateQueueCommandOutput> {
    return deserializeAws_queryCreateQueueCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
