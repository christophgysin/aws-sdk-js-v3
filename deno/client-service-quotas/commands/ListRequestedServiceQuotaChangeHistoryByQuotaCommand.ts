import { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "../ServiceQuotasClient.ts";
import {
  ListRequestedServiceQuotaChangeHistoryByQuotaRequest,
  ListRequestedServiceQuotaChangeHistoryByQuotaResponse,
} from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryByQuotaCommand,
  serializeAws_json1_1ListRequestedServiceQuotaChangeHistoryByQuotaCommand,
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

export interface ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput
  extends ListRequestedServiceQuotaChangeHistoryByQuotaRequest {}
export interface ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput
  extends ListRequestedServiceQuotaChangeHistoryByQuotaResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves the quota increase requests for the specified quota.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceQuotasClient, ListRequestedServiceQuotaChangeHistoryByQuotaCommand } from "../../client-service-quotas/mod.ts";
 * // const { ServiceQuotasClient, ListRequestedServiceQuotaChangeHistoryByQuotaCommand } = require("@aws-sdk/client-service-quotas"); // CommonJS import
 * const client = new ServiceQuotasClient(config);
 * const command = new ListRequestedServiceQuotaChangeHistoryByQuotaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput} for command's `input` shape.
 * @see {@link ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput} for command's `response` shape.
 * @see {@link ServiceQuotasClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListRequestedServiceQuotaChangeHistoryByQuotaCommand extends $Command<
  ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput,
  ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput,
  ServiceQuotasClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceQuotasClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput,
    ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceQuotasClient";
    const commandName = "ListRequestedServiceQuotaChangeHistoryByQuotaCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListRequestedServiceQuotaChangeHistoryByQuotaRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListRequestedServiceQuotaChangeHistoryByQuotaResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListRequestedServiceQuotaChangeHistoryByQuotaCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput> {
    return deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryByQuotaCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
