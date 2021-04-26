import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient.ts";
import { DeleteUseCaseRequest } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DeleteUseCaseCommand,
  serializeAws_restJson1DeleteUseCaseCommand,
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

export interface DeleteUseCaseCommandInput extends DeleteUseCaseRequest {}
export interface DeleteUseCaseCommandOutput extends __MetadataBearer {}

/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Deletes a use case from an AppIntegration association.</p>
 */
export class DeleteUseCaseCommand extends $Command<
  DeleteUseCaseCommandInput,
  DeleteUseCaseCommandOutput,
  ConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteUseCaseCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteUseCaseCommandInput, DeleteUseCaseCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "DeleteUseCaseCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteUseCaseRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteUseCaseCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteUseCaseCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteUseCaseCommandOutput> {
    return deserializeAws_restJson1DeleteUseCaseCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
