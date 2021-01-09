import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient.ts";
import { MergeBranchesBySquashInput, MergeBranchesBySquashOutput } from "../models/models_1.ts";
import {
  deserializeAws_json1_1MergeBranchesBySquashCommand,
  serializeAws_json1_1MergeBranchesBySquashCommand,
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

export type MergeBranchesBySquashCommandInput = MergeBranchesBySquashInput;
export type MergeBranchesBySquashCommandOutput = MergeBranchesBySquashOutput & __MetadataBearer;

/**
 * <p>Merges two branches using the squash merge strategy.</p>
 */
export class MergeBranchesBySquashCommand extends $Command<
  MergeBranchesBySquashCommandInput,
  MergeBranchesBySquashCommandOutput,
  CodeCommitClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: MergeBranchesBySquashCommandInput) {
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
  ): Handler<MergeBranchesBySquashCommandInput, MergeBranchesBySquashCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "MergeBranchesBySquashCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: MergeBranchesBySquashInput.filterSensitiveLog,
      outputFilterSensitiveLog: MergeBranchesBySquashOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: MergeBranchesBySquashCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1MergeBranchesBySquashCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<MergeBranchesBySquashCommandOutput> {
    return deserializeAws_json1_1MergeBranchesBySquashCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
