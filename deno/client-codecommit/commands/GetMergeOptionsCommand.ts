import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient.ts";
import { GetMergeOptionsInput, GetMergeOptionsOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetMergeOptionsCommand,
  serializeAws_json1_1GetMergeOptionsCommand,
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

export interface GetMergeOptionsCommandInput extends GetMergeOptionsInput {}
export interface GetMergeOptionsCommandOutput extends GetMergeOptionsOutput, __MetadataBearer {}

/**
 * <p>Returns information about the merge options available for merging two specified
 *             branches. For details about why a merge option is not available, use GetMergeConflicts
 *             or DescribeMergeConflicts.</p>
 */
export class GetMergeOptionsCommand extends $Command<
  GetMergeOptionsCommandInput,
  GetMergeOptionsCommandOutput,
  CodeCommitClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetMergeOptionsCommandInput) {
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
  ): Handler<GetMergeOptionsCommandInput, GetMergeOptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "GetMergeOptionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetMergeOptionsInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetMergeOptionsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetMergeOptionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetMergeOptionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetMergeOptionsCommandOutput> {
    return deserializeAws_json1_1GetMergeOptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
