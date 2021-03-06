import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient.ts";
import { RemoveTagsFromVaultInput } from "../models/models_0.ts";
import {
  deserializeAws_restJson1RemoveTagsFromVaultCommand,
  serializeAws_restJson1RemoveTagsFromVaultCommand,
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

export interface RemoveTagsFromVaultCommandInput extends RemoveTagsFromVaultInput {}
export interface RemoveTagsFromVaultCommandOutput extends __MetadataBearer {}

/**
 * <p>This operation removes one or more tags from the set of tags attached to a vault. For
 *          more information about tags, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/tagging.html">Tagging Amazon S3 Glacier Resources</a>.
 *          This operation is idempotent. The operation will be successful, even if there are no tags
 *          attached to the vault. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, RemoveTagsFromVaultCommand } from "../../client-glacier/mod.ts";
 * // const { GlacierClient, RemoveTagsFromVaultCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const command = new RemoveTagsFromVaultCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveTagsFromVaultCommandInput} for command's `input` shape.
 * @see {@link RemoveTagsFromVaultCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class RemoveTagsFromVaultCommand extends $Command<
  RemoveTagsFromVaultCommandInput,
  RemoveTagsFromVaultCommandOutput,
  GlacierClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RemoveTagsFromVaultCommandInput) {
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
  ): Handler<RemoveTagsFromVaultCommandInput, RemoveTagsFromVaultCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlacierClient";
    const commandName = "RemoveTagsFromVaultCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RemoveTagsFromVaultInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RemoveTagsFromVaultCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RemoveTagsFromVaultCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RemoveTagsFromVaultCommandOutput> {
    return deserializeAws_restJson1RemoveTagsFromVaultCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
