
import { PricingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PricingClient.ts";
import { DescribeServicesRequest, DescribeServicesResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeServicesCommand,
  serializeAws_json1_1DescribeServicesCommand,
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

export type DescribeServicesCommandInput = DescribeServicesRequest;
export type DescribeServicesCommandOutput = DescribeServicesResponse & __MetadataBearer;

export class DescribeServicesCommand extends $Command<
  DescribeServicesCommandInput,
  DescribeServicesCommandOutput,
  PricingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeServicesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PricingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeServicesCommandInput, DescribeServicesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: DescribeServicesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeServicesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeServicesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeServicesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeServicesCommandOutput> {
    return deserializeAws_json1_1DescribeServicesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
