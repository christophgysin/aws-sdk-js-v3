import { SFNClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SFNClient.ts";
import { DescribeStateMachineInput, DescribeStateMachineOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_0DescribeStateMachineCommand,
  serializeAws_json1_0DescribeStateMachineCommand,
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

export interface DescribeStateMachineCommandInput extends DescribeStateMachineInput {}
export interface DescribeStateMachineCommandOutput extends DescribeStateMachineOutput, __MetadataBearer {}

/**
 * <p>Describes a state machine.</p>
 *          <note>
 *             <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, DescribeStateMachineCommand } from "../../client-sfn/mod.ts";
 * // const { SFNClient, DescribeStateMachineCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const command = new DescribeStateMachineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeStateMachineCommandInput} for command's `input` shape.
 * @see {@link DescribeStateMachineCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeStateMachineCommand extends $Command<
  DescribeStateMachineCommandInput,
  DescribeStateMachineCommandOutput,
  SFNClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeStateMachineCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SFNClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeStateMachineCommandInput, DescribeStateMachineCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SFNClient";
    const commandName = "DescribeStateMachineCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeStateMachineInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeStateMachineOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeStateMachineCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0DescribeStateMachineCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeStateMachineCommandOutput> {
    return deserializeAws_json1_0DescribeStateMachineCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
