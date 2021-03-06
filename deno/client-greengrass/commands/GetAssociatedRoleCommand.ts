import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient.ts";
import { GetAssociatedRoleRequest, GetAssociatedRoleResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetAssociatedRoleCommand,
  serializeAws_restJson1GetAssociatedRoleCommand,
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

export interface GetAssociatedRoleCommandInput extends GetAssociatedRoleRequest {}
export interface GetAssociatedRoleCommandOutput extends GetAssociatedRoleResponse, __MetadataBearer {}

/**
 * Retrieves the role associated with a particular group.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetAssociatedRoleCommand } from "../../client-greengrass/mod.ts";
 * // const { GreengrassClient, GetAssociatedRoleCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new GetAssociatedRoleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAssociatedRoleCommandInput} for command's `input` shape.
 * @see {@link GetAssociatedRoleCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetAssociatedRoleCommand extends $Command<
  GetAssociatedRoleCommandInput,
  GetAssociatedRoleCommandOutput,
  GreengrassClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetAssociatedRoleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAssociatedRoleCommandInput, GetAssociatedRoleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassClient";
    const commandName = "GetAssociatedRoleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetAssociatedRoleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetAssociatedRoleResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetAssociatedRoleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetAssociatedRoleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAssociatedRoleCommandOutput> {
    return deserializeAws_restJson1GetAssociatedRoleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
