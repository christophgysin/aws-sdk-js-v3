import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient.ts";
import { AdminConfirmSignUpRequest, AdminConfirmSignUpResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1AdminConfirmSignUpCommand,
  serializeAws_json1_1AdminConfirmSignUpCommand,
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

export interface AdminConfirmSignUpCommandInput extends AdminConfirmSignUpRequest {}
export interface AdminConfirmSignUpCommandOutput extends AdminConfirmSignUpResponse, __MetadataBearer {}

/**
 * <p>Confirms user registration as an admin without using a confirmation code. Works on any
 *             user.</p>
 *         <p>Calling this action requires developer credentials.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminConfirmSignUpCommand } from "../../client-cognito-identity-provider/mod.ts";
 * // const { CognitoIdentityProviderClient, AdminConfirmSignUpCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new AdminConfirmSignUpCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AdminConfirmSignUpCommandInput} for command's `input` shape.
 * @see {@link AdminConfirmSignUpCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class AdminConfirmSignUpCommand extends $Command<
  AdminConfirmSignUpCommandInput,
  AdminConfirmSignUpCommandOutput,
  CognitoIdentityProviderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AdminConfirmSignUpCommandInput) {
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
  ): Handler<AdminConfirmSignUpCommandInput, AdminConfirmSignUpCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "AdminConfirmSignUpCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AdminConfirmSignUpRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AdminConfirmSignUpResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AdminConfirmSignUpCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AdminConfirmSignUpCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AdminConfirmSignUpCommandOutput> {
    return deserializeAws_json1_1AdminConfirmSignUpCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
