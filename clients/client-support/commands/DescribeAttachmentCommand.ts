import { ServiceInputTypes, ServiceOutputTypes, SupportClientResolvedConfig } from "../SupportClient";
import { DescribeAttachmentRequest, DescribeAttachmentResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeAttachmentCommand,
  serializeAws_json1_1DescribeAttachmentCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface DescribeAttachmentCommandInput extends DescribeAttachmentRequest {}
export interface DescribeAttachmentCommandOutput extends DescribeAttachmentResponse, __MetadataBearer {}

/**
 * <p>Returns the attachment that has the specified ID. Attachments can include screenshots,
 *             error logs, or other files that describe your issue. Attachment IDs are generated by the
 *             case management system when you add an attachment to a case or case communication.
 *             Attachment IDs are returned in the <a>AttachmentDetails</a> objects that are
 *             returned by the <a>DescribeCommunications</a> operation.</p>
 *         <note>
 *             <ul>
 *                <li>
 *                     <p>You must have a Business or Enterprise support plan to use the AWS Support
 *                         API. </p>
 *                 </li>
 *                <li>
 *                     <p>If you call the AWS Support API from an account that does not have a
 *                         Business or Enterprise support plan, the
 *                             <code>SubscriptionRequiredException</code> error message appears. For
 *                         information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">AWS Support</a>.</p>
 *                 </li>
 *             </ul>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupportClient, DescribeAttachmentCommand } from "@aws-sdk/client-support"; // ES Modules import
 * // const { SupportClient, DescribeAttachmentCommand } = require("@aws-sdk/client-support"); // CommonJS import
 * const client = new SupportClient(config);
 * const command = new DescribeAttachmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAttachmentCommandInput} for command's `input` shape.
 * @see {@link DescribeAttachmentCommandOutput} for command's `response` shape.
 * @see {@link SupportClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeAttachmentCommand extends $Command<
  DescribeAttachmentCommandInput,
  DescribeAttachmentCommandOutput,
  SupportClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAttachmentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SupportClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAttachmentCommandInput, DescribeAttachmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SupportClient";
    const commandName = "DescribeAttachmentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAttachmentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeAttachmentResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAttachmentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeAttachmentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAttachmentCommandOutput> {
    return deserializeAws_json1_1DescribeAttachmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
