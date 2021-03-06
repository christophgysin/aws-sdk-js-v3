import { ServiceInputTypes, ServiceOutputTypes, WorkLinkClientResolvedConfig } from "../WorkLinkClient.ts";
import { RestoreDomainAccessRequest, RestoreDomainAccessResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1RestoreDomainAccessCommand,
  serializeAws_restJson1RestoreDomainAccessCommand,
} from "../protocols/Aws_restJson1.ts";
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

export interface RestoreDomainAccessCommandInput extends RestoreDomainAccessRequest {}
export interface RestoreDomainAccessCommandOutput extends RestoreDomainAccessResponse, __MetadataBearer {}

/**
 * <p>Moves a domain to ACTIVE status if it was in the INACTIVE status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, RestoreDomainAccessCommand } from "../../client-worklink/mod.ts";
 * // const { WorkLinkClient, RestoreDomainAccessCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const command = new RestoreDomainAccessCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RestoreDomainAccessCommandInput} for command's `input` shape.
 * @see {@link RestoreDomainAccessCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class RestoreDomainAccessCommand extends $Command<
  RestoreDomainAccessCommandInput,
  RestoreDomainAccessCommandOutput,
  WorkLinkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RestoreDomainAccessCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkLinkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RestoreDomainAccessCommandInput, RestoreDomainAccessCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkLinkClient";
    const commandName = "RestoreDomainAccessCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RestoreDomainAccessRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RestoreDomainAccessResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RestoreDomainAccessCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RestoreDomainAccessCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RestoreDomainAccessCommandOutput> {
    return deserializeAws_restJson1RestoreDomainAccessCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
