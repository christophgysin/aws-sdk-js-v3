import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient.ts";
import { DescribeCollectionRequest, DescribeCollectionResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeCollectionCommand,
  serializeAws_json1_1DescribeCollectionCommand,
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

export interface DescribeCollectionCommandInput extends DescribeCollectionRequest {}
export interface DescribeCollectionCommandOutput extends DescribeCollectionResponse, __MetadataBearer {}

/**
 * <p>Describes the specified collection. You can use <code>DescribeCollection</code> to get
 *          information, such as the number of faces indexed into a collection and the version of the
 *          model used by the collection for face detection.</p>
 *
 *          <p>For more information, see Describing a Collection in the
 *      Amazon Rekognition Developer Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, DescribeCollectionCommand } from "../../client-rekognition/mod.ts";
 * // const { RekognitionClient, DescribeCollectionCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const command = new DescribeCollectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCollectionCommandInput} for command's `input` shape.
 * @see {@link DescribeCollectionCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeCollectionCommand extends $Command<
  DescribeCollectionCommandInput,
  DescribeCollectionCommandOutput,
  RekognitionClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeCollectionCommandInput) {
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
  ): Handler<DescribeCollectionCommandInput, DescribeCollectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "DescribeCollectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeCollectionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeCollectionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeCollectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeCollectionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeCollectionCommandOutput> {
    return deserializeAws_json1_1DescribeCollectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
