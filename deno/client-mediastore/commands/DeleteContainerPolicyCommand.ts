import { MediaStoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreClient.ts";
import { DeleteContainerPolicyInput, DeleteContainerPolicyOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DeleteContainerPolicyCommand,
  serializeAws_json1_1DeleteContainerPolicyCommand,
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

export interface DeleteContainerPolicyCommandInput extends DeleteContainerPolicyInput {}
export interface DeleteContainerPolicyCommandOutput extends DeleteContainerPolicyOutput, __MetadataBearer {}

/**
 * <p>Deletes the access policy that is associated with the specified container.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreClient, DeleteContainerPolicyCommand } from "../../client-mediastore/mod.ts";
 * // const { MediaStoreClient, DeleteContainerPolicyCommand } = require("@aws-sdk/client-mediastore"); // CommonJS import
 * const client = new MediaStoreClient(config);
 * const command = new DeleteContainerPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteContainerPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteContainerPolicyCommandOutput} for command's `response` shape.
 * @see {@link MediaStoreClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteContainerPolicyCommand extends $Command<
  DeleteContainerPolicyCommandInput,
  DeleteContainerPolicyCommandOutput,
  MediaStoreClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteContainerPolicyCommandInput) {
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
  ): Handler<DeleteContainerPolicyCommandInput, DeleteContainerPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaStoreClient";
    const commandName = "DeleteContainerPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteContainerPolicyInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteContainerPolicyOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteContainerPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteContainerPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteContainerPolicyCommandOutput> {
    return deserializeAws_json1_1DeleteContainerPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
