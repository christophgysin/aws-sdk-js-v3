import { LookoutEquipmentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutEquipmentClient.ts";
import { DescribeInferenceSchedulerRequest, DescribeInferenceSchedulerResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_0DescribeInferenceSchedulerCommand,
  serializeAws_json1_0DescribeInferenceSchedulerCommand,
} from "../protocols/Aws_json1_0.ts";
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

export interface DescribeInferenceSchedulerCommandInput extends DescribeInferenceSchedulerRequest {}
export interface DescribeInferenceSchedulerCommandOutput extends DescribeInferenceSchedulerResponse, __MetadataBearer {}

/**
 * <p> Specifies information about the inference scheduler being used, including name, model,
 *          status, and associated metadata </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, DescribeInferenceSchedulerCommand } from "../../client-lookoutequipment/mod.ts";
 * // const { LookoutEquipmentClient, DescribeInferenceSchedulerCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * const client = new LookoutEquipmentClient(config);
 * const command = new DescribeInferenceSchedulerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInferenceSchedulerCommandInput} for command's `input` shape.
 * @see {@link DescribeInferenceSchedulerCommandOutput} for command's `response` shape.
 * @see {@link LookoutEquipmentClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeInferenceSchedulerCommand extends $Command<
  DescribeInferenceSchedulerCommandInput,
  DescribeInferenceSchedulerCommandOutput,
  LookoutEquipmentClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeInferenceSchedulerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LookoutEquipmentClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeInferenceSchedulerCommandInput, DescribeInferenceSchedulerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutEquipmentClient";
    const commandName = "DescribeInferenceSchedulerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeInferenceSchedulerRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeInferenceSchedulerResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeInferenceSchedulerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0DescribeInferenceSchedulerCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeInferenceSchedulerCommandOutput> {
    return deserializeAws_json1_0DescribeInferenceSchedulerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
