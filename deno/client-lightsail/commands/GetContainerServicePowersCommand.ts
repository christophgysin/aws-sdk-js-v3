import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient.ts";
import { GetContainerServicePowersRequest, GetContainerServicePowersResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetContainerServicePowersCommand,
  serializeAws_json1_1GetContainerServicePowersCommand,
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

export interface GetContainerServicePowersCommandInput extends GetContainerServicePowersRequest {}
export interface GetContainerServicePowersCommandOutput extends GetContainerServicePowersResult, __MetadataBearer {}

/**
 * <p>Returns the list of powers that can be specified for your Amazon Lightsail container
 *       services.</p>
 *
 *          <p>The power specifies the amount of memory, the number of vCPUs, and the base price of the
 *       container service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetContainerServicePowersCommand } from "../../client-lightsail/mod.ts";
 * // const { LightsailClient, GetContainerServicePowersCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetContainerServicePowersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetContainerServicePowersCommandInput} for command's `input` shape.
 * @see {@link GetContainerServicePowersCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetContainerServicePowersCommand extends $Command<
  GetContainerServicePowersCommandInput,
  GetContainerServicePowersCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetContainerServicePowersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetContainerServicePowersCommandInput, GetContainerServicePowersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetContainerServicePowersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetContainerServicePowersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetContainerServicePowersResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetContainerServicePowersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetContainerServicePowersCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetContainerServicePowersCommandOutput> {
    return deserializeAws_json1_1GetContainerServicePowersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
