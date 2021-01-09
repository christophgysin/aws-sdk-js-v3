import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient.ts";
import { AdminResetUserPasswordRequest, AdminResetUserPasswordResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1AdminResetUserPasswordCommand,
  serializeAws_json1_1AdminResetUserPasswordCommand,
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

export type AdminResetUserPasswordCommandInput = AdminResetUserPasswordRequest;
export type AdminResetUserPasswordCommandOutput = AdminResetUserPasswordResponse & __MetadataBearer;

/**
 * <p>Resets the specified user's password in a user pool as an administrator. Works on any
 *             user.</p>
 *         <p>When a developer calls this API, the current password is invalidated, so it must be
 *             changed. If a user tries to sign in after the API is called, the app will get a
 *             PasswordResetRequiredException exception back and should direct the user down the flow
 *             to reset the password, which is the same as the forgot password flow. In addition, if
 *             the user pool has phone verification selected and a verified phone number exists for the
 *             user, or if email verification is selected and a verified email exists for the user,
 *             calling this API will also result in sending a message to the end user with the code to
 *             change their password.</p>
 *         <p>Calling this action requires developer credentials.</p>
 */
export class AdminResetUserPasswordCommand extends $Command<
  AdminResetUserPasswordCommandInput,
  AdminResetUserPasswordCommandOutput,
  CognitoIdentityProviderClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AdminResetUserPasswordCommandInput) {
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
  ): Handler<AdminResetUserPasswordCommandInput, AdminResetUserPasswordCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.middlewareStack.use(getAwsAuthPlugin(configuration));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "AdminResetUserPasswordCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AdminResetUserPasswordRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AdminResetUserPasswordResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AdminResetUserPasswordCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AdminResetUserPasswordCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AdminResetUserPasswordCommandOutput> {
    return deserializeAws_json1_1AdminResetUserPasswordCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
