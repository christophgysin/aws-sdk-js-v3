import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient.ts";
import { BatchDeletePhoneNumberRequest, BatchDeletePhoneNumberResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1BatchDeletePhoneNumberCommand,
  serializeAws_restJson1BatchDeletePhoneNumberCommand,
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

export interface BatchDeletePhoneNumberCommandInput extends BatchDeletePhoneNumberRequest {}
export interface BatchDeletePhoneNumberCommandOutput extends BatchDeletePhoneNumberResponse, __MetadataBearer {}

/**
 * <p>
 * Moves phone numbers into the
 * <b>Deletion queue</b>. Phone numbers must be disassociated from any users or Amazon Chime Voice Connectors before they can be deleted.
 * </p>
 *
 *          <p>
 * Phone numbers remain in the
 * <b>Deletion queue</b> for 7 days before they are deleted permanently.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, BatchDeletePhoneNumberCommand } from "../../client-chime/mod.ts";
 * // const { ChimeClient, BatchDeletePhoneNumberCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new BatchDeletePhoneNumberCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDeletePhoneNumberCommandInput} for command's `input` shape.
 * @see {@link BatchDeletePhoneNumberCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class BatchDeletePhoneNumberCommand extends $Command<
  BatchDeletePhoneNumberCommandInput,
  BatchDeletePhoneNumberCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchDeletePhoneNumberCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchDeletePhoneNumberCommandInput, BatchDeletePhoneNumberCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "BatchDeletePhoneNumberCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchDeletePhoneNumberRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchDeletePhoneNumberResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchDeletePhoneNumberCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchDeletePhoneNumberCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchDeletePhoneNumberCommandOutput> {
    return deserializeAws_restJson1BatchDeletePhoneNumberCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
