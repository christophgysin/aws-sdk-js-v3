import { AmplifyBackendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyBackendClient.ts";
import { UpdateBackendAuthRequest, UpdateBackendAuthResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1UpdateBackendAuthCommand,
  serializeAws_restJson1UpdateBackendAuthCommand,
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

export interface UpdateBackendAuthCommandInput extends UpdateBackendAuthRequest {}
export interface UpdateBackendAuthCommandOutput extends UpdateBackendAuthResponse, __MetadataBearer {}

/**
 * <p>Updates an existing backend authentication resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, UpdateBackendAuthCommand } from "../../client-amplifybackend/mod.ts";
 * // const { AmplifyBackendClient, UpdateBackendAuthCommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * const client = new AmplifyBackendClient(config);
 * const command = new UpdateBackendAuthCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateBackendAuthCommandInput} for command's `input` shape.
 * @see {@link UpdateBackendAuthCommandOutput} for command's `response` shape.
 * @see {@link AmplifyBackendClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateBackendAuthCommand extends $Command<
  UpdateBackendAuthCommandInput,
  UpdateBackendAuthCommandOutput,
  AmplifyBackendClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateBackendAuthCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AmplifyBackendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateBackendAuthCommandInput, UpdateBackendAuthCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmplifyBackendClient";
    const commandName = "UpdateBackendAuthCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateBackendAuthRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateBackendAuthResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateBackendAuthCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateBackendAuthCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateBackendAuthCommandOutput> {
    return deserializeAws_restJson1UpdateBackendAuthCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
