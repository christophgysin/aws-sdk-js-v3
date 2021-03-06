import { MediaStoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreClient.ts";
import { DeleteCorsPolicyInput, DeleteCorsPolicyOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DeleteCorsPolicyCommand,
  serializeAws_json1_1DeleteCorsPolicyCommand,
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

export interface DeleteCorsPolicyCommandInput extends DeleteCorsPolicyInput {}
export interface DeleteCorsPolicyCommandOutput extends DeleteCorsPolicyOutput, __MetadataBearer {}

/**
 * <p>Deletes the cross-origin resource sharing (CORS) configuration information that is
 *          set for the container.</p>
 *          <p>To use this operation, you must have permission to perform the
 *             <code>MediaStore:DeleteCorsPolicy</code> action. The container owner has this permission
 *          by default and can grant this permission to others.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreClient, DeleteCorsPolicyCommand } from "../../client-mediastore/mod.ts";
 * // const { MediaStoreClient, DeleteCorsPolicyCommand } = require("@aws-sdk/client-mediastore"); // CommonJS import
 * const client = new MediaStoreClient(config);
 * const command = new DeleteCorsPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCorsPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteCorsPolicyCommandOutput} for command's `response` shape.
 * @see {@link MediaStoreClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteCorsPolicyCommand extends $Command<
  DeleteCorsPolicyCommandInput,
  DeleteCorsPolicyCommandOutput,
  MediaStoreClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteCorsPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaStoreClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteCorsPolicyCommandInput, DeleteCorsPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaStoreClient";
    const commandName = "DeleteCorsPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteCorsPolicyInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteCorsPolicyOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteCorsPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteCorsPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteCorsPolicyCommandOutput> {
    return deserializeAws_json1_1DeleteCorsPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
