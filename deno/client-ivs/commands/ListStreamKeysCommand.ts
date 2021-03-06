import { IvsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvsClient.ts";
import { ListStreamKeysRequest, ListStreamKeysResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListStreamKeysCommand,
  serializeAws_restJson1ListStreamKeysCommand,
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

export interface ListStreamKeysCommandInput extends ListStreamKeysRequest {}
export interface ListStreamKeysCommandOutput extends ListStreamKeysResponse, __MetadataBearer {}

/**
 * <p>Gets summary information about stream keys for the specified channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, ListStreamKeysCommand } from "../../client-ivs/mod.ts";
 * // const { IvsClient, ListStreamKeysCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * const client = new IvsClient(config);
 * const command = new ListStreamKeysCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListStreamKeysCommandInput} for command's `input` shape.
 * @see {@link ListStreamKeysCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListStreamKeysCommand extends $Command<
  ListStreamKeysCommandInput,
  ListStreamKeysCommandOutput,
  IvsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListStreamKeysCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IvsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListStreamKeysCommandInput, ListStreamKeysCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IvsClient";
    const commandName = "ListStreamKeysCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListStreamKeysRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListStreamKeysResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListStreamKeysCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListStreamKeysCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListStreamKeysCommandOutput> {
    return deserializeAws_restJson1ListStreamKeysCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
