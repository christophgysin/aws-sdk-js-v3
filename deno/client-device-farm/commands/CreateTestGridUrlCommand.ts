import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient.ts";
import { CreateTestGridUrlRequest, CreateTestGridUrlResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1CreateTestGridUrlCommand,
  serializeAws_json1_1CreateTestGridUrlCommand,
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

export interface CreateTestGridUrlCommandInput extends CreateTestGridUrlRequest {}
export interface CreateTestGridUrlCommandOutput extends CreateTestGridUrlResult, __MetadataBearer {}

/**
 * <p>Creates a signed, short-term URL that can be passed to a Selenium <code>RemoteWebDriver</code>
 *          constructor.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, CreateTestGridUrlCommand } from "../../client-device-farm/mod.ts";
 * // const { DeviceFarmClient, CreateTestGridUrlCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new CreateTestGridUrlCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTestGridUrlCommandInput} for command's `input` shape.
 * @see {@link CreateTestGridUrlCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateTestGridUrlCommand extends $Command<
  CreateTestGridUrlCommandInput,
  CreateTestGridUrlCommandOutput,
  DeviceFarmClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateTestGridUrlCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DeviceFarmClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateTestGridUrlCommandInput, CreateTestGridUrlCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "CreateTestGridUrlCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateTestGridUrlRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateTestGridUrlResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateTestGridUrlCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateTestGridUrlCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateTestGridUrlCommandOutput> {
    return deserializeAws_json1_1CreateTestGridUrlCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
