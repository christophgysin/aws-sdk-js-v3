import { CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityClient.ts";
import { GetPrincipalTagAttributeMapInput, GetPrincipalTagAttributeMapResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetPrincipalTagAttributeMapCommand,
  serializeAws_json1_1GetPrincipalTagAttributeMapCommand,
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

export interface GetPrincipalTagAttributeMapCommandInput extends GetPrincipalTagAttributeMapInput {}
export interface GetPrincipalTagAttributeMapCommandOutput
  extends GetPrincipalTagAttributeMapResponse,
    __MetadataBearer {}

/**
 * <p>Use <code>GetPrincipalTagAttributeMap</code> to list all mappings between <code>PrincipalTags</code> and user attributes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, GetPrincipalTagAttributeMapCommand } from "../../client-cognito-identity/mod.ts";
 * // const { CognitoIdentityClient, GetPrincipalTagAttributeMapCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * const client = new CognitoIdentityClient(config);
 * const command = new GetPrincipalTagAttributeMapCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPrincipalTagAttributeMapCommandInput} for command's `input` shape.
 * @see {@link GetPrincipalTagAttributeMapCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetPrincipalTagAttributeMapCommand extends $Command<
  GetPrincipalTagAttributeMapCommandInput,
  GetPrincipalTagAttributeMapCommandOutput,
  CognitoIdentityClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetPrincipalTagAttributeMapCommandInput) {
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
  ): Handler<GetPrincipalTagAttributeMapCommandInput, GetPrincipalTagAttributeMapCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityClient";
    const commandName = "GetPrincipalTagAttributeMapCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetPrincipalTagAttributeMapInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetPrincipalTagAttributeMapResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetPrincipalTagAttributeMapCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetPrincipalTagAttributeMapCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetPrincipalTagAttributeMapCommandOutput> {
    return deserializeAws_json1_1GetPrincipalTagAttributeMapCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
