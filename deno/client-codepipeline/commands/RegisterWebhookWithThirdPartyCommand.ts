import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient.ts";
import { RegisterWebhookWithThirdPartyInput, RegisterWebhookWithThirdPartyOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1RegisterWebhookWithThirdPartyCommand,
  serializeAws_json1_1RegisterWebhookWithThirdPartyCommand,
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

export interface RegisterWebhookWithThirdPartyCommandInput extends RegisterWebhookWithThirdPartyInput {}
export interface RegisterWebhookWithThirdPartyCommandOutput
  extends RegisterWebhookWithThirdPartyOutput,
    __MetadataBearer {}

/**
 * <p>Configures a connection between the webhook that was created and the external tool
 *             with events to be detected.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, RegisterWebhookWithThirdPartyCommand } from "../../client-codepipeline/mod.ts";
 * // const { CodePipelineClient, RegisterWebhookWithThirdPartyCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new RegisterWebhookWithThirdPartyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterWebhookWithThirdPartyCommandInput} for command's `input` shape.
 * @see {@link RegisterWebhookWithThirdPartyCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class RegisterWebhookWithThirdPartyCommand extends $Command<
  RegisterWebhookWithThirdPartyCommandInput,
  RegisterWebhookWithThirdPartyCommandOutput,
  CodePipelineClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RegisterWebhookWithThirdPartyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodePipelineClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RegisterWebhookWithThirdPartyCommandInput, RegisterWebhookWithThirdPartyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodePipelineClient";
    const commandName = "RegisterWebhookWithThirdPartyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RegisterWebhookWithThirdPartyInput.filterSensitiveLog,
      outputFilterSensitiveLog: RegisterWebhookWithThirdPartyOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RegisterWebhookWithThirdPartyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RegisterWebhookWithThirdPartyCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RegisterWebhookWithThirdPartyCommandOutput> {
    return deserializeAws_json1_1RegisterWebhookWithThirdPartyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
