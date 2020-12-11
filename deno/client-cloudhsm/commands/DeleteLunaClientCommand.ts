import { CloudHSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMClient.ts";
import { DeleteLunaClientRequest, DeleteLunaClientResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DeleteLunaClientCommand,
  serializeAws_json1_1DeleteLunaClientCommand,
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

export type DeleteLunaClientCommandInput = DeleteLunaClientRequest;
export type DeleteLunaClientCommandOutput = DeleteLunaClientResponse & __MetadataBearer;

/**
 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For
 *       more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM
 *       Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS
 *       CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p>
 *          <p>
 *             <b>For information about the current version of AWS
 *       CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the
 *       <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>,
 *       and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API
 *       Reference</a>.</p>
 *          <p>Deletes a client.</p>
 */
export class DeleteLunaClientCommand extends $Command<
  DeleteLunaClientCommandInput,
  DeleteLunaClientCommandOutput,
  CloudHSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteLunaClientCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudHSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteLunaClientCommandInput, DeleteLunaClientCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudHSMClient";
    const commandName = "DeleteLunaClientCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteLunaClientRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteLunaClientResponse.filterSensitiveLog,
    };

    if (typeof logger.info === "function") {
      logger.info({
        clientName,
        commandName,
      });
    }

    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteLunaClientCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteLunaClientCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteLunaClientCommandOutput> {
    return deserializeAws_json1_1DeleteLunaClientCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
