import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient.ts";
import { MergeBranchesByFastForwardInput, MergeBranchesByFastForwardOutput } from "../models/models_1.ts";
import {
  deserializeAws_json1_1MergeBranchesByFastForwardCommand,
  serializeAws_json1_1MergeBranchesByFastForwardCommand,
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

export interface MergeBranchesByFastForwardCommandInput extends MergeBranchesByFastForwardInput {}
export interface MergeBranchesByFastForwardCommandOutput extends MergeBranchesByFastForwardOutput, __MetadataBearer {}

/**
 * <p>Merges two branches using the fast-forward merge strategy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, MergeBranchesByFastForwardCommand } from "../../client-codecommit/mod.ts";
 * // const { CodeCommitClient, MergeBranchesByFastForwardCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new MergeBranchesByFastForwardCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link MergeBranchesByFastForwardCommandInput} for command's `input` shape.
 * @see {@link MergeBranchesByFastForwardCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class MergeBranchesByFastForwardCommand extends $Command<
  MergeBranchesByFastForwardCommandInput,
  MergeBranchesByFastForwardCommandOutput,
  CodeCommitClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: MergeBranchesByFastForwardCommandInput) {
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
  ): Handler<MergeBranchesByFastForwardCommandInput, MergeBranchesByFastForwardCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "MergeBranchesByFastForwardCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: MergeBranchesByFastForwardInput.filterSensitiveLog,
      outputFilterSensitiveLog: MergeBranchesByFastForwardOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: MergeBranchesByFastForwardCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1MergeBranchesByFastForwardCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<MergeBranchesByFastForwardCommandOutput> {
    return deserializeAws_json1_1MergeBranchesByFastForwardCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
