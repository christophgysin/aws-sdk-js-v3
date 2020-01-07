import {
  InspectorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../InspectorClient";
import { SubscribeToEventRequest } from "../models/index";
import {
  deserializeAws_json1_1SubscribeToEventCommand,
  serializeAws_json1_1SubscribeToEventCommand
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer
} from "@aws-sdk/types";

export type SubscribeToEventCommandInput = SubscribeToEventRequest;
export type SubscribeToEventCommandOutput = __MetadataBearer;

export class SubscribeToEventCommand extends $Command<
  SubscribeToEventCommandInput,
  SubscribeToEventCommandOutput,
  InspectorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SubscribeToEventCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: InspectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SubscribeToEventCommandInput, SubscribeToEventCommandOutput> {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: SubscribeToEventCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1SubscribeToEventCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<SubscribeToEventCommandOutput> {
    return deserializeAws_json1_1SubscribeToEventCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
