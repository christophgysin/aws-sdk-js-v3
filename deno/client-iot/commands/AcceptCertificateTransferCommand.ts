import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient.ts";
import { AcceptCertificateTransferRequest } from "../models/models_0.ts";
import {
  deserializeAws_restJson1AcceptCertificateTransferCommand,
  serializeAws_restJson1AcceptCertificateTransferCommand,
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

export type AcceptCertificateTransferCommandInput = AcceptCertificateTransferRequest;
export type AcceptCertificateTransferCommandOutput = __MetadataBearer;

/**
 * <p>Accepts a pending certificate transfer. The default state of the certificate is
 *          INACTIVE.</p>
 *          <p>To check for pending certificate transfers, call <a>ListCertificates</a>
 *          to enumerate your certificates.</p>
 */
export class AcceptCertificateTransferCommand extends $Command<
  AcceptCertificateTransferCommandInput,
  AcceptCertificateTransferCommandOutput,
  IoTClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AcceptCertificateTransferCommandInput) {
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
  ): Handler<AcceptCertificateTransferCommandInput, AcceptCertificateTransferCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "AcceptCertificateTransferCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AcceptCertificateTransferRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AcceptCertificateTransferCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1AcceptCertificateTransferCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AcceptCertificateTransferCommandOutput> {
    return deserializeAws_restJson1AcceptCertificateTransferCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
