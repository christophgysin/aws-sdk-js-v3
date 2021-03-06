import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient.ts";
import { DescribeAgentRequest, DescribeAgentResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeAgentCommand,
  serializeAws_json1_1DescribeAgentCommand,
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

export interface DescribeAgentCommandInput extends DescribeAgentRequest {}
export interface DescribeAgentCommandOutput extends DescribeAgentResponse, __MetadataBearer {}

/**
 * <p>Returns metadata such as the name, the network interfaces, and the status (that is,
 *       whether the agent is running or not) for an agent. To specify which agent to describe, use the
 *       Amazon Resource Name (ARN) of the agent in your request. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, DescribeAgentCommand } from "../../client-datasync/mod.ts";
 * // const { DataSyncClient, DescribeAgentCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new DescribeAgentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAgentCommandInput} for command's `input` shape.
 * @see {@link DescribeAgentCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeAgentCommand extends $Command<
  DescribeAgentCommandInput,
  DescribeAgentCommandOutput,
  DataSyncClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAgentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAgentCommandInput, DescribeAgentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataSyncClient";
    const commandName = "DescribeAgentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAgentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeAgentResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAgentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeAgentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAgentCommandOutput> {
    return deserializeAws_json1_1DescribeAgentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
