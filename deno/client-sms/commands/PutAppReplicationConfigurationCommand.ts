import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient.ts";
import { PutAppReplicationConfigurationRequest, PutAppReplicationConfigurationResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1PutAppReplicationConfigurationCommand,
  serializeAws_json1_1PutAppReplicationConfigurationCommand,
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

export interface PutAppReplicationConfigurationCommandInput extends PutAppReplicationConfigurationRequest {}
export interface PutAppReplicationConfigurationCommandOutput
  extends PutAppReplicationConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Creates or updates the replication configuration for the specified application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, PutAppReplicationConfigurationCommand } from "../../client-sms/mod.ts";
 * // const { SMSClient, PutAppReplicationConfigurationCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new PutAppReplicationConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutAppReplicationConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutAppReplicationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class PutAppReplicationConfigurationCommand extends $Command<
  PutAppReplicationConfigurationCommandInput,
  PutAppReplicationConfigurationCommandOutput,
  SMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutAppReplicationConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutAppReplicationConfigurationCommandInput, PutAppReplicationConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SMSClient";
    const commandName = "PutAppReplicationConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutAppReplicationConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutAppReplicationConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: PutAppReplicationConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1PutAppReplicationConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutAppReplicationConfigurationCommandOutput> {
    return deserializeAws_json1_1PutAppReplicationConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
