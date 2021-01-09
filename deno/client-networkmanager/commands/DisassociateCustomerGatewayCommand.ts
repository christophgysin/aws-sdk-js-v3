import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient.ts";
import { DisassociateCustomerGatewayRequest, DisassociateCustomerGatewayResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DisassociateCustomerGatewayCommand,
  serializeAws_restJson1DisassociateCustomerGatewayCommand,
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

export type DisassociateCustomerGatewayCommandInput = DisassociateCustomerGatewayRequest;
export type DisassociateCustomerGatewayCommandOutput = DisassociateCustomerGatewayResponse & __MetadataBearer;

/**
 * <p>Disassociates a customer gateway from a device and a link.</p>
 */
export class DisassociateCustomerGatewayCommand extends $Command<
  DisassociateCustomerGatewayCommandInput,
  DisassociateCustomerGatewayCommandOutput,
  NetworkManagerClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateCustomerGatewayCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NetworkManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateCustomerGatewayCommandInput, DisassociateCustomerGatewayCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkManagerClient";
    const commandName = "DisassociateCustomerGatewayCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateCustomerGatewayRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateCustomerGatewayResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisassociateCustomerGatewayCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DisassociateCustomerGatewayCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateCustomerGatewayCommandOutput> {
    return deserializeAws_restJson1DisassociateCustomerGatewayCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
