import { PinpointEmailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointEmailClient.ts";
import { GetDedicatedIpRequest, GetDedicatedIpResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetDedicatedIpCommand,
  serializeAws_restJson1GetDedicatedIpCommand,
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

export interface GetDedicatedIpCommandInput extends GetDedicatedIpRequest {}
export interface GetDedicatedIpCommandOutput extends GetDedicatedIpResponse, __MetadataBearer {}

/**
 * <p>Get information about a dedicated IP address, including the name of the dedicated IP
 *             pool that it's associated with, as well information about the automatic warm-up process
 *             for the address.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, GetDedicatedIpCommand } from "../../client-pinpoint-email/mod.ts";
 * // const { PinpointEmailClient, GetDedicatedIpCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * const client = new PinpointEmailClient(config);
 * const command = new GetDedicatedIpCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDedicatedIpCommandInput} for command's `input` shape.
 * @see {@link GetDedicatedIpCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetDedicatedIpCommand extends $Command<
  GetDedicatedIpCommandInput,
  GetDedicatedIpCommandOutput,
  PinpointEmailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetDedicatedIpCommandInput) {
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
  ): Handler<GetDedicatedIpCommandInput, GetDedicatedIpCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointEmailClient";
    const commandName = "GetDedicatedIpCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDedicatedIpRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetDedicatedIpResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDedicatedIpCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetDedicatedIpCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDedicatedIpCommandOutput> {
    return deserializeAws_restJson1GetDedicatedIpCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
