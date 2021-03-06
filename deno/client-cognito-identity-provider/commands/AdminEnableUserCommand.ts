import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient.ts";
import { AdminEnableUserRequest, AdminEnableUserResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1AdminEnableUserCommand,
  serializeAws_json1_1AdminEnableUserCommand,
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

export interface AdminEnableUserCommandInput extends AdminEnableUserRequest {}
export interface AdminEnableUserCommandOutput extends AdminEnableUserResponse, __MetadataBearer {}

/**
 * <p>Enables the specified user as an administrator. Works on any user.</p>
 *         <p>Calling this action requires developer credentials.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminEnableUserCommand } from "../../client-cognito-identity-provider/mod.ts";
 * // const { CognitoIdentityProviderClient, AdminEnableUserCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new AdminEnableUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AdminEnableUserCommandInput} for command's `input` shape.
 * @see {@link AdminEnableUserCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class AdminEnableUserCommand extends $Command<
  AdminEnableUserCommandInput,
  AdminEnableUserCommandOutput,
  CognitoIdentityProviderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AdminEnableUserCommandInput) {
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
  ): Handler<AdminEnableUserCommandInput, AdminEnableUserCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "AdminEnableUserCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AdminEnableUserRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AdminEnableUserResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AdminEnableUserCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AdminEnableUserCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AdminEnableUserCommandOutput> {
    return deserializeAws_json1_1AdminEnableUserCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
