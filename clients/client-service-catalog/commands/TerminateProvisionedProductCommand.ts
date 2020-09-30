import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { TerminateProvisionedProductInput, TerminateProvisionedProductOutput } from "../models/models_0";
import {
  deserializeAws_json1_1TerminateProvisionedProductCommand,
  serializeAws_json1_1TerminateProvisionedProductCommand,
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

export type TerminateProvisionedProductCommandInput = TerminateProvisionedProductInput;
export type TerminateProvisionedProductCommandOutput = TerminateProvisionedProductOutput & __MetadataBearer;

export class TerminateProvisionedProductCommand extends $Command<
  TerminateProvisionedProductCommandInput,
  TerminateProvisionedProductCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: TerminateProvisionedProductCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceCatalogClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TerminateProvisionedProductCommandInput, TerminateProvisionedProductCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: TerminateProvisionedProductInput.filterSensitiveLog,
      outputFilterSensitiveLog: TerminateProvisionedProductOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: TerminateProvisionedProductCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1TerminateProvisionedProductCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<TerminateProvisionedProductCommandOutput> {
    return deserializeAws_json1_1TerminateProvisionedProductCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
