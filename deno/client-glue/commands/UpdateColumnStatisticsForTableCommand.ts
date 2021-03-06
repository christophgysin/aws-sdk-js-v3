import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient.ts";
import { UpdateColumnStatisticsForTableRequest, UpdateColumnStatisticsForTableResponse } from "../models/models_1.ts";
import {
  deserializeAws_json1_1UpdateColumnStatisticsForTableCommand,
  serializeAws_json1_1UpdateColumnStatisticsForTableCommand,
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

export interface UpdateColumnStatisticsForTableCommandInput extends UpdateColumnStatisticsForTableRequest {}
export interface UpdateColumnStatisticsForTableCommandOutput
  extends UpdateColumnStatisticsForTableResponse,
    __MetadataBearer {}

/**
 * <p>Creates or updates table statistics of columns.</p>
 *
 * 	        <p>The Identity and Access Management (IAM) permission required for this operation is <code>UpdateTable</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateColumnStatisticsForTableCommand } from "../../client-glue/mod.ts";
 * // const { GlueClient, UpdateColumnStatisticsForTableCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new UpdateColumnStatisticsForTableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateColumnStatisticsForTableCommandInput} for command's `input` shape.
 * @see {@link UpdateColumnStatisticsForTableCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateColumnStatisticsForTableCommand extends $Command<
  UpdateColumnStatisticsForTableCommandInput,
  UpdateColumnStatisticsForTableCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateColumnStatisticsForTableCommandInput) {
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
  ): Handler<UpdateColumnStatisticsForTableCommandInput, UpdateColumnStatisticsForTableCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "UpdateColumnStatisticsForTableCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateColumnStatisticsForTableRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateColumnStatisticsForTableResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateColumnStatisticsForTableCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateColumnStatisticsForTableCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateColumnStatisticsForTableCommandOutput> {
    return deserializeAws_json1_1UpdateColumnStatisticsForTableCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
