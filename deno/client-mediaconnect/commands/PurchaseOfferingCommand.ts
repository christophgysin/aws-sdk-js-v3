import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient.ts";
import { PurchaseOfferingRequest, PurchaseOfferingResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1PurchaseOfferingCommand,
  serializeAws_restJson1PurchaseOfferingCommand,
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

export interface PurchaseOfferingCommandInput extends PurchaseOfferingRequest {}
export interface PurchaseOfferingCommandOutput extends PurchaseOfferingResponse, __MetadataBearer {}

/**
 * Submits a request to purchase an offering. If you already have an active reservation, you can't purchase another offering.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, PurchaseOfferingCommand } from "../../client-mediaconnect/mod.ts";
 * // const { MediaConnectClient, PurchaseOfferingCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const command = new PurchaseOfferingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PurchaseOfferingCommandInput} for command's `input` shape.
 * @see {@link PurchaseOfferingCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class PurchaseOfferingCommand extends $Command<
  PurchaseOfferingCommandInput,
  PurchaseOfferingCommandOutput,
  MediaConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PurchaseOfferingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PurchaseOfferingCommandInput, PurchaseOfferingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaConnectClient";
    const commandName = "PurchaseOfferingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PurchaseOfferingRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PurchaseOfferingResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PurchaseOfferingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PurchaseOfferingCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PurchaseOfferingCommandOutput> {
    return deserializeAws_restJson1PurchaseOfferingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
