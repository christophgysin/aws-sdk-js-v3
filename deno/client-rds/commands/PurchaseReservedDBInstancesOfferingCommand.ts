import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient.ts";
import {
  PurchaseReservedDBInstancesOfferingMessage,
  PurchaseReservedDBInstancesOfferingResult,
} from "../models/models_1.ts";
import {
  deserializeAws_queryPurchaseReservedDBInstancesOfferingCommand,
  serializeAws_queryPurchaseReservedDBInstancesOfferingCommand,
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

export type PurchaseReservedDBInstancesOfferingCommandInput = PurchaseReservedDBInstancesOfferingMessage;
export type PurchaseReservedDBInstancesOfferingCommandOutput = PurchaseReservedDBInstancesOfferingResult &
  __MetadataBearer;

/**
 * <p>Purchases a reserved DB instance offering.</p>
 */
export class PurchaseReservedDBInstancesOfferingCommand extends $Command<
  PurchaseReservedDBInstancesOfferingCommandInput,
  PurchaseReservedDBInstancesOfferingCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PurchaseReservedDBInstancesOfferingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PurchaseReservedDBInstancesOfferingCommandInput, PurchaseReservedDBInstancesOfferingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "PurchaseReservedDBInstancesOfferingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PurchaseReservedDBInstancesOfferingMessage.filterSensitiveLog,
      outputFilterSensitiveLog: PurchaseReservedDBInstancesOfferingResult.filterSensitiveLog,
    };

    if (typeof logger.info === "function") {
      logger.info({
        clientName,
        commandName,
      });
    }

    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: PurchaseReservedDBInstancesOfferingCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryPurchaseReservedDBInstancesOfferingCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PurchaseReservedDBInstancesOfferingCommandOutput> {
    return deserializeAws_queryPurchaseReservedDBInstancesOfferingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
