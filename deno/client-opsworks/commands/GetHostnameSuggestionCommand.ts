import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient.ts";
import { GetHostnameSuggestionRequest, GetHostnameSuggestionResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetHostnameSuggestionCommand,
  serializeAws_json1_1GetHostnameSuggestionCommand,
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

export interface GetHostnameSuggestionCommandInput extends GetHostnameSuggestionRequest {}
export interface GetHostnameSuggestionCommandOutput extends GetHostnameSuggestionResult, __MetadataBearer {}

/**
 * <p>Gets a generated host name for the specified layer, based on the current host name theme.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
 *       level for the stack, or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, GetHostnameSuggestionCommand } from "../../client-opsworks/mod.ts";
 * // const { OpsWorksClient, GetHostnameSuggestionCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new GetHostnameSuggestionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetHostnameSuggestionCommandInput} for command's `input` shape.
 * @see {@link GetHostnameSuggestionCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetHostnameSuggestionCommand extends $Command<
  GetHostnameSuggestionCommandInput,
  GetHostnameSuggestionCommandOutput,
  OpsWorksClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetHostnameSuggestionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpsWorksClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetHostnameSuggestionCommandInput, GetHostnameSuggestionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpsWorksClient";
    const commandName = "GetHostnameSuggestionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetHostnameSuggestionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetHostnameSuggestionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetHostnameSuggestionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetHostnameSuggestionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetHostnameSuggestionCommandOutput> {
    return deserializeAws_json1_1GetHostnameSuggestionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
