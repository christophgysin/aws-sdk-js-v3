import { CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityClient.ts";
import { UnlinkIdentityInput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1UnlinkIdentityCommand,
  serializeAws_json1_1UnlinkIdentityCommand,
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

export interface UnlinkIdentityCommandInput extends UnlinkIdentityInput {}
export interface UnlinkIdentityCommandOutput extends __MetadataBearer {}

/**
 * <p>Unlinks a federated identity from an existing account. Unlinked logins will be
 *          considered new identities next time they are seen. Removing the last linked login will make
 *          this identity inaccessible.</p>
 *          <p>This is a public API. You do not need any credentials to call this API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, UnlinkIdentityCommand } from "../../client-cognito-identity/mod.ts";
 * // const { CognitoIdentityClient, UnlinkIdentityCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * const client = new CognitoIdentityClient(config);
 * const command = new UnlinkIdentityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UnlinkIdentityCommandInput} for command's `input` shape.
 * @see {@link UnlinkIdentityCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UnlinkIdentityCommand extends $Command<
  UnlinkIdentityCommandInput,
  UnlinkIdentityCommandOutput,
  CognitoIdentityClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UnlinkIdentityCommandInput) {
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
  ): Handler<UnlinkIdentityCommandInput, UnlinkIdentityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityClient";
    const commandName = "UnlinkIdentityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UnlinkIdentityInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UnlinkIdentityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UnlinkIdentityCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UnlinkIdentityCommandOutput> {
    return deserializeAws_json1_1UnlinkIdentityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
