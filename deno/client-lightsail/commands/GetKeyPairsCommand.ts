import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient.ts";
import { GetKeyPairsRequest, GetKeyPairsResult } from "../models/models_1.ts";
import {
  deserializeAws_json1_1GetKeyPairsCommand,
  serializeAws_json1_1GetKeyPairsCommand,
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

export interface GetKeyPairsCommandInput extends GetKeyPairsRequest {}
export interface GetKeyPairsCommandOutput extends GetKeyPairsResult, __MetadataBearer {}

/**
 * <p>Returns information about all key pairs in the user's account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetKeyPairsCommand } from "../../client-lightsail/mod.ts";
 * // const { LightsailClient, GetKeyPairsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetKeyPairsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetKeyPairsCommandInput} for command's `input` shape.
 * @see {@link GetKeyPairsCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetKeyPairsCommand extends $Command<
  GetKeyPairsCommandInput,
  GetKeyPairsCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetKeyPairsCommandInput) {
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
  ): Handler<GetKeyPairsCommandInput, GetKeyPairsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetKeyPairsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetKeyPairsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetKeyPairsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetKeyPairsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetKeyPairsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetKeyPairsCommandOutput> {
    return deserializeAws_json1_1GetKeyPairsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
