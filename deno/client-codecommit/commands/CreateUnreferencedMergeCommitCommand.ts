import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient.ts";
import { CreateUnreferencedMergeCommitInput, CreateUnreferencedMergeCommitOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1CreateUnreferencedMergeCommitCommand,
  serializeAws_json1_1CreateUnreferencedMergeCommitCommand,
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

export interface CreateUnreferencedMergeCommitCommandInput extends CreateUnreferencedMergeCommitInput {}
export interface CreateUnreferencedMergeCommitCommandOutput
  extends CreateUnreferencedMergeCommitOutput,
    __MetadataBearer {}

/**
 * <p>Creates an unreferenced commit that represents the result of merging two branches
 *             using a specified merge strategy. This can help you determine the outcome of a potential
 *             merge. This API cannot be used with the fast-forward merge strategy because that
 *             strategy does not create a merge commit.</p>
 *         <note>
 *             <p>This unreferenced merge commit
 *         can only be accessed using the GetCommit API or through git commands such as git fetch. To retrieve this commit, you must specify its commit ID or otherwise reference it.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, CreateUnreferencedMergeCommitCommand } from "../../client-codecommit/mod.ts";
 * // const { CodeCommitClient, CreateUnreferencedMergeCommitCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new CreateUnreferencedMergeCommitCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateUnreferencedMergeCommitCommandInput} for command's `input` shape.
 * @see {@link CreateUnreferencedMergeCommitCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateUnreferencedMergeCommitCommand extends $Command<
  CreateUnreferencedMergeCommitCommandInput,
  CreateUnreferencedMergeCommitCommandOutput,
  CodeCommitClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateUnreferencedMergeCommitCommandInput) {
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
  ): Handler<CreateUnreferencedMergeCommitCommandInput, CreateUnreferencedMergeCommitCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "CreateUnreferencedMergeCommitCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateUnreferencedMergeCommitInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateUnreferencedMergeCommitOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateUnreferencedMergeCommitCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateUnreferencedMergeCommitCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateUnreferencedMergeCommitCommandOutput> {
    return deserializeAws_json1_1CreateUnreferencedMergeCommitCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
