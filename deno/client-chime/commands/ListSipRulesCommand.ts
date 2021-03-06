import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient.ts";
import { ListSipRulesRequest, ListSipRulesResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1ListSipRulesCommand,
  serializeAws_restJson1ListSipRulesCommand,
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

export interface ListSipRulesCommandInput extends ListSipRulesRequest {}
export interface ListSipRulesCommandOutput extends ListSipRulesResponse, __MetadataBearer {}

/**
 * <p>Lists the SIP rules under the administrator's AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ListSipRulesCommand } from "../../client-chime/mod.ts";
 * // const { ChimeClient, ListSipRulesCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new ListSipRulesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSipRulesCommandInput} for command's `input` shape.
 * @see {@link ListSipRulesCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListSipRulesCommand extends $Command<
  ListSipRulesCommandInput,
  ListSipRulesCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListSipRulesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSipRulesCommandInput, ListSipRulesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "ListSipRulesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSipRulesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListSipRulesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListSipRulesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListSipRulesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSipRulesCommandOutput> {
    return deserializeAws_restJson1ListSipRulesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
