import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient.ts";
import { BatchDeleteWorldsRequest, BatchDeleteWorldsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1BatchDeleteWorldsCommand,
  serializeAws_restJson1BatchDeleteWorldsCommand,
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

export interface BatchDeleteWorldsCommandInput extends BatchDeleteWorldsRequest {}
export interface BatchDeleteWorldsCommandOutput extends BatchDeleteWorldsResponse, __MetadataBearer {}

/**
 * <p>Deletes one or more worlds in a batch operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, BatchDeleteWorldsCommand } from "../../client-robomaker/mod.ts";
 * // const { RoboMakerClient, BatchDeleteWorldsCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new BatchDeleteWorldsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDeleteWorldsCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteWorldsCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class BatchDeleteWorldsCommand extends $Command<
  BatchDeleteWorldsCommandInput,
  BatchDeleteWorldsCommandOutput,
  RoboMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchDeleteWorldsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RoboMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchDeleteWorldsCommandInput, BatchDeleteWorldsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RoboMakerClient";
    const commandName = "BatchDeleteWorldsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchDeleteWorldsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchDeleteWorldsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchDeleteWorldsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchDeleteWorldsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchDeleteWorldsCommandOutput> {
    return deserializeAws_restJson1BatchDeleteWorldsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
