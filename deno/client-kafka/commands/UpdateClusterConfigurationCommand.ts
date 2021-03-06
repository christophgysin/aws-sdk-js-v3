import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient.ts";
import { UpdateClusterConfigurationRequest, UpdateClusterConfigurationResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1UpdateClusterConfigurationCommand,
  serializeAws_restJson1UpdateClusterConfigurationCommand,
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

export interface UpdateClusterConfigurationCommandInput extends UpdateClusterConfigurationRequest {}
export interface UpdateClusterConfigurationCommandOutput extends UpdateClusterConfigurationResponse, __MetadataBearer {}

/**
 * <p>Updates the cluster with the configuration that is specified in the request body.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, UpdateClusterConfigurationCommand } from "../../client-kafka/mod.ts";
 * // const { KafkaClient, UpdateClusterConfigurationCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const command = new UpdateClusterConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateClusterConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateClusterConfigurationCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateClusterConfigurationCommand extends $Command<
  UpdateClusterConfigurationCommandInput,
  UpdateClusterConfigurationCommandOutput,
  KafkaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateClusterConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KafkaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateClusterConfigurationCommandInput, UpdateClusterConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KafkaClient";
    const commandName = "UpdateClusterConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateClusterConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateClusterConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateClusterConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateClusterConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateClusterConfigurationCommandOutput> {
    return deserializeAws_restJson1UpdateClusterConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
