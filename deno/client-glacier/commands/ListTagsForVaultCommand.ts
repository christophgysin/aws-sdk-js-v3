import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient.ts";
import { ListTagsForVaultInput, ListTagsForVaultOutput } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListTagsForVaultCommand,
  serializeAws_restJson1ListTagsForVaultCommand,
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

export interface ListTagsForVaultCommandInput extends ListTagsForVaultInput {}
export interface ListTagsForVaultCommandOutput extends ListTagsForVaultOutput, __MetadataBearer {}

/**
 * <p>This operation lists all the tags attached to a vault. The operation returns an empty
 *          map if there are no tags. For more information about tags, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/tagging.html">Tagging Amazon S3 Glacier
 *          Resources</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, ListTagsForVaultCommand } from "../../client-glacier/mod.ts";
 * // const { GlacierClient, ListTagsForVaultCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const command = new ListTagsForVaultCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTagsForVaultCommandInput} for command's `input` shape.
 * @see {@link ListTagsForVaultCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListTagsForVaultCommand extends $Command<
  ListTagsForVaultCommandInput,
  ListTagsForVaultCommandOutput,
  GlacierClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListTagsForVaultCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlacierClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTagsForVaultCommandInput, ListTagsForVaultCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlacierClient";
    const commandName = "ListTagsForVaultCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListTagsForVaultInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListTagsForVaultOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListTagsForVaultCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListTagsForVaultCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTagsForVaultCommandOutput> {
    return deserializeAws_restJson1ListTagsForVaultCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
