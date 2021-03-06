import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient.ts";
import { AssociateDelegateToResourceRequest, AssociateDelegateToResourceResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1AssociateDelegateToResourceCommand,
  serializeAws_json1_1AssociateDelegateToResourceCommand,
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

export interface AssociateDelegateToResourceCommandInput extends AssociateDelegateToResourceRequest {}
export interface AssociateDelegateToResourceCommandOutput
  extends AssociateDelegateToResourceResponse,
    __MetadataBearer {}

/**
 * <p>Adds a member (user or group) to the resource's set of delegates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, AssociateDelegateToResourceCommand } from "../../client-workmail/mod.ts";
 * // const { WorkMailClient, AssociateDelegateToResourceCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new AssociateDelegateToResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateDelegateToResourceCommandInput} for command's `input` shape.
 * @see {@link AssociateDelegateToResourceCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class AssociateDelegateToResourceCommand extends $Command<
  AssociateDelegateToResourceCommandInput,
  AssociateDelegateToResourceCommandOutput,
  WorkMailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateDelegateToResourceCommandInput) {
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
  ): Handler<AssociateDelegateToResourceCommandInput, AssociateDelegateToResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkMailClient";
    const commandName = "AssociateDelegateToResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateDelegateToResourceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateDelegateToResourceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateDelegateToResourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AssociateDelegateToResourceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateDelegateToResourceCommandOutput> {
    return deserializeAws_json1_1AssociateDelegateToResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
