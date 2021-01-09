import { CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityClient.ts";
import { GetCredentialsForIdentityInput, GetCredentialsForIdentityResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetCredentialsForIdentityCommand,
  serializeAws_json1_1GetCredentialsForIdentityCommand,
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

export type GetCredentialsForIdentityCommandInput = GetCredentialsForIdentityInput;
export type GetCredentialsForIdentityCommandOutput = GetCredentialsForIdentityResponse & __MetadataBearer;

/**
 * <p>Returns credentials for the provided identity ID. Any provided logins will be
 *          validated against supported login providers. If the token is for
 *          cognito-identity.amazonaws.com, it will be passed through to AWS Security Token Service
 *          with the appropriate role for the token.</p>
 *          <p>This is a public API. You do not need any credentials to call this API.</p>
 */
export class GetCredentialsForIdentityCommand extends $Command<
  GetCredentialsForIdentityCommandInput,
  GetCredentialsForIdentityCommandOutput,
  CognitoIdentityClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetCredentialsForIdentityCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCredentialsForIdentityCommandInput, GetCredentialsForIdentityCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityClient";
    const commandName = "GetCredentialsForIdentityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetCredentialsForIdentityInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetCredentialsForIdentityResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetCredentialsForIdentityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetCredentialsForIdentityCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetCredentialsForIdentityCommandOutput> {
    return deserializeAws_json1_1GetCredentialsForIdentityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
