import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient.ts";
import { ListAppliedSchemaArnsRequest, ListAppliedSchemaArnsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListAppliedSchemaArnsCommand,
  serializeAws_restJson1ListAppliedSchemaArnsCommand,
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

export interface ListAppliedSchemaArnsCommandInput extends ListAppliedSchemaArnsRequest {}
export interface ListAppliedSchemaArnsCommandOutput extends ListAppliedSchemaArnsResponse, __MetadataBearer {}

/**
 * <p>Lists schema major versions applied to a directory. If <code>SchemaArn</code> is provided, lists the minor version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, ListAppliedSchemaArnsCommand } from "../../client-clouddirectory/mod.ts";
 * // const { CloudDirectoryClient, ListAppliedSchemaArnsCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new ListAppliedSchemaArnsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAppliedSchemaArnsCommandInput} for command's `input` shape.
 * @see {@link ListAppliedSchemaArnsCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListAppliedSchemaArnsCommand extends $Command<
  ListAppliedSchemaArnsCommandInput,
  ListAppliedSchemaArnsCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAppliedSchemaArnsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudDirectoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAppliedSchemaArnsCommandInput, ListAppliedSchemaArnsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudDirectoryClient";
    const commandName = "ListAppliedSchemaArnsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAppliedSchemaArnsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAppliedSchemaArnsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAppliedSchemaArnsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListAppliedSchemaArnsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAppliedSchemaArnsCommandOutput> {
    return deserializeAws_restJson1ListAppliedSchemaArnsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
