
import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient.ts";
import { DescribePatchPropertiesRequest, DescribePatchPropertiesResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribePatchPropertiesCommand,
  serializeAws_json1_1DescribePatchPropertiesCommand,
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

export type DescribePatchPropertiesCommandInput = DescribePatchPropertiesRequest;
export type DescribePatchPropertiesCommandOutput = DescribePatchPropertiesResult & __MetadataBearer;

export class DescribePatchPropertiesCommand extends $Command<
  DescribePatchPropertiesCommandInput,
  DescribePatchPropertiesCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribePatchPropertiesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribePatchPropertiesCommandInput, DescribePatchPropertiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: DescribePatchPropertiesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribePatchPropertiesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribePatchPropertiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribePatchPropertiesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribePatchPropertiesCommandOutput> {
    return deserializeAws_json1_1DescribePatchPropertiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
