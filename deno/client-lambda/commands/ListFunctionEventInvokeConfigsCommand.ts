
import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient.ts";
import { ListFunctionEventInvokeConfigsRequest, ListFunctionEventInvokeConfigsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListFunctionEventInvokeConfigsCommand,
  serializeAws_restJson1ListFunctionEventInvokeConfigsCommand,
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

export type ListFunctionEventInvokeConfigsCommandInput = ListFunctionEventInvokeConfigsRequest;
export type ListFunctionEventInvokeConfigsCommandOutput = ListFunctionEventInvokeConfigsResponse & __MetadataBearer;

export class ListFunctionEventInvokeConfigsCommand extends $Command<
  ListFunctionEventInvokeConfigsCommandInput,
  ListFunctionEventInvokeConfigsCommandOutput,
  LambdaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListFunctionEventInvokeConfigsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListFunctionEventInvokeConfigsCommandInput, ListFunctionEventInvokeConfigsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: ListFunctionEventInvokeConfigsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListFunctionEventInvokeConfigsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListFunctionEventInvokeConfigsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListFunctionEventInvokeConfigsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListFunctionEventInvokeConfigsCommandOutput> {
    return deserializeAws_restJson1ListFunctionEventInvokeConfigsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
