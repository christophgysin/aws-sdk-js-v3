import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient.ts";
import { DeleteGroupRequest, DeleteGroupResult } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DeleteGroupCommand,
  serializeAws_restJson1DeleteGroupCommand,
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

export interface DeleteGroupCommandInput extends DeleteGroupRequest {}
export interface DeleteGroupCommandOutput extends DeleteGroupResult, __MetadataBearer {}

/**
 * <p>Deletes a group resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, DeleteGroupCommand } from "../../client-xray/mod.ts";
 * // const { XRayClient, DeleteGroupCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const command = new DeleteGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteGroupCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteGroupCommand extends $Command<
  DeleteGroupCommandInput,
  DeleteGroupCommandOutput,
  XRayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: XRayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteGroupCommandInput, DeleteGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "XRayClient";
    const commandName = "DeleteGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteGroupResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteGroupCommandOutput> {
    return deserializeAws_restJson1DeleteGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
