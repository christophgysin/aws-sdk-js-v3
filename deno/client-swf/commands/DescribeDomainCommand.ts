
import { SWFClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SWFClient.ts";
import { DescribeDomainInput, DomainDetail } from "../models/models_0.ts";
import {
  deserializeAws_json1_0DescribeDomainCommand,
  serializeAws_json1_0DescribeDomainCommand,
} from "../protocols/Aws_json1_0.ts";
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

export type DescribeDomainCommandInput = DescribeDomainInput;
export type DescribeDomainCommandOutput = DomainDetail & __MetadataBearer;

export class DescribeDomainCommand extends $Command<
  DescribeDomainCommandInput,
  DescribeDomainCommandOutput,
  SWFClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeDomainCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SWFClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDomainCommandInput, DescribeDomainCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: DescribeDomainInput.filterSensitiveLog,
      outputFilterSensitiveLog: DomainDetail.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeDomainCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0DescribeDomainCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDomainCommandOutput> {
    return deserializeAws_json1_0DescribeDomainCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
