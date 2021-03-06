import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient.ts";
import { GetMaintenanceWindowExecutionRequest, GetMaintenanceWindowExecutionResult } from "../models/models_1.ts";
import {
  deserializeAws_json1_1GetMaintenanceWindowExecutionCommand,
  serializeAws_json1_1GetMaintenanceWindowExecutionCommand,
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

export interface GetMaintenanceWindowExecutionCommandInput extends GetMaintenanceWindowExecutionRequest {}
export interface GetMaintenanceWindowExecutionCommandOutput
  extends GetMaintenanceWindowExecutionResult,
    __MetadataBearer {}

/**
 * <p>Retrieves details about a specific a maintenance window execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetMaintenanceWindowExecutionCommand } from "../../client-ssm/mod.ts";
 * // const { SSMClient, GetMaintenanceWindowExecutionCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new GetMaintenanceWindowExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMaintenanceWindowExecutionCommandInput} for command's `input` shape.
 * @see {@link GetMaintenanceWindowExecutionCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetMaintenanceWindowExecutionCommand extends $Command<
  GetMaintenanceWindowExecutionCommandInput,
  GetMaintenanceWindowExecutionCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetMaintenanceWindowExecutionCommandInput) {
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
  ): Handler<GetMaintenanceWindowExecutionCommandInput, GetMaintenanceWindowExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "GetMaintenanceWindowExecutionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetMaintenanceWindowExecutionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetMaintenanceWindowExecutionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetMaintenanceWindowExecutionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetMaintenanceWindowExecutionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetMaintenanceWindowExecutionCommandOutput> {
    return deserializeAws_json1_1GetMaintenanceWindowExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
