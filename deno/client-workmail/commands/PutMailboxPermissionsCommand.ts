import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient.ts";
import { PutMailboxPermissionsRequest, PutMailboxPermissionsResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1PutMailboxPermissionsCommand,
  serializeAws_json1_1PutMailboxPermissionsCommand,
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

export interface PutMailboxPermissionsCommandInput extends PutMailboxPermissionsRequest {}
export interface PutMailboxPermissionsCommandOutput extends PutMailboxPermissionsResponse, __MetadataBearer {}

/**
 * <p>Sets permissions for a user, group, or resource. This replaces any pre-existing
 *          permissions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, PutMailboxPermissionsCommand } from "../../client-workmail/mod.ts";
 * // const { WorkMailClient, PutMailboxPermissionsCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new PutMailboxPermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutMailboxPermissionsCommandInput} for command's `input` shape.
 * @see {@link PutMailboxPermissionsCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class PutMailboxPermissionsCommand extends $Command<
  PutMailboxPermissionsCommandInput,
  PutMailboxPermissionsCommandOutput,
  WorkMailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutMailboxPermissionsCommandInput) {
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
  ): Handler<PutMailboxPermissionsCommandInput, PutMailboxPermissionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkMailClient";
    const commandName = "PutMailboxPermissionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutMailboxPermissionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutMailboxPermissionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutMailboxPermissionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutMailboxPermissionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutMailboxPermissionsCommandOutput> {
    return deserializeAws_json1_1PutMailboxPermissionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
