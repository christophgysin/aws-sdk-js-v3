import { MobileClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MobileClient.ts";
import { ListBundlesRequest, ListBundlesResult } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListBundlesCommand,
  serializeAws_restJson1ListBundlesCommand,
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

export interface ListBundlesCommandInput extends ListBundlesRequest {}
export interface ListBundlesCommandOutput extends ListBundlesResult, __MetadataBearer {}

/**
 * <p>
 *             List all available bundles.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MobileClient, ListBundlesCommand } from "../../client-mobile/mod.ts";
 * // const { MobileClient, ListBundlesCommand } = require("@aws-sdk/client-mobile"); // CommonJS import
 * const client = new MobileClient(config);
 * const command = new ListBundlesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBundlesCommandInput} for command's `input` shape.
 * @see {@link ListBundlesCommandOutput} for command's `response` shape.
 * @see {@link MobileClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListBundlesCommand extends $Command<
  ListBundlesCommandInput,
  ListBundlesCommandOutput,
  MobileClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListBundlesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MobileClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListBundlesCommandInput, ListBundlesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MobileClient";
    const commandName = "ListBundlesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListBundlesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListBundlesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListBundlesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListBundlesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListBundlesCommandOutput> {
    return deserializeAws_restJson1ListBundlesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
