import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient.ts";
import { RemoveFlowOutputRequest, RemoveFlowOutputResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1RemoveFlowOutputCommand,
  serializeAws_restJson1RemoveFlowOutputCommand,
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

export interface RemoveFlowOutputCommandInput extends RemoveFlowOutputRequest {}
export interface RemoveFlowOutputCommandOutput extends RemoveFlowOutputResponse, __MetadataBearer {}

/**
 * Removes an output from an existing flow. This request can be made only on an output that does not have an entitlement associated with it. If the output has an entitlement, you must revoke the entitlement instead. When an entitlement is revoked from a flow, the service automatically removes the associated output.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, RemoveFlowOutputCommand } from "../../client-mediaconnect/mod.ts";
 * // const { MediaConnectClient, RemoveFlowOutputCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const command = new RemoveFlowOutputCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveFlowOutputCommandInput} for command's `input` shape.
 * @see {@link RemoveFlowOutputCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class RemoveFlowOutputCommand extends $Command<
  RemoveFlowOutputCommandInput,
  RemoveFlowOutputCommandOutput,
  MediaConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RemoveFlowOutputCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RemoveFlowOutputCommandInput, RemoveFlowOutputCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaConnectClient";
    const commandName = "RemoveFlowOutputCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RemoveFlowOutputRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RemoveFlowOutputResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RemoveFlowOutputCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RemoveFlowOutputCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RemoveFlowOutputCommandOutput> {
    return deserializeAws_restJson1RemoveFlowOutputCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
