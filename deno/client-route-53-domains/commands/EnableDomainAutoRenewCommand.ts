
import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient.ts";
import { EnableDomainAutoRenewRequest, EnableDomainAutoRenewResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1EnableDomainAutoRenewCommand,
  serializeAws_json1_1EnableDomainAutoRenewCommand,
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

export type EnableDomainAutoRenewCommandInput = EnableDomainAutoRenewRequest;
export type EnableDomainAutoRenewCommandOutput = EnableDomainAutoRenewResponse & __MetadataBearer;

export class EnableDomainAutoRenewCommand extends $Command<
  EnableDomainAutoRenewCommandInput,
  EnableDomainAutoRenewCommandOutput,
  Route53DomainsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: EnableDomainAutoRenewCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53DomainsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<EnableDomainAutoRenewCommandInput, EnableDomainAutoRenewCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: EnableDomainAutoRenewRequest.filterSensitiveLog,
      outputFilterSensitiveLog: EnableDomainAutoRenewResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: EnableDomainAutoRenewCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1EnableDomainAutoRenewCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<EnableDomainAutoRenewCommandOutput> {
    return deserializeAws_json1_1EnableDomainAutoRenewCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
