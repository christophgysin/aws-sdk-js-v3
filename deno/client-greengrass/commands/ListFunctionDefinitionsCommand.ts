import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient.ts";
import { ListFunctionDefinitionsRequest, ListFunctionDefinitionsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListFunctionDefinitionsCommand,
  serializeAws_restJson1ListFunctionDefinitionsCommand,
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

export interface ListFunctionDefinitionsCommandInput extends ListFunctionDefinitionsRequest {}
export interface ListFunctionDefinitionsCommandOutput extends ListFunctionDefinitionsResponse, __MetadataBearer {}

/**
 * Retrieves a list of Lambda function definitions.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, ListFunctionDefinitionsCommand } from "../../client-greengrass/mod.ts";
 * // const { GreengrassClient, ListFunctionDefinitionsCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new ListFunctionDefinitionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFunctionDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListFunctionDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListFunctionDefinitionsCommand extends $Command<
  ListFunctionDefinitionsCommandInput,
  ListFunctionDefinitionsCommandOutput,
  GreengrassClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListFunctionDefinitionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListFunctionDefinitionsCommandInput, ListFunctionDefinitionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassClient";
    const commandName = "ListFunctionDefinitionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListFunctionDefinitionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListFunctionDefinitionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListFunctionDefinitionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListFunctionDefinitionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListFunctionDefinitionsCommandOutput> {
    return deserializeAws_restJson1ListFunctionDefinitionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
