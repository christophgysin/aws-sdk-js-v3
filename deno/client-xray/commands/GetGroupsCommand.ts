import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient.ts";
import { GetGroupsRequest, GetGroupsResult } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetGroupsCommand,
  serializeAws_restJson1GetGroupsCommand,
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

export interface GetGroupsCommandInput extends GetGroupsRequest {}
export interface GetGroupsCommandOutput extends GetGroupsResult, __MetadataBearer {}

/**
 * <p>Retrieves all active group details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, GetGroupsCommand } from "../../client-xray/mod.ts";
 * // const { XRayClient, GetGroupsCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const command = new GetGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetGroupsCommandInput} for command's `input` shape.
 * @see {@link GetGroupsCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetGroupsCommand extends $Command<
  GetGroupsCommandInput,
  GetGroupsCommandOutput,
  XRayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetGroupsCommandInput) {
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
  ): Handler<GetGroupsCommandInput, GetGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "XRayClient";
    const commandName = "GetGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetGroupsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetGroupsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetGroupsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetGroupsCommandOutput> {
    return deserializeAws_restJson1GetGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
