
import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient.ts";
import { GetPullRequestApprovalStatesInput, GetPullRequestApprovalStatesOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetPullRequestApprovalStatesCommand,
  serializeAws_json1_1GetPullRequestApprovalStatesCommand,
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

export type GetPullRequestApprovalStatesCommandInput = GetPullRequestApprovalStatesInput;
export type GetPullRequestApprovalStatesCommandOutput = GetPullRequestApprovalStatesOutput & __MetadataBearer;

export class GetPullRequestApprovalStatesCommand extends $Command<
  GetPullRequestApprovalStatesCommandInput,
  GetPullRequestApprovalStatesCommandOutput,
  CodeCommitClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetPullRequestApprovalStatesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeCommitClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetPullRequestApprovalStatesCommandInput, GetPullRequestApprovalStatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: GetPullRequestApprovalStatesInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetPullRequestApprovalStatesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetPullRequestApprovalStatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetPullRequestApprovalStatesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetPullRequestApprovalStatesCommandOutput> {
    return deserializeAws_json1_1GetPullRequestApprovalStatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
