import {
  LexModelBuildingServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LexModelBuildingServiceClient.ts";
import { DeleteSlotTypeRequest } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DeleteSlotTypeCommand,
  serializeAws_restJson1DeleteSlotTypeCommand,
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

export type DeleteSlotTypeCommandInput = DeleteSlotTypeRequest;
export type DeleteSlotTypeCommandOutput = __MetadataBearer;

/**
 * <p>Deletes all versions of the slot type, including the
 *         <code>$LATEST</code> version. To delete a specific version of the slot
 *       type, use the <a>DeleteSlotTypeVersion</a> operation.</p>
 *          <p> You can delete a version of a slot type only if it is not
 *       referenced. To delete a slot type that is referred to in one or more
 *       intents, you must remove those references first. </p>
 *          <note>
 *             <p> If you get the <code>ResourceInUseException</code> exception,
 *         the exception provides an example reference that shows the intent where
 *         the slot type is referenced. To remove the reference to the slot type,
 *         either update the intent or delete it. If you get the same exception
 *         when you attempt to delete the slot type again, repeat until the slot
 *         type has no references and the <code>DeleteSlotType</code> call is
 *         successful. </p>
 *          </note>
 *          <p>This operation requires permission for the
 *         <code>lex:DeleteSlotType</code> action.</p>
 */
export class DeleteSlotTypeCommand extends $Command<
  DeleteSlotTypeCommandInput,
  DeleteSlotTypeCommandOutput,
  LexModelBuildingServiceClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteSlotTypeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexModelBuildingServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteSlotTypeCommandInput, DeleteSlotTypeCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelBuildingServiceClient";
    const commandName = "DeleteSlotTypeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteSlotTypeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteSlotTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteSlotTypeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteSlotTypeCommandOutput> {
    return deserializeAws_restJson1DeleteSlotTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
