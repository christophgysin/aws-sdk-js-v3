import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient.ts";
import { BatchUpdatePartitionRequest, BatchUpdatePartitionResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1BatchUpdatePartitionCommand,
  serializeAws_json1_1BatchUpdatePartitionCommand,
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

export interface BatchUpdatePartitionCommandInput extends BatchUpdatePartitionRequest {}
export interface BatchUpdatePartitionCommandOutput extends BatchUpdatePartitionResponse, __MetadataBearer {}

/**
 * <p>Updates one or more partitions in a batch operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, BatchUpdatePartitionCommand } from "../../client-glue/mod.ts";
 * // const { GlueClient, BatchUpdatePartitionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new BatchUpdatePartitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchUpdatePartitionCommandInput} for command's `input` shape.
 * @see {@link BatchUpdatePartitionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class BatchUpdatePartitionCommand extends $Command<
  BatchUpdatePartitionCommandInput,
  BatchUpdatePartitionCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchUpdatePartitionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchUpdatePartitionCommandInput, BatchUpdatePartitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "BatchUpdatePartitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchUpdatePartitionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchUpdatePartitionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchUpdatePartitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1BatchUpdatePartitionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchUpdatePartitionCommandOutput> {
    return deserializeAws_json1_1BatchUpdatePartitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
