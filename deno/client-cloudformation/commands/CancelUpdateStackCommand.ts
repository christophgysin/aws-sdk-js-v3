import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient.ts";
import { CancelUpdateStackInput } from "../models/models_0.ts";
import {
  deserializeAws_queryCancelUpdateStackCommand,
  serializeAws_queryCancelUpdateStackCommand,
} from "../protocols/Aws_query.ts";
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

export interface CancelUpdateStackCommandInput extends CancelUpdateStackInput {}
export interface CancelUpdateStackCommandOutput extends __MetadataBearer {}

/**
 * <p>Cancels an update on the specified stack. If the call completes successfully, the
 *          stack rolls back the update and reverts to the previous stack configuration.</p>
 *          <note>
 *             <p>You can cancel only stacks that are in the UPDATE_IN_PROGRESS state.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, CancelUpdateStackCommand } from "../../client-cloudformation/mod.ts";
 * // const { CloudFormationClient, CancelUpdateStackCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new CancelUpdateStackCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelUpdateStackCommandInput} for command's `input` shape.
 * @see {@link CancelUpdateStackCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CancelUpdateStackCommand extends $Command<
  CancelUpdateStackCommandInput,
  CancelUpdateStackCommandOutput,
  CloudFormationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CancelUpdateStackCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CancelUpdateStackCommandInput, CancelUpdateStackCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "CancelUpdateStackCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CancelUpdateStackInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CancelUpdateStackCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCancelUpdateStackCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CancelUpdateStackCommandOutput> {
    return deserializeAws_queryCancelUpdateStackCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
