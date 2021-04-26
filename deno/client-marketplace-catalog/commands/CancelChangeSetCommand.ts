import {
  MarketplaceCatalogClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MarketplaceCatalogClient.ts";
import { CancelChangeSetRequest, CancelChangeSetResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1CancelChangeSetCommand,
  serializeAws_restJson1CancelChangeSetCommand,
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

export interface CancelChangeSetCommandInput extends CancelChangeSetRequest {}
export interface CancelChangeSetCommandOutput extends CancelChangeSetResponse, __MetadataBearer {}

/**
 * <p>Used to cancel an open change request. Must be sent before the status of the request
 *             changes to <code>APPLYING</code>, the final stage of completing your change request. You
 *             can describe a change during the 60-day request history retention period for API
 *             calls.</p>
 */
export class CancelChangeSetCommand extends $Command<
  CancelChangeSetCommandInput,
  CancelChangeSetCommandOutput,
  MarketplaceCatalogClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CancelChangeSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MarketplaceCatalogClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CancelChangeSetCommandInput, CancelChangeSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MarketplaceCatalogClient";
    const commandName = "CancelChangeSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CancelChangeSetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CancelChangeSetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CancelChangeSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CancelChangeSetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CancelChangeSetCommandOutput> {
    return deserializeAws_restJson1CancelChangeSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
