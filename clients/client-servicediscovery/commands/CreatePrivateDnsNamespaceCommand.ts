import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";
import { CreatePrivateDnsNamespaceRequest, CreatePrivateDnsNamespaceResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreatePrivateDnsNamespaceCommand,
  serializeAws_json1_1CreatePrivateDnsNamespaceCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type CreatePrivateDnsNamespaceCommandInput = CreatePrivateDnsNamespaceRequest;
export type CreatePrivateDnsNamespaceCommandOutput = CreatePrivateDnsNamespaceResponse & __MetadataBearer;

export class CreatePrivateDnsNamespaceCommand extends $Command<
  CreatePrivateDnsNamespaceCommandInput,
  CreatePrivateDnsNamespaceCommandOutput,
  ServiceDiscoveryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreatePrivateDnsNamespaceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceDiscoveryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreatePrivateDnsNamespaceCommandInput, CreatePrivateDnsNamespaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceDiscoveryClient";
    const commandName = "CreatePrivateDnsNamespaceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreatePrivateDnsNamespaceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreatePrivateDnsNamespaceResponse.filterSensitiveLog,
    };

    if (typeof logger.info === "function") {
      logger.info({
        clientName,
        commandName,
      });
    }

    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreatePrivateDnsNamespaceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreatePrivateDnsNamespaceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreatePrivateDnsNamespaceCommandOutput> {
    return deserializeAws_json1_1CreatePrivateDnsNamespaceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
