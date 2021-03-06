import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient.ts";
import {
  BatchAssociateApprovalRuleTemplateWithRepositoriesInput,
  BatchAssociateApprovalRuleTemplateWithRepositoriesOutput,
} from "../models/models_0.ts";
import {
  deserializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesCommand,
  serializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesCommand,
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

export interface BatchAssociateApprovalRuleTemplateWithRepositoriesCommandInput
  extends BatchAssociateApprovalRuleTemplateWithRepositoriesInput {}
export interface BatchAssociateApprovalRuleTemplateWithRepositoriesCommandOutput
  extends BatchAssociateApprovalRuleTemplateWithRepositoriesOutput,
    __MetadataBearer {}

/**
 * <p>Creates an association between an approval rule template and one or more specified repositories. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, BatchAssociateApprovalRuleTemplateWithRepositoriesCommand } from "../../client-codecommit/mod.ts";
 * // const { CodeCommitClient, BatchAssociateApprovalRuleTemplateWithRepositoriesCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new BatchAssociateApprovalRuleTemplateWithRepositoriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchAssociateApprovalRuleTemplateWithRepositoriesCommandInput} for command's `input` shape.
 * @see {@link BatchAssociateApprovalRuleTemplateWithRepositoriesCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class BatchAssociateApprovalRuleTemplateWithRepositoriesCommand extends $Command<
  BatchAssociateApprovalRuleTemplateWithRepositoriesCommandInput,
  BatchAssociateApprovalRuleTemplateWithRepositoriesCommandOutput,
  CodeCommitClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchAssociateApprovalRuleTemplateWithRepositoriesCommandInput) {
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
  ): Handler<
    BatchAssociateApprovalRuleTemplateWithRepositoriesCommandInput,
    BatchAssociateApprovalRuleTemplateWithRepositoriesCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "BatchAssociateApprovalRuleTemplateWithRepositoriesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchAssociateApprovalRuleTemplateWithRepositoriesInput.filterSensitiveLog,
      outputFilterSensitiveLog: BatchAssociateApprovalRuleTemplateWithRepositoriesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: BatchAssociateApprovalRuleTemplateWithRepositoriesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchAssociateApprovalRuleTemplateWithRepositoriesCommandOutput> {
    return deserializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
