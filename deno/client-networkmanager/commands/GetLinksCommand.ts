import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient.ts";
import { GetLinksRequest, GetLinksResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetLinksCommand,
  serializeAws_restJson1GetLinksCommand,
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

export interface GetLinksCommandInput extends GetLinksRequest {}
export interface GetLinksCommandOutput extends GetLinksResponse, __MetadataBearer {}

/**
 * <p>Gets information about one or more links in a specified global network.</p>
 *         <p>If you specify the site ID, you cannot specify the type or provider in the same request. You can specify the type and provider in the same request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, GetLinksCommand } from "../../client-networkmanager/mod.ts";
 * // const { NetworkManagerClient, GetLinksCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new GetLinksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLinksCommandInput} for command's `input` shape.
 * @see {@link GetLinksCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetLinksCommand extends $Command<
  GetLinksCommandInput,
  GetLinksCommandOutput,
  NetworkManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetLinksCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NetworkManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetLinksCommandInput, GetLinksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkManagerClient";
    const commandName = "GetLinksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetLinksRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetLinksResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetLinksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetLinksCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetLinksCommandOutput> {
    return deserializeAws_restJson1GetLinksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
