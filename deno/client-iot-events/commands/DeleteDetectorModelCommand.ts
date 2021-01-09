import { IoTEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsClient.ts";
import { DeleteDetectorModelRequest, DeleteDetectorModelResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DeleteDetectorModelCommand,
  serializeAws_restJson1DeleteDetectorModelCommand,
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

export type DeleteDetectorModelCommandInput = DeleteDetectorModelRequest;
export type DeleteDetectorModelCommandOutput = DeleteDetectorModelResponse & __MetadataBearer;

/**
 * <p>Deletes a detector model. Any active instances of the detector model are also
 *       deleted.</p>
 */
export class DeleteDetectorModelCommand extends $Command<
  DeleteDetectorModelCommandInput,
  DeleteDetectorModelCommandOutput,
  IoTEventsClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteDetectorModelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTEventsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteDetectorModelCommandInput, DeleteDetectorModelCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTEventsClient";
    const commandName = "DeleteDetectorModelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteDetectorModelRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteDetectorModelResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteDetectorModelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteDetectorModelCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteDetectorModelCommandOutput> {
    return deserializeAws_restJson1DeleteDetectorModelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
