import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient.ts";
import { DeleteStreamProcessorRequest, DeleteStreamProcessorResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DeleteStreamProcessorCommand,
  serializeAws_json1_1DeleteStreamProcessorCommand,
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

export interface DeleteStreamProcessorCommandInput extends DeleteStreamProcessorRequest {}
export interface DeleteStreamProcessorCommandOutput extends DeleteStreamProcessorResponse, __MetadataBearer {}

/**
 * <p>Deletes the stream processor identified by <code>Name</code>. You assign the value for <code>Name</code> when you create the stream processor with
 *             <a>CreateStreamProcessor</a>. You might not be able to use the same name for a stream processor for a few seconds after calling <code>DeleteStreamProcessor</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, DeleteStreamProcessorCommand } from "../../client-rekognition/mod.ts";
 * // const { RekognitionClient, DeleteStreamProcessorCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const command = new DeleteStreamProcessorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteStreamProcessorCommandInput} for command's `input` shape.
 * @see {@link DeleteStreamProcessorCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteStreamProcessorCommand extends $Command<
  DeleteStreamProcessorCommandInput,
  DeleteStreamProcessorCommandOutput,
  RekognitionClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteStreamProcessorCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RekognitionClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteStreamProcessorCommandInput, DeleteStreamProcessorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "DeleteStreamProcessorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteStreamProcessorRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteStreamProcessorResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteStreamProcessorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteStreamProcessorCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteStreamProcessorCommandOutput> {
    return deserializeAws_json1_1DeleteStreamProcessorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
