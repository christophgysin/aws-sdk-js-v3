import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient.ts";
import { DeleteReplicationJobRequest, DeleteReplicationJobResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DeleteReplicationJobCommand,
  serializeAws_json1_1DeleteReplicationJobCommand,
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

export interface DeleteReplicationJobCommandInput extends DeleteReplicationJobRequest {}
export interface DeleteReplicationJobCommandOutput extends DeleteReplicationJobResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified replication job.</p>
 *         <p>After you delete a replication job, there are no further replication runs. AWS
 *             deletes the contents of the Amazon S3 bucket used to store AWS SMS artifacts. The AMIs created
 *             by the replication runs are not deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, DeleteReplicationJobCommand } from "../../client-sms/mod.ts";
 * // const { SMSClient, DeleteReplicationJobCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new DeleteReplicationJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteReplicationJobCommandInput} for command's `input` shape.
 * @see {@link DeleteReplicationJobCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteReplicationJobCommand extends $Command<
  DeleteReplicationJobCommandInput,
  DeleteReplicationJobCommandOutput,
  SMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteReplicationJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteReplicationJobCommandInput, DeleteReplicationJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SMSClient";
    const commandName = "DeleteReplicationJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteReplicationJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteReplicationJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteReplicationJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteReplicationJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteReplicationJobCommandOutput> {
    return deserializeAws_json1_1DeleteReplicationJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
