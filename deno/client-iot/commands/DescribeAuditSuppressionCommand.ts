import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient.ts";
import { DescribeAuditSuppressionRequest, DescribeAuditSuppressionResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1DescribeAuditSuppressionCommand,
  serializeAws_restJson1DescribeAuditSuppressionCommand,
} from "../protocols/Aws_restJson1.ts";
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

export interface DescribeAuditSuppressionCommandInput extends DescribeAuditSuppressionRequest {}
export interface DescribeAuditSuppressionCommandOutput extends DescribeAuditSuppressionResponse, __MetadataBearer {}

/**
 * <p>
 *       Gets information about a Device Defender audit suppression.
 *     </p>
 */
export class DescribeAuditSuppressionCommand extends $Command<
  DescribeAuditSuppressionCommandInput,
  DescribeAuditSuppressionCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAuditSuppressionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAuditSuppressionCommandInput, DescribeAuditSuppressionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "DescribeAuditSuppressionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAuditSuppressionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeAuditSuppressionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAuditSuppressionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeAuditSuppressionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAuditSuppressionCommandOutput> {
    return deserializeAws_restJson1DescribeAuditSuppressionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
