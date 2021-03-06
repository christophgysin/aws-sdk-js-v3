import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient.ts";
import { ListObjectParentPathsRequest, ListObjectParentPathsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListObjectParentPathsCommand,
  serializeAws_restJson1ListObjectParentPathsCommand,
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

export interface ListObjectParentPathsCommandInput extends ListObjectParentPathsRequest {}
export interface ListObjectParentPathsCommandOutput extends ListObjectParentPathsResponse, __MetadataBearer {}

/**
 * <p>Retrieves all available parent paths for any object type such as node, leaf node,
 *       policy node, and index node objects. For more information about objects, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directorystructure.html">Directory Structure</a>.</p>
 *          <p>Use this API to evaluate all parents for an object. The call returns all objects from
 *       the root of the directory up to the requested object. The API returns the number of paths
 *       based on user-defined <code>MaxResults</code>, in case there are multiple paths to the parent.
 *       The order of the paths and nodes returned is consistent among multiple API calls unless the
 *       objects are deleted or moved. Paths not leading to the directory root are ignored from the
 *       target object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, ListObjectParentPathsCommand } from "../../client-clouddirectory/mod.ts";
 * // const { CloudDirectoryClient, ListObjectParentPathsCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new ListObjectParentPathsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListObjectParentPathsCommandInput} for command's `input` shape.
 * @see {@link ListObjectParentPathsCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListObjectParentPathsCommand extends $Command<
  ListObjectParentPathsCommandInput,
  ListObjectParentPathsCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListObjectParentPathsCommandInput) {
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
  ): Handler<ListObjectParentPathsCommandInput, ListObjectParentPathsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudDirectoryClient";
    const commandName = "ListObjectParentPathsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListObjectParentPathsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListObjectParentPathsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListObjectParentPathsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListObjectParentPathsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListObjectParentPathsCommandOutput> {
    return deserializeAws_restJson1ListObjectParentPathsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
