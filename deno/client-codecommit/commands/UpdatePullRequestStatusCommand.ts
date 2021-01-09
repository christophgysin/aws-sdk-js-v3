import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient.ts";
import { UpdatePullRequestStatusInput, UpdatePullRequestStatusOutput } from "../models/models_1.ts";
import {
  deserializeAws_json1_1UpdatePullRequestStatusCommand,
  serializeAws_json1_1UpdatePullRequestStatusCommand,
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

export type UpdatePullRequestStatusCommandInput = UpdatePullRequestStatusInput;
export type UpdatePullRequestStatusCommandOutput = UpdatePullRequestStatusOutput & __MetadataBearer;

/**
 * <p>Updates the status of a pull request. </p>
 */
export class UpdatePullRequestStatusCommand extends $Command<
  UpdatePullRequestStatusCommandInput,
  UpdatePullRequestStatusCommandOutput,
  CodeCommitClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdatePullRequestStatusCommandInput) {
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
  ): Handler<UpdatePullRequestStatusCommandInput, UpdatePullRequestStatusCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "UpdatePullRequestStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdatePullRequestStatusInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdatePullRequestStatusOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdatePullRequestStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdatePullRequestStatusCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdatePullRequestStatusCommandOutput> {
    return deserializeAws_json1_1UpdatePullRequestStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
