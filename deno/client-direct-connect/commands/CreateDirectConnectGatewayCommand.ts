import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient.ts";
import { CreateDirectConnectGatewayRequest, CreateDirectConnectGatewayResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1CreateDirectConnectGatewayCommand,
  serializeAws_json1_1CreateDirectConnectGatewayCommand,
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

export type CreateDirectConnectGatewayCommandInput = CreateDirectConnectGatewayRequest;
export type CreateDirectConnectGatewayCommandOutput = CreateDirectConnectGatewayResult & __MetadataBearer;

/**
 * <p>Creates a Direct Connect gateway, which is an intermediate object that enables you to connect a set
 *       of virtual interfaces and virtual private gateways. A Direct Connect gateway is global and visible in any
 *       AWS Region after it is created. The virtual interfaces and virtual private gateways that
 *       are connected through a Direct Connect gateway can be in different AWS Regions. This enables you to
 *       connect to a VPC in any Region, regardless of the Region in which the virtual interfaces
 *       are located, and pass traffic between them.</p>
 */
export class CreateDirectConnectGatewayCommand extends $Command<
  CreateDirectConnectGatewayCommandInput,
  CreateDirectConnectGatewayCommandOutput,
  DirectConnectClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateDirectConnectGatewayCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDirectConnectGatewayCommandInput, CreateDirectConnectGatewayCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "CreateDirectConnectGatewayCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDirectConnectGatewayRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateDirectConnectGatewayResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDirectConnectGatewayCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateDirectConnectGatewayCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateDirectConnectGatewayCommandOutput> {
    return deserializeAws_json1_1CreateDirectConnectGatewayCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
