import { ServiceInputTypes, ServiceOutputTypes, TranslateClientResolvedConfig } from "../TranslateClient.ts";
import { ListTextTranslationJobsRequest, ListTextTranslationJobsResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListTextTranslationJobsCommand,
  serializeAws_json1_1ListTextTranslationJobsCommand,
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

export interface ListTextTranslationJobsCommandInput extends ListTextTranslationJobsRequest {}
export interface ListTextTranslationJobsCommandOutput extends ListTextTranslationJobsResponse, __MetadataBearer {}

/**
 * <p>Gets a list of the batch translation jobs that you have submitted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranslateClient, ListTextTranslationJobsCommand } from "../../client-translate/mod.ts";
 * // const { TranslateClient, ListTextTranslationJobsCommand } = require("@aws-sdk/client-translate"); // CommonJS import
 * const client = new TranslateClient(config);
 * const command = new ListTextTranslationJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTextTranslationJobsCommandInput} for command's `input` shape.
 * @see {@link ListTextTranslationJobsCommandOutput} for command's `response` shape.
 * @see {@link TranslateClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListTextTranslationJobsCommand extends $Command<
  ListTextTranslationJobsCommandInput,
  ListTextTranslationJobsCommandOutput,
  TranslateClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListTextTranslationJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TranslateClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTextTranslationJobsCommandInput, ListTextTranslationJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranslateClient";
    const commandName = "ListTextTranslationJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListTextTranslationJobsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListTextTranslationJobsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListTextTranslationJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListTextTranslationJobsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTextTranslationJobsCommandOutput> {
    return deserializeAws_json1_1ListTextTranslationJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
