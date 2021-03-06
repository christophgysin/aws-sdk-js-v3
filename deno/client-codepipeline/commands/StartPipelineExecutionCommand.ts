import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient.ts";
import { StartPipelineExecutionInput, StartPipelineExecutionOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1StartPipelineExecutionCommand,
  serializeAws_json1_1StartPipelineExecutionCommand,
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

export interface StartPipelineExecutionCommandInput extends StartPipelineExecutionInput {}
export interface StartPipelineExecutionCommandOutput extends StartPipelineExecutionOutput, __MetadataBearer {}

/**
 * <p>Starts the specified pipeline. Specifically, it begins processing the latest commit
 *             to the source location specified as part of the pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, StartPipelineExecutionCommand } from "../../client-codepipeline/mod.ts";
 * // const { CodePipelineClient, StartPipelineExecutionCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new StartPipelineExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartPipelineExecutionCommandInput} for command's `input` shape.
 * @see {@link StartPipelineExecutionCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class StartPipelineExecutionCommand extends $Command<
  StartPipelineExecutionCommandInput,
  StartPipelineExecutionCommandOutput,
  CodePipelineClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartPipelineExecutionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodePipelineClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartPipelineExecutionCommandInput, StartPipelineExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodePipelineClient";
    const commandName = "StartPipelineExecutionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartPipelineExecutionInput.filterSensitiveLog,
      outputFilterSensitiveLog: StartPipelineExecutionOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartPipelineExecutionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartPipelineExecutionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartPipelineExecutionCommandOutput> {
    return deserializeAws_json1_1StartPipelineExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
