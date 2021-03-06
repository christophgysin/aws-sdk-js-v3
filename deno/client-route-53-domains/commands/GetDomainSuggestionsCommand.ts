import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient.ts";
import { GetDomainSuggestionsRequest, GetDomainSuggestionsResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetDomainSuggestionsCommand,
  serializeAws_json1_1GetDomainSuggestionsCommand,
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

export interface GetDomainSuggestionsCommandInput extends GetDomainSuggestionsRequest {}
export interface GetDomainSuggestionsCommandOutput extends GetDomainSuggestionsResponse, __MetadataBearer {}

/**
 * <p>The GetDomainSuggestions operation returns a list of suggested domain names.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, GetDomainSuggestionsCommand } from "../../client-route-53-domains/mod.ts";
 * // const { Route53DomainsClient, GetDomainSuggestionsCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const command = new GetDomainSuggestionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDomainSuggestionsCommandInput} for command's `input` shape.
 * @see {@link GetDomainSuggestionsCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetDomainSuggestionsCommand extends $Command<
  GetDomainSuggestionsCommandInput,
  GetDomainSuggestionsCommandOutput,
  Route53DomainsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetDomainSuggestionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53DomainsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDomainSuggestionsCommandInput, GetDomainSuggestionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53DomainsClient";
    const commandName = "GetDomainSuggestionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDomainSuggestionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetDomainSuggestionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDomainSuggestionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetDomainSuggestionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDomainSuggestionsCommandOutput> {
    return deserializeAws_json1_1GetDomainSuggestionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
