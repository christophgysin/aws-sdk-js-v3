import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient.ts";
import { ListGroupMembersRequest, ListGroupMembersResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListGroupMembersCommand,
  serializeAws_json1_1ListGroupMembersCommand,
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

export interface ListGroupMembersCommandInput extends ListGroupMembersRequest {}
export interface ListGroupMembersCommandOutput extends ListGroupMembersResponse, __MetadataBearer {}

/**
 * <p>Returns an overview of the members of a group. Users and groups can be members of a
 *          group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, ListGroupMembersCommand } from "../../client-workmail/mod.ts";
 * // const { WorkMailClient, ListGroupMembersCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new ListGroupMembersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListGroupMembersCommandInput} for command's `input` shape.
 * @see {@link ListGroupMembersCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListGroupMembersCommand extends $Command<
  ListGroupMembersCommandInput,
  ListGroupMembersCommandOutput,
  WorkMailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListGroupMembersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkMailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListGroupMembersCommandInput, ListGroupMembersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkMailClient";
    const commandName = "ListGroupMembersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListGroupMembersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListGroupMembersResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListGroupMembersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListGroupMembersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListGroupMembersCommandOutput> {
    return deserializeAws_json1_1ListGroupMembersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
