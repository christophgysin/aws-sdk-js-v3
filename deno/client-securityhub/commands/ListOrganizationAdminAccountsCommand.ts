import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient.ts";
import { ListOrganizationAdminAccountsRequest, ListOrganizationAdminAccountsResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1ListOrganizationAdminAccountsCommand,
  serializeAws_restJson1ListOrganizationAdminAccountsCommand,
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

export interface ListOrganizationAdminAccountsCommandInput extends ListOrganizationAdminAccountsRequest {}
export interface ListOrganizationAdminAccountsCommandOutput
  extends ListOrganizationAdminAccountsResponse,
    __MetadataBearer {}

/**
 * <p>Lists the Security Hub administrator accounts. Can only be called by the organization
 *          management account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, ListOrganizationAdminAccountsCommand } from "../../client-securityhub/mod.ts";
 * // const { SecurityHubClient, ListOrganizationAdminAccountsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new ListOrganizationAdminAccountsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListOrganizationAdminAccountsCommandInput} for command's `input` shape.
 * @see {@link ListOrganizationAdminAccountsCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListOrganizationAdminAccountsCommand extends $Command<
  ListOrganizationAdminAccountsCommandInput,
  ListOrganizationAdminAccountsCommandOutput,
  SecurityHubClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListOrganizationAdminAccountsCommandInput) {
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
  ): Handler<ListOrganizationAdminAccountsCommandInput, ListOrganizationAdminAccountsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "ListOrganizationAdminAccountsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListOrganizationAdminAccountsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListOrganizationAdminAccountsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListOrganizationAdminAccountsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListOrganizationAdminAccountsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListOrganizationAdminAccountsCommandOutput> {
    return deserializeAws_restJson1ListOrganizationAdminAccountsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
