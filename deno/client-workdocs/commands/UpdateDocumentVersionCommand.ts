import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient.ts";
import { UpdateDocumentVersionRequest } from "../models/models_0.ts";
import {
  deserializeAws_restJson1UpdateDocumentVersionCommand,
  serializeAws_restJson1UpdateDocumentVersionCommand,
} from "../protocols/Aws_restJson1.ts";
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

export interface UpdateDocumentVersionCommandInput extends UpdateDocumentVersionRequest {}
export interface UpdateDocumentVersionCommandOutput extends __MetadataBearer {}

/**
 * <p>Changes the status of the document version to ACTIVE. </p>
 *         <p>Amazon WorkDocs also sets its document container to ACTIVE. This is the last step
 *             in a document upload, after the client uploads the document to an S3-presigned URL
 *             returned by <a>InitiateDocumentVersionUpload</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, UpdateDocumentVersionCommand } from "../../client-workdocs/mod.ts";
 * // const { WorkDocsClient, UpdateDocumentVersionCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new UpdateDocumentVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDocumentVersionCommandInput} for command's `input` shape.
 * @see {@link UpdateDocumentVersionCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateDocumentVersionCommand extends $Command<
  UpdateDocumentVersionCommandInput,
  UpdateDocumentVersionCommandOutput,
  WorkDocsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateDocumentVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkDocsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateDocumentVersionCommandInput, UpdateDocumentVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkDocsClient";
    const commandName = "UpdateDocumentVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateDocumentVersionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateDocumentVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateDocumentVersionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateDocumentVersionCommandOutput> {
    return deserializeAws_restJson1UpdateDocumentVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
