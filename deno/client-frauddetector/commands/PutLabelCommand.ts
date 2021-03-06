import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient.ts";
import { PutLabelRequest, PutLabelResult } from "../models/models_0.ts";
import { deserializeAws_json1_1PutLabelCommand, serializeAws_json1_1PutLabelCommand } from "../protocols/Aws_json1_1.ts";
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

export interface PutLabelCommandInput extends PutLabelRequest {}
export interface PutLabelCommandOutput extends PutLabelResult, __MetadataBearer {}

/**
 * <p>Creates or updates label. A label classifies an event as fraudulent or legitimate. Labels are associated with event types and used to train supervised machine learning models in Amazon Fraud Detector. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, PutLabelCommand } from "../../client-frauddetector/mod.ts";
 * // const { FraudDetectorClient, PutLabelCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new PutLabelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutLabelCommandInput} for command's `input` shape.
 * @see {@link PutLabelCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class PutLabelCommand extends $Command<
  PutLabelCommandInput,
  PutLabelCommandOutput,
  FraudDetectorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutLabelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FraudDetectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutLabelCommandInput, PutLabelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FraudDetectorClient";
    const commandName = "PutLabelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutLabelRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutLabelResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutLabelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutLabelCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutLabelCommandOutput> {
    return deserializeAws_json1_1PutLabelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
