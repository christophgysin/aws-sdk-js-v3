import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient.ts";
import { CancelSchemaExtensionRequest, CancelSchemaExtensionResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1CancelSchemaExtensionCommand,
  serializeAws_json1_1CancelSchemaExtensionCommand,
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

export interface CancelSchemaExtensionCommandInput extends CancelSchemaExtensionRequest {}
export interface CancelSchemaExtensionCommandOutput extends CancelSchemaExtensionResult, __MetadataBearer {}

/**
 * <p>Cancels an in-progress schema extension to a Microsoft AD directory. Once a schema extension has started replicating to all domain controllers, the task can no longer be canceled. A schema extension can be canceled during any of the following states; <code>Initializing</code>, <code>CreatingSnapshot</code>, and <code>UpdatingSchema</code>.</p>
 */
export class CancelSchemaExtensionCommand extends $Command<
  CancelSchemaExtensionCommandInput,
  CancelSchemaExtensionCommandOutput,
  DirectoryServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CancelSchemaExtensionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectoryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CancelSchemaExtensionCommandInput, CancelSchemaExtensionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectoryServiceClient";
    const commandName = "CancelSchemaExtensionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CancelSchemaExtensionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CancelSchemaExtensionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CancelSchemaExtensionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CancelSchemaExtensionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CancelSchemaExtensionCommandOutput> {
    return deserializeAws_json1_1CancelSchemaExtensionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
