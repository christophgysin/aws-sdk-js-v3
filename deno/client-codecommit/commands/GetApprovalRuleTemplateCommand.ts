import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient.ts";
import { GetApprovalRuleTemplateInput, GetApprovalRuleTemplateOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetApprovalRuleTemplateCommand,
  serializeAws_json1_1GetApprovalRuleTemplateCommand,
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

export interface GetApprovalRuleTemplateCommandInput extends GetApprovalRuleTemplateInput {}
export interface GetApprovalRuleTemplateCommandOutput extends GetApprovalRuleTemplateOutput, __MetadataBearer {}

/**
 * <p>Returns information about a specified approval rule template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, GetApprovalRuleTemplateCommand } from "../../client-codecommit/mod.ts";
 * // const { CodeCommitClient, GetApprovalRuleTemplateCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new GetApprovalRuleTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetApprovalRuleTemplateCommandInput} for command's `input` shape.
 * @see {@link GetApprovalRuleTemplateCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetApprovalRuleTemplateCommand extends $Command<
  GetApprovalRuleTemplateCommandInput,
  GetApprovalRuleTemplateCommandOutput,
  CodeCommitClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetApprovalRuleTemplateCommandInput) {
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
  ): Handler<GetApprovalRuleTemplateCommandInput, GetApprovalRuleTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "GetApprovalRuleTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetApprovalRuleTemplateInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetApprovalRuleTemplateOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetApprovalRuleTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetApprovalRuleTemplateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetApprovalRuleTemplateCommandOutput> {
    return deserializeAws_json1_1GetApprovalRuleTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
