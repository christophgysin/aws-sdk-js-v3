import { ServiceInputTypes, ServiceOutputTypes, SignerClientResolvedConfig } from "../SignerClient.ts";
import { RevokeSigningProfileRequest } from "../models/models_0.ts";
import {
  deserializeAws_restJson1RevokeSigningProfileCommand,
  serializeAws_restJson1RevokeSigningProfileCommand,
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

export interface RevokeSigningProfileCommandInput extends RevokeSigningProfileRequest {}
export interface RevokeSigningProfileCommandOutput extends __MetadataBearer {}

/**
 * <p>Changes the state of a signing profile to REVOKED. This indicates that signatures
 * 			generated using the signing profile after an effective start date are no longer
 * 			valid.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, RevokeSigningProfileCommand } from "../../client-signer/mod.ts";
 * // const { SignerClient, RevokeSigningProfileCommand } = require("@aws-sdk/client-signer"); // CommonJS import
 * const client = new SignerClient(config);
 * const command = new RevokeSigningProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RevokeSigningProfileCommandInput} for command's `input` shape.
 * @see {@link RevokeSigningProfileCommandOutput} for command's `response` shape.
 * @see {@link SignerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class RevokeSigningProfileCommand extends $Command<
  RevokeSigningProfileCommandInput,
  RevokeSigningProfileCommandOutput,
  SignerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RevokeSigningProfileCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SignerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RevokeSigningProfileCommandInput, RevokeSigningProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SignerClient";
    const commandName = "RevokeSigningProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RevokeSigningProfileRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RevokeSigningProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RevokeSigningProfileCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RevokeSigningProfileCommandOutput> {
    return deserializeAws_restJson1RevokeSigningProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
