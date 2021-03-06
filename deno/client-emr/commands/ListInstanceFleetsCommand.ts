import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient.ts";
import { ListInstanceFleetsInput, ListInstanceFleetsOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListInstanceFleetsCommand,
  serializeAws_json1_1ListInstanceFleetsCommand,
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

export interface ListInstanceFleetsCommandInput extends ListInstanceFleetsInput {}
export interface ListInstanceFleetsCommandOutput extends ListInstanceFleetsOutput, __MetadataBearer {}

/**
 * <p>Lists all available details about the instance fleets in a cluster.</p>
 *          <note>
 *             <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and
 *             later, excluding 5.0.x versions.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, ListInstanceFleetsCommand } from "../../client-emr/mod.ts";
 * // const { EMRClient, ListInstanceFleetsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new ListInstanceFleetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListInstanceFleetsCommandInput} for command's `input` shape.
 * @see {@link ListInstanceFleetsCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListInstanceFleetsCommand extends $Command<
  ListInstanceFleetsCommandInput,
  ListInstanceFleetsCommandOutput,
  EMRClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListInstanceFleetsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListInstanceFleetsCommandInput, ListInstanceFleetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "ListInstanceFleetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListInstanceFleetsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListInstanceFleetsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListInstanceFleetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListInstanceFleetsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListInstanceFleetsCommandOutput> {
    return deserializeAws_json1_1ListInstanceFleetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
