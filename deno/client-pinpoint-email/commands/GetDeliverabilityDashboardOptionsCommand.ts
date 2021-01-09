import { PinpointEmailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointEmailClient.ts";
import {
  GetDeliverabilityDashboardOptionsRequest,
  GetDeliverabilityDashboardOptionsResponse,
} from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetDeliverabilityDashboardOptionsCommand,
  serializeAws_restJson1GetDeliverabilityDashboardOptionsCommand,
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

export type GetDeliverabilityDashboardOptionsCommandInput = GetDeliverabilityDashboardOptionsRequest;
export type GetDeliverabilityDashboardOptionsCommandOutput = GetDeliverabilityDashboardOptionsResponse &
  __MetadataBearer;

/**
 * <p>Retrieve information about the status of the Deliverability dashboard for your Amazon Pinpoint account.
 *             When the Deliverability dashboard is enabled, you gain access to reputation, deliverability, and
 *             other metrics for the domains that you use to send email using Amazon Pinpoint. You also gain the
 *             ability to perform predictive inbox placement tests.</p>
 *         <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition
 *             to any other fees that you accrue by using Amazon Pinpoint. For more information about the
 *             features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p>
 */
export class GetDeliverabilityDashboardOptionsCommand extends $Command<
  GetDeliverabilityDashboardOptionsCommandInput,
  GetDeliverabilityDashboardOptionsCommandOutput,
  PinpointEmailClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetDeliverabilityDashboardOptionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointEmailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDeliverabilityDashboardOptionsCommandInput, GetDeliverabilityDashboardOptionsCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointEmailClient";
    const commandName = "GetDeliverabilityDashboardOptionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDeliverabilityDashboardOptionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetDeliverabilityDashboardOptionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetDeliverabilityDashboardOptionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetDeliverabilityDashboardOptionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetDeliverabilityDashboardOptionsCommandOutput> {
    return deserializeAws_restJson1GetDeliverabilityDashboardOptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
