import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient.ts";
import {
  DeregisterPatchBaselineForPatchGroupRequest,
  DeregisterPatchBaselineForPatchGroupResult,
} from "../models/models_0.ts";
import {
  deserializeAws_json1_1DeregisterPatchBaselineForPatchGroupCommand,
  serializeAws_json1_1DeregisterPatchBaselineForPatchGroupCommand,
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

export interface DeregisterPatchBaselineForPatchGroupCommandInput extends DeregisterPatchBaselineForPatchGroupRequest {}
export interface DeregisterPatchBaselineForPatchGroupCommandOutput
  extends DeregisterPatchBaselineForPatchGroupResult,
    __MetadataBearer {}

/**
 * <p>Removes a patch group from a patch baseline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DeregisterPatchBaselineForPatchGroupCommand } from "../../client-ssm/mod.ts";
 * // const { SSMClient, DeregisterPatchBaselineForPatchGroupCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DeregisterPatchBaselineForPatchGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterPatchBaselineForPatchGroupCommandInput} for command's `input` shape.
 * @see {@link DeregisterPatchBaselineForPatchGroupCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeregisterPatchBaselineForPatchGroupCommand extends $Command<
  DeregisterPatchBaselineForPatchGroupCommandInput,
  DeregisterPatchBaselineForPatchGroupCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeregisterPatchBaselineForPatchGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeregisterPatchBaselineForPatchGroupCommandInput, DeregisterPatchBaselineForPatchGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "DeregisterPatchBaselineForPatchGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeregisterPatchBaselineForPatchGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeregisterPatchBaselineForPatchGroupResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeregisterPatchBaselineForPatchGroupCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DeregisterPatchBaselineForPatchGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeregisterPatchBaselineForPatchGroupCommandOutput> {
    return deserializeAws_json1_1DeregisterPatchBaselineForPatchGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
