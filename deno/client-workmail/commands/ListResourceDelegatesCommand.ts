import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient.ts";
import { ListResourceDelegatesRequest, ListResourceDelegatesResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListResourceDelegatesCommand,
  serializeAws_json1_1ListResourceDelegatesCommand,
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

export interface ListResourceDelegatesCommandInput extends ListResourceDelegatesRequest {}
export interface ListResourceDelegatesCommandOutput extends ListResourceDelegatesResponse, __MetadataBearer {}

/**
 * <p>Lists the delegates associated with a resource. Users and groups can be resource
 *          delegates and answer requests on behalf of the resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, ListResourceDelegatesCommand } from "../../client-workmail/mod.ts";
 * // const { WorkMailClient, ListResourceDelegatesCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new ListResourceDelegatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListResourceDelegatesCommandInput} for command's `input` shape.
 * @see {@link ListResourceDelegatesCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListResourceDelegatesCommand extends $Command<
  ListResourceDelegatesCommandInput,
  ListResourceDelegatesCommandOutput,
  WorkMailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListResourceDelegatesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkMailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListResourceDelegatesCommandInput, ListResourceDelegatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkMailClient";
    const commandName = "ListResourceDelegatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListResourceDelegatesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListResourceDelegatesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListResourceDelegatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListResourceDelegatesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListResourceDelegatesCommandOutput> {
    return deserializeAws_json1_1ListResourceDelegatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
