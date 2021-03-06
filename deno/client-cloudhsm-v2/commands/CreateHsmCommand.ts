import { CloudHSMV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMV2Client.ts";
import { CreateHsmRequest, CreateHsmResponse } from "../models/models_0.ts";
import { deserializeAws_json1_1CreateHsmCommand, serializeAws_json1_1CreateHsmCommand } from "../protocols/Aws_json1_1.ts";
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

export interface CreateHsmCommandInput extends CreateHsmRequest {}
export interface CreateHsmCommandOutput extends CreateHsmResponse, __MetadataBearer {}

/**
 * <p>Creates a new hardware security module (HSM) in the specified AWS CloudHSM
 *       cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudHSMV2Client, CreateHsmCommand } from "../../client-cloudhsm-v2/mod.ts";
 * // const { CloudHSMV2Client, CreateHsmCommand } = require("@aws-sdk/client-cloudhsm-v2"); // CommonJS import
 * const client = new CloudHSMV2Client(config);
 * const command = new CreateHsmCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateHsmCommandInput} for command's `input` shape.
 * @see {@link CreateHsmCommandOutput} for command's `response` shape.
 * @see {@link CloudHSMV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateHsmCommand extends $Command<
  CreateHsmCommandInput,
  CreateHsmCommandOutput,
  CloudHSMV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateHsmCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudHSMV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateHsmCommandInput, CreateHsmCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudHSMV2Client";
    const commandName = "CreateHsmCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateHsmRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateHsmResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateHsmCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateHsmCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateHsmCommandOutput> {
    return deserializeAws_json1_1CreateHsmCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
