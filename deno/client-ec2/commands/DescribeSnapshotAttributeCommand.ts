import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client.ts";
import { DescribeSnapshotAttributeRequest, DescribeSnapshotAttributeResult } from "../models/models_3.ts";
import {
  deserializeAws_ec2DescribeSnapshotAttributeCommand,
  serializeAws_ec2DescribeSnapshotAttributeCommand,
} from "../protocols/Aws_ec2.ts";
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

export type DescribeSnapshotAttributeCommandInput = DescribeSnapshotAttributeRequest;
export type DescribeSnapshotAttributeCommandOutput = DescribeSnapshotAttributeResult & __MetadataBearer;

/**
 * <p>Describes the specified attribute of the specified snapshot. You can specify only one
 *       attribute at a time.</p>
 *          <p>For more information about EBS snapshots, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSSnapshots.html">Amazon EBS snapshots</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 */
export class DescribeSnapshotAttributeCommand extends $Command<
  DescribeSnapshotAttributeCommandInput,
  DescribeSnapshotAttributeCommandOutput,
  EC2ClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeSnapshotAttributeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeSnapshotAttributeCommandInput, DescribeSnapshotAttributeCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeSnapshotAttributeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeSnapshotAttributeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeSnapshotAttributeResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeSnapshotAttributeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeSnapshotAttributeCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeSnapshotAttributeCommandOutput> {
    return deserializeAws_ec2DescribeSnapshotAttributeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
