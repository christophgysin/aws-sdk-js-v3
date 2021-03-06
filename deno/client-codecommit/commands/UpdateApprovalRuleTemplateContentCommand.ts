import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient.ts";
import { UpdateApprovalRuleTemplateContentInput, UpdateApprovalRuleTemplateContentOutput } from "../models/models_1.ts";
import {
  deserializeAws_json1_1UpdateApprovalRuleTemplateContentCommand,
  serializeAws_json1_1UpdateApprovalRuleTemplateContentCommand,
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

export interface UpdateApprovalRuleTemplateContentCommandInput extends UpdateApprovalRuleTemplateContentInput {}
export interface UpdateApprovalRuleTemplateContentCommandOutput
  extends UpdateApprovalRuleTemplateContentOutput,
    __MetadataBearer {}

/**
 * <p>Updates the content of an approval rule template. You can change the number of
 *             required approvals, the membership of the approval rule, and whether an approval pool is
 *             defined.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, UpdateApprovalRuleTemplateContentCommand } from "../../client-codecommit/mod.ts";
 * // const { CodeCommitClient, UpdateApprovalRuleTemplateContentCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new UpdateApprovalRuleTemplateContentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateApprovalRuleTemplateContentCommandInput} for command's `input` shape.
 * @see {@link UpdateApprovalRuleTemplateContentCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateApprovalRuleTemplateContentCommand extends $Command<
  UpdateApprovalRuleTemplateContentCommandInput,
  UpdateApprovalRuleTemplateContentCommandOutput,
  CodeCommitClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateApprovalRuleTemplateContentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeCommitClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateApprovalRuleTemplateContentCommandInput, UpdateApprovalRuleTemplateContentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "UpdateApprovalRuleTemplateContentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateApprovalRuleTemplateContentInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateApprovalRuleTemplateContentOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateApprovalRuleTemplateContentCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateApprovalRuleTemplateContentCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateApprovalRuleTemplateContentCommandOutput> {
    return deserializeAws_json1_1UpdateApprovalRuleTemplateContentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
