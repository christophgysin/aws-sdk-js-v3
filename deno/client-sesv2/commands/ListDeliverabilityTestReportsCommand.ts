import { SESv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESv2Client.ts";
import { ListDeliverabilityTestReportsRequest, ListDeliverabilityTestReportsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListDeliverabilityTestReportsCommand,
  serializeAws_restJson1ListDeliverabilityTestReportsCommand,
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

export interface ListDeliverabilityTestReportsCommandInput extends ListDeliverabilityTestReportsRequest {}
export interface ListDeliverabilityTestReportsCommandOutput
  extends ListDeliverabilityTestReportsResponse,
    __MetadataBearer {}

/**
 * <p>Show a list of the predictive inbox placement tests that you've performed, regardless of their statuses. For
 *             predictive inbox placement tests that are complete, you can use the <code>GetDeliverabilityTestReport</code>
 *             operation to view the results.</p>
 */
export class ListDeliverabilityTestReportsCommand extends $Command<
  ListDeliverabilityTestReportsCommandInput,
  ListDeliverabilityTestReportsCommandOutput,
  SESv2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListDeliverabilityTestReportsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESv2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDeliverabilityTestReportsCommandInput, ListDeliverabilityTestReportsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESv2Client";
    const commandName = "ListDeliverabilityTestReportsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDeliverabilityTestReportsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListDeliverabilityTestReportsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListDeliverabilityTestReportsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListDeliverabilityTestReportsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListDeliverabilityTestReportsCommandOutput> {
    return deserializeAws_restJson1ListDeliverabilityTestReportsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
