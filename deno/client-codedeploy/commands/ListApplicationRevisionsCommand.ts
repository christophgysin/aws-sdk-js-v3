import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient.ts";
import { ListApplicationRevisionsInput, ListApplicationRevisionsOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListApplicationRevisionsCommand,
  serializeAws_json1_1ListApplicationRevisionsCommand,
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

export interface ListApplicationRevisionsCommandInput extends ListApplicationRevisionsInput {}
export interface ListApplicationRevisionsCommandOutput extends ListApplicationRevisionsOutput, __MetadataBearer {}

/**
 * <p>Lists information about revisions for an application.</p>
 */
export class ListApplicationRevisionsCommand extends $Command<
  ListApplicationRevisionsCommandInput,
  ListApplicationRevisionsCommandOutput,
  CodeDeployClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListApplicationRevisionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeDeployClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListApplicationRevisionsCommandInput, ListApplicationRevisionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeDeployClient";
    const commandName = "ListApplicationRevisionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListApplicationRevisionsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListApplicationRevisionsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListApplicationRevisionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListApplicationRevisionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListApplicationRevisionsCommandOutput> {
    return deserializeAws_json1_1ListApplicationRevisionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
