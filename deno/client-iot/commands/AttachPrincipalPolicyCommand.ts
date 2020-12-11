import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient.ts";
import { AttachPrincipalPolicyRequest } from "../models/models_0.ts";
import {
  deserializeAws_restJson1AttachPrincipalPolicyCommand,
  serializeAws_restJson1AttachPrincipalPolicyCommand,
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

export type AttachPrincipalPolicyCommandInput = AttachPrincipalPolicyRequest;
export type AttachPrincipalPolicyCommandOutput = __MetadataBearer;

/**
 * <p>Attaches the specified policy to the specified principal (certificate or other
 *          credential).</p>
 *          <p>
 *             <b>Note:</b> This API is deprecated. Please use <a>AttachPolicy</a> instead.</p>
 */
export class AttachPrincipalPolicyCommand extends $Command<
  AttachPrincipalPolicyCommandInput,
  AttachPrincipalPolicyCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AttachPrincipalPolicyCommandInput) {
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
  ): Handler<AttachPrincipalPolicyCommandInput, AttachPrincipalPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "AttachPrincipalPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AttachPrincipalPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
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

  private serialize(input: AttachPrincipalPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1AttachPrincipalPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AttachPrincipalPolicyCommandOutput> {
    return deserializeAws_restJson1AttachPrincipalPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
