import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient.ts";
import { UpdateWorkloadShareInput, UpdateWorkloadShareOutput } from "../models/models_0.ts";
import {
  deserializeAws_restJson1UpdateWorkloadShareCommand,
  serializeAws_restJson1UpdateWorkloadShareCommand,
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

export interface UpdateWorkloadShareCommandInput extends UpdateWorkloadShareInput {}
export interface UpdateWorkloadShareCommandOutput extends UpdateWorkloadShareOutput, __MetadataBearer {}

/**
 * <p>Update a workload share.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, UpdateWorkloadShareCommand } from "../../client-wellarchitected/mod.ts";
 * // const { WellArchitectedClient, UpdateWorkloadShareCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const command = new UpdateWorkloadShareCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateWorkloadShareCommandInput} for command's `input` shape.
 * @see {@link UpdateWorkloadShareCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateWorkloadShareCommand extends $Command<
  UpdateWorkloadShareCommandInput,
  UpdateWorkloadShareCommandOutput,
  WellArchitectedClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateWorkloadShareCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WellArchitectedClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateWorkloadShareCommandInput, UpdateWorkloadShareCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WellArchitectedClient";
    const commandName = "UpdateWorkloadShareCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateWorkloadShareInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateWorkloadShareOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateWorkloadShareCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateWorkloadShareCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateWorkloadShareCommandOutput> {
    return deserializeAws_restJson1UpdateWorkloadShareCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
