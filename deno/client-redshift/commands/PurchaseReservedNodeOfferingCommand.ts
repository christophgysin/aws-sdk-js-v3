import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient.ts";
import { PurchaseReservedNodeOfferingMessage, PurchaseReservedNodeOfferingResult } from "../models/models_1.ts";
import {
  deserializeAws_queryPurchaseReservedNodeOfferingCommand,
  serializeAws_queryPurchaseReservedNodeOfferingCommand,
} from "../protocols/Aws_query.ts";
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

export interface PurchaseReservedNodeOfferingCommandInput extends PurchaseReservedNodeOfferingMessage {}
export interface PurchaseReservedNodeOfferingCommandOutput
  extends PurchaseReservedNodeOfferingResult,
    __MetadataBearer {}

/**
 * <p>Allows you to purchase reserved nodes. Amazon Redshift offers a predefined set of
 *             reserved node offerings. You can purchase one or more of the offerings. You can call the
 *                 <a>DescribeReservedNodeOfferings</a> API to obtain the available reserved
 *             node offerings. You can call this API by providing a specific reserved node offering and
 *             the number of nodes you want to reserve. </p>
 *         <p>
 * For more information about reserved node offerings, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/purchase-reserved-node-instance.html">Purchasing Reserved Nodes</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, PurchaseReservedNodeOfferingCommand } from "../../client-redshift/mod.ts";
 * // const { RedshiftClient, PurchaseReservedNodeOfferingCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new PurchaseReservedNodeOfferingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PurchaseReservedNodeOfferingCommandInput} for command's `input` shape.
 * @see {@link PurchaseReservedNodeOfferingCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class PurchaseReservedNodeOfferingCommand extends $Command<
  PurchaseReservedNodeOfferingCommandInput,
  PurchaseReservedNodeOfferingCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PurchaseReservedNodeOfferingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PurchaseReservedNodeOfferingCommandInput, PurchaseReservedNodeOfferingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "PurchaseReservedNodeOfferingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PurchaseReservedNodeOfferingMessage.filterSensitiveLog,
      outputFilterSensitiveLog: PurchaseReservedNodeOfferingResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PurchaseReservedNodeOfferingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryPurchaseReservedNodeOfferingCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PurchaseReservedNodeOfferingCommandOutput> {
    return deserializeAws_queryPurchaseReservedNodeOfferingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
