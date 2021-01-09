import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient.ts";
import { SignUpRequest, SignUpResponse } from "../models/models_0.ts";
import { deserializeAws_json1_1SignUpCommand, serializeAws_json1_1SignUpCommand } from "../protocols/Aws_json1_1.ts";
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

export type SignUpCommandInput = SignUpRequest;
export type SignUpCommandOutput = SignUpResponse & __MetadataBearer;

/**
 * <p>Registers the user in the specified user pool and creates a user name, password, and
 *             user attributes.</p>
 */
export class SignUpCommand extends $Command<
  SignUpCommandInput,
  SignUpCommandOutput,
  CognitoIdentityProviderClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SignUpCommandInput) {
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
  ): Handler<SignUpCommandInput, SignUpCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "SignUpCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SignUpRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SignUpResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SignUpCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1SignUpCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SignUpCommandOutput> {
    return deserializeAws_json1_1SignUpCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
