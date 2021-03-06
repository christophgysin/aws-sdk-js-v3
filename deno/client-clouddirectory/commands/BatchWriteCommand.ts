import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient.ts";
import { BatchWriteRequest, BatchWriteResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1BatchWriteCommand,
  serializeAws_restJson1BatchWriteCommand,
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

export interface BatchWriteCommandInput extends BatchWriteRequest {}
export interface BatchWriteCommandOutput extends BatchWriteResponse, __MetadataBearer {}

/**
 * <p>Performs all the write operations in a batch. Either all the operations succeed or
 *       none.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, BatchWriteCommand } from "../../client-clouddirectory/mod.ts";
 * // const { CloudDirectoryClient, BatchWriteCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new BatchWriteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchWriteCommandInput} for command's `input` shape.
 * @see {@link BatchWriteCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class BatchWriteCommand extends $Command<
  BatchWriteCommandInput,
  BatchWriteCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchWriteCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudDirectoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchWriteCommandInput, BatchWriteCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudDirectoryClient";
    const commandName = "BatchWriteCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchWriteRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchWriteResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchWriteCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchWriteCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchWriteCommandOutput> {
    return deserializeAws_restJson1BatchWriteCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
