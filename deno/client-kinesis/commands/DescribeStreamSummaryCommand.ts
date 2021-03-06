import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient.ts";
import { DescribeStreamSummaryInput, DescribeStreamSummaryOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeStreamSummaryCommand,
  serializeAws_json1_1DescribeStreamSummaryCommand,
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

export interface DescribeStreamSummaryCommandInput extends DescribeStreamSummaryInput {}
export interface DescribeStreamSummaryCommandOutput extends DescribeStreamSummaryOutput, __MetadataBearer {}

/**
 * <p>Provides a summarized description of the specified Kinesis data stream without the
 *             shard list.</p>
 *         <p>The information returned includes the stream name, Amazon Resource Name (ARN),
 *             status, record retention period, approximate creation time, monitoring, encryption
 *             details, and open shard count. </p>
 *         <p>
 *             <a>DescribeStreamSummary</a> has a limit of 20 transactions per second
 *             per account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, DescribeStreamSummaryCommand } from "../../client-kinesis/mod.ts";
 * // const { KinesisClient, DescribeStreamSummaryCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * const client = new KinesisClient(config);
 * const command = new DescribeStreamSummaryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeStreamSummaryCommandInput} for command's `input` shape.
 * @see {@link DescribeStreamSummaryCommandOutput} for command's `response` shape.
 * @see {@link KinesisClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeStreamSummaryCommand extends $Command<
  DescribeStreamSummaryCommandInput,
  DescribeStreamSummaryCommandOutput,
  KinesisClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeStreamSummaryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeStreamSummaryCommandInput, DescribeStreamSummaryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisClient";
    const commandName = "DescribeStreamSummaryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeStreamSummaryInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeStreamSummaryOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeStreamSummaryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeStreamSummaryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeStreamSummaryCommandOutput> {
    return deserializeAws_json1_1DescribeStreamSummaryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
