import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient.ts";
import { PredictInput, PredictOutput } from "../models/models_0.ts";
import { deserializeAws_json1_1PredictCommand, serializeAws_json1_1PredictCommand } from "../protocols/Aws_json1_1.ts";
import { getPredictEndpointPlugin } from "../../middleware-sdk-machinelearning/mod.ts";
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

export interface PredictCommandInput extends PredictInput {}
export interface PredictCommandOutput extends PredictOutput, __MetadataBearer {}

/**
 * <p>Generates a prediction for the observation using the specified <code>ML Model</code>.</p>
 *         <p>
 *             <b>Note:</b> Not all response parameters will be populated. Whether a
 *           response parameter is populated depends on the type of model requested.</p>
 */
export class PredictCommand extends $Command<
  PredictCommandInput,
  PredictCommandOutput,
  MachineLearningClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PredictCommandInput) {
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
  ): Handler<PredictCommandInput, PredictCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getPredictEndpointPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MachineLearningClient";
    const commandName = "PredictCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PredictInput.filterSensitiveLog,
      outputFilterSensitiveLog: PredictOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PredictCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PredictCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PredictCommandOutput> {
    return deserializeAws_json1_1PredictCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
