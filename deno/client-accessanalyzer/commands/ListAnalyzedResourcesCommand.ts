import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient.ts";
import { ListAnalyzedResourcesRequest, ListAnalyzedResourcesResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListAnalyzedResourcesCommand,
  serializeAws_restJson1ListAnalyzedResourcesCommand,
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

export interface ListAnalyzedResourcesCommandInput extends ListAnalyzedResourcesRequest {}
export interface ListAnalyzedResourcesCommandOutput extends ListAnalyzedResourcesResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of resources of the specified type that have been analyzed by the
 *          specified analyzer..</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, ListAnalyzedResourcesCommand } from "../../client-accessanalyzer/mod.ts";
 * // const { AccessAnalyzerClient, ListAnalyzedResourcesCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * const client = new AccessAnalyzerClient(config);
 * const command = new ListAnalyzedResourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAnalyzedResourcesCommandInput} for command's `input` shape.
 * @see {@link ListAnalyzedResourcesCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListAnalyzedResourcesCommand extends $Command<
  ListAnalyzedResourcesCommandInput,
  ListAnalyzedResourcesCommandOutput,
  AccessAnalyzerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAnalyzedResourcesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AccessAnalyzerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAnalyzedResourcesCommandInput, ListAnalyzedResourcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AccessAnalyzerClient";
    const commandName = "ListAnalyzedResourcesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAnalyzedResourcesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAnalyzedResourcesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAnalyzedResourcesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListAnalyzedResourcesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAnalyzedResourcesCommandOutput> {
    return deserializeAws_restJson1ListAnalyzedResourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
