import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient.ts";
import { ListDomainsRequest, ListDomainsResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListDomainsCommand,
  serializeAws_json1_1ListDomainsCommand,
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

export interface ListDomainsCommandInput extends ListDomainsRequest {}
export interface ListDomainsCommandOutput extends ListDomainsResponse, __MetadataBearer {}

/**
 * <p>This operation returns all the domain names registered with Amazon Route 53 for the current AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, ListDomainsCommand } from "../../client-route-53-domains/mod.ts";
 * // const { Route53DomainsClient, ListDomainsCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const command = new ListDomainsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDomainsCommandInput} for command's `input` shape.
 * @see {@link ListDomainsCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListDomainsCommand extends $Command<
  ListDomainsCommandInput,
  ListDomainsCommandOutput,
  Route53DomainsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListDomainsCommandInput) {
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
  ): Handler<ListDomainsCommandInput, ListDomainsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53DomainsClient";
    const commandName = "ListDomainsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDomainsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListDomainsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListDomainsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListDomainsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDomainsCommandOutput> {
    return deserializeAws_json1_1ListDomainsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
