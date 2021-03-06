import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client.ts";
import { DeleteTrafficMirrorFilterRequest, DeleteTrafficMirrorFilterResult } from "../models/models_2.ts";
import {
  deserializeAws_ec2DeleteTrafficMirrorFilterCommand,
  serializeAws_ec2DeleteTrafficMirrorFilterCommand,
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

export interface DeleteTrafficMirrorFilterCommandInput extends DeleteTrafficMirrorFilterRequest {}
export interface DeleteTrafficMirrorFilterCommandOutput extends DeleteTrafficMirrorFilterResult, __MetadataBearer {}

/**
 * <p>Deletes the specified Traffic Mirror filter.</p>
 *          <p>You cannot delete a Traffic Mirror filter that is in use by a Traffic Mirror session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteTrafficMirrorFilterCommand } from "../../client-ec2/mod.ts";
 * // const { EC2Client, DeleteTrafficMirrorFilterCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteTrafficMirrorFilterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTrafficMirrorFilterCommandInput} for command's `input` shape.
 * @see {@link DeleteTrafficMirrorFilterCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteTrafficMirrorFilterCommand extends $Command<
  DeleteTrafficMirrorFilterCommandInput,
  DeleteTrafficMirrorFilterCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteTrafficMirrorFilterCommandInput) {
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
  ): Handler<DeleteTrafficMirrorFilterCommandInput, DeleteTrafficMirrorFilterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteTrafficMirrorFilterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteTrafficMirrorFilterRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteTrafficMirrorFilterResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteTrafficMirrorFilterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DeleteTrafficMirrorFilterCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteTrafficMirrorFilterCommandOutput> {
    return deserializeAws_ec2DeleteTrafficMirrorFilterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
