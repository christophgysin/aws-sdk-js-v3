import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient.ts";
import { BatchStopJobRunRequest, BatchStopJobRunResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1BatchStopJobRunCommand,
  serializeAws_json1_1BatchStopJobRunCommand,
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

export interface BatchStopJobRunCommandInput extends BatchStopJobRunRequest {}
export interface BatchStopJobRunCommandOutput extends BatchStopJobRunResponse, __MetadataBearer {}

/**
 * <p>Stops one or more job runs for a specified job definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, BatchStopJobRunCommand } from "../../client-glue/mod.ts";
 * // const { GlueClient, BatchStopJobRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new BatchStopJobRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchStopJobRunCommandInput} for command's `input` shape.
 * @see {@link BatchStopJobRunCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class BatchStopJobRunCommand extends $Command<
  BatchStopJobRunCommandInput,
  BatchStopJobRunCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchStopJobRunCommandInput) {
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
  ): Handler<BatchStopJobRunCommandInput, BatchStopJobRunCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "BatchStopJobRunCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchStopJobRunRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchStopJobRunResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchStopJobRunCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1BatchStopJobRunCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchStopJobRunCommandOutput> {
    return deserializeAws_json1_1BatchStopJobRunCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
