import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient.ts";
import { UpdateRepositoryNameInput } from "../models/models_1.ts";
import {
  deserializeAws_json1_1UpdateRepositoryNameCommand,
  serializeAws_json1_1UpdateRepositoryNameCommand,
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

export interface UpdateRepositoryNameCommandInput extends UpdateRepositoryNameInput {}
export interface UpdateRepositoryNameCommandOutput extends __MetadataBearer {}

/**
 * <p>Renames a repository. The repository name must be unique across the calling AWS
 *             account. Repository names are limited to 100 alphanumeric, dash, and underscore
 *             characters, and cannot include certain characters. The suffix .git is prohibited. For
 *             more information about the limits on repository names, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/limits.html">Limits</a> in the AWS CodeCommit
 *             User Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, UpdateRepositoryNameCommand } from "../../client-codecommit/mod.ts";
 * // const { CodeCommitClient, UpdateRepositoryNameCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new UpdateRepositoryNameCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRepositoryNameCommandInput} for command's `input` shape.
 * @see {@link UpdateRepositoryNameCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateRepositoryNameCommand extends $Command<
  UpdateRepositoryNameCommandInput,
  UpdateRepositoryNameCommandOutput,
  CodeCommitClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateRepositoryNameCommandInput) {
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
  ): Handler<UpdateRepositoryNameCommandInput, UpdateRepositoryNameCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "UpdateRepositoryNameCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateRepositoryNameInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateRepositoryNameCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateRepositoryNameCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateRepositoryNameCommandOutput> {
    return deserializeAws_json1_1UpdateRepositoryNameCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
