import { OpsWorksCMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksCMClient.ts";
import { UpdateServerEngineAttributesRequest, UpdateServerEngineAttributesResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1UpdateServerEngineAttributesCommand,
  serializeAws_json1_1UpdateServerEngineAttributesCommand,
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

export interface UpdateServerEngineAttributesCommandInput extends UpdateServerEngineAttributesRequest {}
export interface UpdateServerEngineAttributesCommandOutput
  extends UpdateServerEngineAttributesResponse,
    __MetadataBearer {}

/**
 * <p>
 *       Updates engine-specific attributes on a specified server. The server
 *       enters the <code>MODIFYING</code> state when this operation
 *       is in progress. Only one update can occur at a time.
 *       You can use this command to reset a Chef server's public key (<code>CHEF_PIVOTAL_KEY</code>) or a Puppet server's
 *       admin password (<code>PUPPET_ADMIN_PASSWORD</code>).
 *     </p>
 *          <p>
 *       This operation is asynchronous.
 *     </p>
 *          <p>
 *       This operation can only be called for servers in <code>HEALTHY</code> or <code>UNHEALTHY</code> states. Otherwise, an <code>InvalidStateException</code> is raised.
 *       A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksCMClient, UpdateServerEngineAttributesCommand } from "../../client-opsworkscm/mod.ts";
 * // const { OpsWorksCMClient, UpdateServerEngineAttributesCommand } = require("@aws-sdk/client-opsworkscm"); // CommonJS import
 * const client = new OpsWorksCMClient(config);
 * const command = new UpdateServerEngineAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateServerEngineAttributesCommandInput} for command's `input` shape.
 * @see {@link UpdateServerEngineAttributesCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksCMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateServerEngineAttributesCommand extends $Command<
  UpdateServerEngineAttributesCommandInput,
  UpdateServerEngineAttributesCommandOutput,
  OpsWorksCMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateServerEngineAttributesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpsWorksCMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateServerEngineAttributesCommandInput, UpdateServerEngineAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpsWorksCMClient";
    const commandName = "UpdateServerEngineAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateServerEngineAttributesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateServerEngineAttributesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateServerEngineAttributesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateServerEngineAttributesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateServerEngineAttributesCommandOutput> {
    return deserializeAws_json1_1UpdateServerEngineAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
