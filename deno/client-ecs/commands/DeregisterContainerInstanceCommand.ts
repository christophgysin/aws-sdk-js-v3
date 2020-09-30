
import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient.ts";
import { DeregisterContainerInstanceRequest, DeregisterContainerInstanceResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DeregisterContainerInstanceCommand,
  serializeAws_json1_1DeregisterContainerInstanceCommand,
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

export type DeregisterContainerInstanceCommandInput = DeregisterContainerInstanceRequest;
export type DeregisterContainerInstanceCommandOutput = DeregisterContainerInstanceResponse & __MetadataBearer;

export class DeregisterContainerInstanceCommand extends $Command<
  DeregisterContainerInstanceCommandInput,
  DeregisterContainerInstanceCommandOutput,
  ECSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeregisterContainerInstanceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeregisterContainerInstanceCommandInput, DeregisterContainerInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: DeregisterContainerInstanceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeregisterContainerInstanceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeregisterContainerInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeregisterContainerInstanceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeregisterContainerInstanceCommandOutput> {
    return deserializeAws_json1_1DeregisterContainerInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
