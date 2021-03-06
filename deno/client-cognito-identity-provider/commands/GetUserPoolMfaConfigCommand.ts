import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient.ts";
import { GetUserPoolMfaConfigRequest, GetUserPoolMfaConfigResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetUserPoolMfaConfigCommand,
  serializeAws_json1_1GetUserPoolMfaConfigCommand,
} from "../protocols/Aws_json1_1.ts";
import { getSerdePlugin } from "../../middleware-serde/mod.ts";
import { getAwsAuthPlugin } from "../../middleware-signing/mod.ts";
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

export interface GetUserPoolMfaConfigCommandInput extends GetUserPoolMfaConfigRequest {}
export interface GetUserPoolMfaConfigCommandOutput extends GetUserPoolMfaConfigResponse, __MetadataBearer {}

/**
 * <p>Gets the user pool multi-factor authentication (MFA) configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, GetUserPoolMfaConfigCommand } from "../../client-cognito-identity-provider/mod.ts";
 * // const { CognitoIdentityProviderClient, GetUserPoolMfaConfigCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new GetUserPoolMfaConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetUserPoolMfaConfigCommandInput} for command's `input` shape.
 * @see {@link GetUserPoolMfaConfigCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetUserPoolMfaConfigCommand extends $Command<
  GetUserPoolMfaConfigCommandInput,
  GetUserPoolMfaConfigCommandOutput,
  CognitoIdentityProviderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetUserPoolMfaConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityProviderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetUserPoolMfaConfigCommandInput, GetUserPoolMfaConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "GetUserPoolMfaConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetUserPoolMfaConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetUserPoolMfaConfigResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetUserPoolMfaConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetUserPoolMfaConfigCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetUserPoolMfaConfigCommandOutput> {
    return deserializeAws_json1_1GetUserPoolMfaConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
