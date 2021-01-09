import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient.ts";
import { AddTagsToVaultInput } from "../models/models_0.ts";
import {
  deserializeAws_restJson1AddTagsToVaultCommand,
  serializeAws_restJson1AddTagsToVaultCommand,
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

export type AddTagsToVaultCommandInput = AddTagsToVaultInput;
export type AddTagsToVaultCommandOutput = __MetadataBearer;

/**
 * <p>This operation adds the specified tags to a vault. Each tag is composed of a key and
 *          a value. Each vault can have up to 10 tags. If your request would cause the tag limit for
 *          the vault to be exceeded, the operation throws the <code>LimitExceededException</code>
 *          error. If a tag already exists on the vault under a specified key, the existing key value
 *          will be overwritten. For more information about tags, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/tagging.html">Tagging Amazon S3 Glacier Resources</a>.
 *       </p>
 */
export class AddTagsToVaultCommand extends $Command<
  AddTagsToVaultCommandInput,
  AddTagsToVaultCommandOutput,
  GlacierClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AddTagsToVaultCommandInput) {
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
  ): Handler<AddTagsToVaultCommandInput, AddTagsToVaultCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlacierClient";
    const commandName = "AddTagsToVaultCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AddTagsToVaultInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AddTagsToVaultCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1AddTagsToVaultCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddTagsToVaultCommandOutput> {
    return deserializeAws_restJson1AddTagsToVaultCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
