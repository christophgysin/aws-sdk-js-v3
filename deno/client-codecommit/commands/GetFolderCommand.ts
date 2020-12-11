import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient.ts";
import { GetFolderInput, GetFolderOutput } from "../models/models_0.ts";
import { deserializeAws_json1_1GetFolderCommand, serializeAws_json1_1GetFolderCommand } from "../protocols/Aws_json1_1.ts";
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

export type GetFolderCommandInput = GetFolderInput;
export type GetFolderCommandOutput = GetFolderOutput & __MetadataBearer;

/**
 * <p>Returns the contents of a specified folder in a repository.</p>
 */
export class GetFolderCommand extends $Command<
  GetFolderCommandInput,
  GetFolderCommandOutput,
  CodeCommitClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetFolderCommandInput) {
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
  ): Handler<GetFolderCommandInput, GetFolderCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "GetFolderCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetFolderInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetFolderOutput.filterSensitiveLog,
    };

    if (typeof logger.info === "function") {
      logger.info({
        clientName,
        commandName,
      });
    }

    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetFolderCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetFolderCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetFolderCommandOutput> {
    return deserializeAws_json1_1GetFolderCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
