import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient.ts";
import { GetSystemInstanceRequest, GetSystemInstanceResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetSystemInstanceCommand,
  serializeAws_json1_1GetSystemInstanceCommand,
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

export interface GetSystemInstanceCommandInput extends GetSystemInstanceRequest {}
export interface GetSystemInstanceCommandOutput extends GetSystemInstanceResponse, __MetadataBearer {}

/**
 * <p>Gets a system instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, GetSystemInstanceCommand } from "../../client-iotthingsgraph/mod.ts";
 * // const { IoTThingsGraphClient, GetSystemInstanceCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const command = new GetSystemInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSystemInstanceCommandInput} for command's `input` shape.
 * @see {@link GetSystemInstanceCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetSystemInstanceCommand extends $Command<
  GetSystemInstanceCommandInput,
  GetSystemInstanceCommandOutput,
  IoTThingsGraphClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetSystemInstanceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTThingsGraphClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSystemInstanceCommandInput, GetSystemInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTThingsGraphClient";
    const commandName = "GetSystemInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSystemInstanceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetSystemInstanceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSystemInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetSystemInstanceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSystemInstanceCommandOutput> {
    return deserializeAws_json1_1GetSystemInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
