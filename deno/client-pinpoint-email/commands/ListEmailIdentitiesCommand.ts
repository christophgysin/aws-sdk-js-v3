import { PinpointEmailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointEmailClient.ts";
import { ListEmailIdentitiesRequest, ListEmailIdentitiesResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListEmailIdentitiesCommand,
  serializeAws_restJson1ListEmailIdentitiesCommand,
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

export interface ListEmailIdentitiesCommandInput extends ListEmailIdentitiesRequest {}
export interface ListEmailIdentitiesCommandOutput extends ListEmailIdentitiesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of all of the email identities that are associated with your Amazon Pinpoint
 *             account. An identity can be either an email address or a domain. This operation returns
 *             identities that are verified as well as those that aren't.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, ListEmailIdentitiesCommand } from "../../client-pinpoint-email/mod.ts";
 * // const { PinpointEmailClient, ListEmailIdentitiesCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * const client = new PinpointEmailClient(config);
 * const command = new ListEmailIdentitiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEmailIdentitiesCommandInput} for command's `input` shape.
 * @see {@link ListEmailIdentitiesCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListEmailIdentitiesCommand extends $Command<
  ListEmailIdentitiesCommandInput,
  ListEmailIdentitiesCommandOutput,
  PinpointEmailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListEmailIdentitiesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointEmailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListEmailIdentitiesCommandInput, ListEmailIdentitiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointEmailClient";
    const commandName = "ListEmailIdentitiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListEmailIdentitiesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListEmailIdentitiesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListEmailIdentitiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListEmailIdentitiesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListEmailIdentitiesCommandOutput> {
    return deserializeAws_restJson1ListEmailIdentitiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
