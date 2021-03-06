import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient.ts";
import { GetAdministratorAccountRequest, GetAdministratorAccountResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1GetAdministratorAccountCommand,
  serializeAws_restJson1GetAdministratorAccountCommand,
} from "../protocols/Aws_restJson1.ts";
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

export interface GetAdministratorAccountCommandInput extends GetAdministratorAccountRequest {}
export interface GetAdministratorAccountCommandOutput extends GetAdministratorAccountResponse, __MetadataBearer {}

/**
 * <p>Provides the details for the Security Hub administrator account for the current member account.</p>
 *          <p>Can be used by both member accounts that are managed using Organizations and accounts that were
 *          invited manually.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, GetAdministratorAccountCommand } from "../../client-securityhub/mod.ts";
 * // const { SecurityHubClient, GetAdministratorAccountCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new GetAdministratorAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAdministratorAccountCommandInput} for command's `input` shape.
 * @see {@link GetAdministratorAccountCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetAdministratorAccountCommand extends $Command<
  GetAdministratorAccountCommandInput,
  GetAdministratorAccountCommandOutput,
  SecurityHubClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetAdministratorAccountCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAdministratorAccountCommandInput, GetAdministratorAccountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "GetAdministratorAccountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetAdministratorAccountRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetAdministratorAccountResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetAdministratorAccountCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetAdministratorAccountCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAdministratorAccountCommandOutput> {
    return deserializeAws_restJson1GetAdministratorAccountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
