import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient.ts";
import {
  GetIdentityMailFromDomainAttributesRequest,
  GetIdentityMailFromDomainAttributesResponse,
} from "../models/models_0.ts";
import {
  deserializeAws_queryGetIdentityMailFromDomainAttributesCommand,
  serializeAws_queryGetIdentityMailFromDomainAttributesCommand,
} from "../protocols/Aws_query.ts";
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

export type GetIdentityMailFromDomainAttributesCommandInput = GetIdentityMailFromDomainAttributesRequest;
export type GetIdentityMailFromDomainAttributesCommandOutput = GetIdentityMailFromDomainAttributesResponse &
  __MetadataBearer;

/**
 * <p>Returns the custom MAIL FROM attributes for a list of identities (email addresses :
 *             domains).</p>
 *         <p>This operation is throttled at one request per second and can only get custom MAIL
 *             FROM attributes for up to 100 identities at a time.</p>
 */
export class GetIdentityMailFromDomainAttributesCommand extends $Command<
  GetIdentityMailFromDomainAttributesCommandInput,
  GetIdentityMailFromDomainAttributesCommandOutput,
  SESClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetIdentityMailFromDomainAttributesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetIdentityMailFromDomainAttributesCommandInput, GetIdentityMailFromDomainAttributesCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "GetIdentityMailFromDomainAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetIdentityMailFromDomainAttributesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetIdentityMailFromDomainAttributesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetIdentityMailFromDomainAttributesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryGetIdentityMailFromDomainAttributesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetIdentityMailFromDomainAttributesCommandOutput> {
    return deserializeAws_queryGetIdentityMailFromDomainAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
