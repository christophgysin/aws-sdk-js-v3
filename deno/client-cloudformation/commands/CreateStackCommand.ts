import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient.ts";
import { CreateStackInput, CreateStackOutput } from "../models/models_0.ts";
import { deserializeAws_queryCreateStackCommand, serializeAws_queryCreateStackCommand } from "../protocols/Aws_query.ts";
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

export interface CreateStackCommandInput extends CreateStackInput {}
export interface CreateStackCommandOutput extends CreateStackOutput, __MetadataBearer {}

/**
 * <p>Creates a stack as specified in the template. After the call completes successfully,
 *          the stack creation starts. You can check the status of the stack via the <a>DescribeStacks</a> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, CreateStackCommand } from "../../client-cloudformation/mod.ts";
 * // const { CloudFormationClient, CreateStackCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new CreateStackCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateStackCommandInput} for command's `input` shape.
 * @see {@link CreateStackCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateStackCommand extends $Command<
  CreateStackCommandInput,
  CreateStackCommandOutput,
  CloudFormationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateStackCommandInput) {
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
  ): Handler<CreateStackCommandInput, CreateStackCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "CreateStackCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateStackInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateStackOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateStackCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateStackCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateStackCommandOutput> {
    return deserializeAws_queryCreateStackCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
