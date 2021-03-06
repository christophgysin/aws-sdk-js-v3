import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient.ts";
import { ListTemplatesRequest, ListTemplatesResponse } from "../models/models_0.ts";
import {
  deserializeAws_queryListTemplatesCommand,
  serializeAws_queryListTemplatesCommand,
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

export interface ListTemplatesCommandInput extends ListTemplatesRequest {}
export interface ListTemplatesCommandOutput extends ListTemplatesResponse, __MetadataBearer {}

/**
 * <p>Lists the email templates present in your Amazon SES account in the current AWS
 *             Region.</p>
 *         <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, ListTemplatesCommand } from "../../client-ses/mod.ts";
 * // const { SESClient, ListTemplatesCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const command = new ListTemplatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListTemplatesCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListTemplatesCommand extends $Command<
  ListTemplatesCommandInput,
  ListTemplatesCommandOutput,
  SESClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListTemplatesCommandInput) {
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
  ): Handler<ListTemplatesCommandInput, ListTemplatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "ListTemplatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListTemplatesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListTemplatesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListTemplatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryListTemplatesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTemplatesCommandOutput> {
    return deserializeAws_queryListTemplatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
