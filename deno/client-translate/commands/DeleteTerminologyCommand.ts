import { ServiceInputTypes, ServiceOutputTypes, TranslateClientResolvedConfig } from "../TranslateClient.ts";
import { DeleteTerminologyRequest } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DeleteTerminologyCommand,
  serializeAws_json1_1DeleteTerminologyCommand,
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

export interface DeleteTerminologyCommandInput extends DeleteTerminologyRequest {}
export interface DeleteTerminologyCommandOutput extends __MetadataBearer {}

/**
 * <p>A synchronous action that deletes a custom terminology.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranslateClient, DeleteTerminologyCommand } from "../../client-translate/mod.ts";
 * // const { TranslateClient, DeleteTerminologyCommand } = require("@aws-sdk/client-translate"); // CommonJS import
 * const client = new TranslateClient(config);
 * const command = new DeleteTerminologyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTerminologyCommandInput} for command's `input` shape.
 * @see {@link DeleteTerminologyCommandOutput} for command's `response` shape.
 * @see {@link TranslateClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteTerminologyCommand extends $Command<
  DeleteTerminologyCommandInput,
  DeleteTerminologyCommandOutput,
  TranslateClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteTerminologyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TranslateClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteTerminologyCommandInput, DeleteTerminologyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranslateClient";
    const commandName = "DeleteTerminologyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteTerminologyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteTerminologyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteTerminologyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteTerminologyCommandOutput> {
    return deserializeAws_json1_1DeleteTerminologyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
