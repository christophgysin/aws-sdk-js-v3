import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient.ts";
import { DescribePipelineExecutionRequest, DescribePipelineExecutionResponse } from "../models/models_1.ts";
import {
  deserializeAws_json1_1DescribePipelineExecutionCommand,
  serializeAws_json1_1DescribePipelineExecutionCommand,
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

export interface DescribePipelineExecutionCommandInput extends DescribePipelineExecutionRequest {}
export interface DescribePipelineExecutionCommandOutput extends DescribePipelineExecutionResponse, __MetadataBearer {}

/**
 * <p>Describes the details of a pipeline execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribePipelineExecutionCommand } from "../../client-sagemaker/mod.ts";
 * // const { SageMakerClient, DescribePipelineExecutionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribePipelineExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePipelineExecutionCommandInput} for command's `input` shape.
 * @see {@link DescribePipelineExecutionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribePipelineExecutionCommand extends $Command<
  DescribePipelineExecutionCommandInput,
  DescribePipelineExecutionCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribePipelineExecutionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribePipelineExecutionCommandInput, DescribePipelineExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DescribePipelineExecutionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribePipelineExecutionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribePipelineExecutionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribePipelineExecutionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribePipelineExecutionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribePipelineExecutionCommandOutput> {
    return deserializeAws_json1_1DescribePipelineExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
