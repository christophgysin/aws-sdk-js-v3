import { PinpointEmailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointEmailClient.ts";
import { PutEmailIdentityDkimAttributesRequest, PutEmailIdentityDkimAttributesResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1PutEmailIdentityDkimAttributesCommand,
  serializeAws_restJson1PutEmailIdentityDkimAttributesCommand,
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

export interface PutEmailIdentityDkimAttributesCommandInput extends PutEmailIdentityDkimAttributesRequest {}
export interface PutEmailIdentityDkimAttributesCommandOutput
  extends PutEmailIdentityDkimAttributesResponse,
    __MetadataBearer {}

/**
 * <p>Used to enable or disable DKIM authentication for an email identity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, PutEmailIdentityDkimAttributesCommand } from "../../client-pinpoint-email/mod.ts";
 * // const { PinpointEmailClient, PutEmailIdentityDkimAttributesCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * const client = new PinpointEmailClient(config);
 * const command = new PutEmailIdentityDkimAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutEmailIdentityDkimAttributesCommandInput} for command's `input` shape.
 * @see {@link PutEmailIdentityDkimAttributesCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class PutEmailIdentityDkimAttributesCommand extends $Command<
  PutEmailIdentityDkimAttributesCommandInput,
  PutEmailIdentityDkimAttributesCommandOutput,
  PinpointEmailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutEmailIdentityDkimAttributesCommandInput) {
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
  ): Handler<PutEmailIdentityDkimAttributesCommandInput, PutEmailIdentityDkimAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointEmailClient";
    const commandName = "PutEmailIdentityDkimAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutEmailIdentityDkimAttributesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutEmailIdentityDkimAttributesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: PutEmailIdentityDkimAttributesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1PutEmailIdentityDkimAttributesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutEmailIdentityDkimAttributesCommandOutput> {
    return deserializeAws_restJson1PutEmailIdentityDkimAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
