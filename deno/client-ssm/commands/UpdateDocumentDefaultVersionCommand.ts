import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient.ts";
import { UpdateDocumentDefaultVersionRequest, UpdateDocumentDefaultVersionResult } from "../models/models_1.ts";
import {
  deserializeAws_json1_1UpdateDocumentDefaultVersionCommand,
  serializeAws_json1_1UpdateDocumentDefaultVersionCommand,
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

export interface UpdateDocumentDefaultVersionCommandInput extends UpdateDocumentDefaultVersionRequest {}
export interface UpdateDocumentDefaultVersionCommandOutput
  extends UpdateDocumentDefaultVersionResult,
    __MetadataBearer {}

/**
 * <p>Set the default version of a document. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, UpdateDocumentDefaultVersionCommand } from "../../client-ssm/mod.ts";
 * // const { SSMClient, UpdateDocumentDefaultVersionCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new UpdateDocumentDefaultVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDocumentDefaultVersionCommandInput} for command's `input` shape.
 * @see {@link UpdateDocumentDefaultVersionCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateDocumentDefaultVersionCommand extends $Command<
  UpdateDocumentDefaultVersionCommandInput,
  UpdateDocumentDefaultVersionCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateDocumentDefaultVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateDocumentDefaultVersionCommandInput, UpdateDocumentDefaultVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "UpdateDocumentDefaultVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateDocumentDefaultVersionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateDocumentDefaultVersionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateDocumentDefaultVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateDocumentDefaultVersionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateDocumentDefaultVersionCommandOutput> {
    return deserializeAws_json1_1UpdateDocumentDefaultVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
