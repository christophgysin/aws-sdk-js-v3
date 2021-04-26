import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient.ts";
import {
  ListAuditMitigationActionsExecutionsRequest,
  ListAuditMitigationActionsExecutionsResponse,
} from "../models/models_1.ts";
import {
  deserializeAws_restJson1ListAuditMitigationActionsExecutionsCommand,
  serializeAws_restJson1ListAuditMitigationActionsExecutionsCommand,
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

export interface ListAuditMitigationActionsExecutionsCommandInput extends ListAuditMitigationActionsExecutionsRequest {}
export interface ListAuditMitigationActionsExecutionsCommandOutput
  extends ListAuditMitigationActionsExecutionsResponse,
    __MetadataBearer {}

/**
 * <p>Gets the status of audit mitigation action tasks that were
 *       executed.</p>
 */
export class ListAuditMitigationActionsExecutionsCommand extends $Command<
  ListAuditMitigationActionsExecutionsCommandInput,
  ListAuditMitigationActionsExecutionsCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAuditMitigationActionsExecutionsCommandInput) {
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
  ): Handler<ListAuditMitigationActionsExecutionsCommandInput, ListAuditMitigationActionsExecutionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "ListAuditMitigationActionsExecutionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAuditMitigationActionsExecutionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAuditMitigationActionsExecutionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListAuditMitigationActionsExecutionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListAuditMitigationActionsExecutionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAuditMitigationActionsExecutionsCommandOutput> {
    return deserializeAws_restJson1ListAuditMitigationActionsExecutionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
