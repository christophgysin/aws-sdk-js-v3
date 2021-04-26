import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient.ts";
import { GetMLModelInput, GetMLModelOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetMLModelCommand,
  serializeAws_json1_1GetMLModelCommand,
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

export interface GetMLModelCommandInput extends GetMLModelInput {}
export interface GetMLModelCommandOutput extends GetMLModelOutput, __MetadataBearer {}

/**
 * <p>Returns an <code>MLModel</code> that includes detailed metadata, data source information, and the current status of the <code>MLModel</code>.</p>
 *         <p>
 *             <code>GetMLModel</code> provides results in normal or verbose format. </p>
 */
export class GetMLModelCommand extends $Command<
  GetMLModelCommandInput,
  GetMLModelCommandOutput,
  MachineLearningClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetMLModelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MachineLearningClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetMLModelCommandInput, GetMLModelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MachineLearningClient";
    const commandName = "GetMLModelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetMLModelInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetMLModelOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetMLModelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetMLModelCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetMLModelCommandOutput> {
    return deserializeAws_json1_1GetMLModelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
