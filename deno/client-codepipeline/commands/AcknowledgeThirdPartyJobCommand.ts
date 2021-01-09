import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient.ts";
import { AcknowledgeThirdPartyJobInput, AcknowledgeThirdPartyJobOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1AcknowledgeThirdPartyJobCommand,
  serializeAws_json1_1AcknowledgeThirdPartyJobCommand,
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

export type AcknowledgeThirdPartyJobCommandInput = AcknowledgeThirdPartyJobInput;
export type AcknowledgeThirdPartyJobCommandOutput = AcknowledgeThirdPartyJobOutput & __MetadataBearer;

/**
 * <p>Confirms a job worker has received the specified job. Used for partner actions
 *             only.</p>
 */
export class AcknowledgeThirdPartyJobCommand extends $Command<
  AcknowledgeThirdPartyJobCommandInput,
  AcknowledgeThirdPartyJobCommandOutput,
  CodePipelineClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AcknowledgeThirdPartyJobCommandInput) {
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
  ): Handler<AcknowledgeThirdPartyJobCommandInput, AcknowledgeThirdPartyJobCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodePipelineClient";
    const commandName = "AcknowledgeThirdPartyJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AcknowledgeThirdPartyJobInput.filterSensitiveLog,
      outputFilterSensitiveLog: AcknowledgeThirdPartyJobOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AcknowledgeThirdPartyJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AcknowledgeThirdPartyJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AcknowledgeThirdPartyJobCommandOutput> {
    return deserializeAws_json1_1AcknowledgeThirdPartyJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
