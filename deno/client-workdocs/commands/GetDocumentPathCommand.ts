import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient.ts";
import { GetDocumentPathRequest, GetDocumentPathResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetDocumentPathCommand,
  serializeAws_restJson1GetDocumentPathCommand,
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

export interface GetDocumentPathCommandInput extends GetDocumentPathRequest {}
export interface GetDocumentPathCommandOutput extends GetDocumentPathResponse, __MetadataBearer {}

/**
 * <p>Retrieves the path information (the hierarchy from the root folder) for the
 *             requested document.</p>
 *         <p>By default, Amazon WorkDocs returns a maximum of 100 levels upwards from the
 *             requested document and only includes the IDs of the parent folders in the path. You can
 *             limit the maximum number of levels. You can also request the names of the parent
 *             folders.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, GetDocumentPathCommand } from "../../client-workdocs/mod.ts";
 * // const { WorkDocsClient, GetDocumentPathCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new GetDocumentPathCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDocumentPathCommandInput} for command's `input` shape.
 * @see {@link GetDocumentPathCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetDocumentPathCommand extends $Command<
  GetDocumentPathCommandInput,
  GetDocumentPathCommandOutput,
  WorkDocsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetDocumentPathCommandInput) {
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
  ): Handler<GetDocumentPathCommandInput, GetDocumentPathCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkDocsClient";
    const commandName = "GetDocumentPathCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDocumentPathRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetDocumentPathResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDocumentPathCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetDocumentPathCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDocumentPathCommandOutput> {
    return deserializeAws_restJson1GetDocumentPathCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
