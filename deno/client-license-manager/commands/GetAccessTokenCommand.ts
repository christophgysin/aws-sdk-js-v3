import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient.ts";
import { GetAccessTokenRequest, GetAccessTokenResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetAccessTokenCommand,
  serializeAws_json1_1GetAccessTokenCommand,
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

export interface GetAccessTokenCommandInput extends GetAccessTokenRequest {}
export interface GetAccessTokenCommandOutput extends GetAccessTokenResponse, __MetadataBearer {}

/**
 * <p>Gets a temporary access token to use with AssumeRoleWithWebIdentity. Access tokens
 *           are valid for one hour.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, GetAccessTokenCommand } from "../../client-license-manager/mod.ts";
 * // const { LicenseManagerClient, GetAccessTokenCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new GetAccessTokenCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAccessTokenCommandInput} for command's `input` shape.
 * @see {@link GetAccessTokenCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetAccessTokenCommand extends $Command<
  GetAccessTokenCommandInput,
  GetAccessTokenCommandOutput,
  LicenseManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetAccessTokenCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LicenseManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAccessTokenCommandInput, GetAccessTokenCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LicenseManagerClient";
    const commandName = "GetAccessTokenCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetAccessTokenRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetAccessTokenResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetAccessTokenCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetAccessTokenCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAccessTokenCommandOutput> {
    return deserializeAws_json1_1GetAccessTokenCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
