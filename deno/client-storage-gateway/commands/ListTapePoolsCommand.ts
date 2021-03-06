import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient.ts";
import { ListTapePoolsInput, ListTapePoolsOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListTapePoolsCommand,
  serializeAws_json1_1ListTapePoolsCommand,
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

export interface ListTapePoolsCommandInput extends ListTapePoolsInput {}
export interface ListTapePoolsCommandOutput extends ListTapePoolsOutput, __MetadataBearer {}

/**
 * <p>Lists custom tape pools. You specify custom tape pools to list by specifying one or more
 *          custom tape pool Amazon Resource Names (ARNs). If you don't specify a custom tape pool ARN,
 *          the operation lists all custom tape pools.</p>
 *
 *          <p>This operation supports pagination. You can optionally specify the <code>Limit</code>
 *          parameter in the body to limit the number of tape pools in the response. If the number of
 *          tape pools returned in the response is truncated, the response includes a
 *             <code>Marker</code> element that you can use in your subsequent request to retrieve the
 *          next set of tape pools.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, ListTapePoolsCommand } from "../../client-storage-gateway/mod.ts";
 * // const { StorageGatewayClient, ListTapePoolsCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new ListTapePoolsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTapePoolsCommandInput} for command's `input` shape.
 * @see {@link ListTapePoolsCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListTapePoolsCommand extends $Command<
  ListTapePoolsCommandInput,
  ListTapePoolsCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListTapePoolsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: StorageGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTapePoolsCommandInput, ListTapePoolsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "ListTapePoolsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListTapePoolsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListTapePoolsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListTapePoolsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListTapePoolsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTapePoolsCommandOutput> {
    return deserializeAws_json1_1ListTapePoolsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
