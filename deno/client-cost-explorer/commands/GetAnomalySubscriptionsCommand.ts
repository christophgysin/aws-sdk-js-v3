import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient.ts";
import { GetAnomalySubscriptionsRequest, GetAnomalySubscriptionsResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetAnomalySubscriptionsCommand,
  serializeAws_json1_1GetAnomalySubscriptionsCommand,
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

export type GetAnomalySubscriptionsCommandInput = GetAnomalySubscriptionsRequest;
export type GetAnomalySubscriptionsCommandOutput = GetAnomalySubscriptionsResponse & __MetadataBearer;

/**
 * <p>Retrieves the cost anomaly subscription objects for your account. You can filter using a
 *       list of cost anomaly monitor Amazon Resource Names (ARNs). </p>
 */
export class GetAnomalySubscriptionsCommand extends $Command<
  GetAnomalySubscriptionsCommandInput,
  GetAnomalySubscriptionsCommandOutput,
  CostExplorerClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetAnomalySubscriptionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CostExplorerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAnomalySubscriptionsCommandInput, GetAnomalySubscriptionsCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CostExplorerClient";
    const commandName = "GetAnomalySubscriptionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetAnomalySubscriptionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetAnomalySubscriptionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetAnomalySubscriptionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetAnomalySubscriptionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAnomalySubscriptionsCommandOutput> {
    return deserializeAws_json1_1GetAnomalySubscriptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
