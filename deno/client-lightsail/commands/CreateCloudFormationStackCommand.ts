import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient.ts";
import { CreateCloudFormationStackRequest, CreateCloudFormationStackResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1CreateCloudFormationStackCommand,
  serializeAws_json1_1CreateCloudFormationStackCommand,
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

export interface CreateCloudFormationStackCommandInput extends CreateCloudFormationStackRequest {}
export interface CreateCloudFormationStackCommandOutput extends CreateCloudFormationStackResult, __MetadataBearer {}

/**
 * <p>Creates an AWS CloudFormation stack, which creates a new Amazon EC2 instance from an exported
 *       Amazon Lightsail snapshot. This operation results in a CloudFormation stack record that can be
 *       used to track the AWS CloudFormation stack created. Use the <code>get cloud formation stack
 *         records</code> operation to get a list of the CloudFormation stacks created.</p>
 *          <important>
 *             <p>Wait until after your new Amazon EC2 instance is created before running the <code>create
 *           cloud formation stack</code> operation again with the same export snapshot record.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, CreateCloudFormationStackCommand } from "../../client-lightsail/mod.ts";
 * // const { LightsailClient, CreateCloudFormationStackCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new CreateCloudFormationStackCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCloudFormationStackCommandInput} for command's `input` shape.
 * @see {@link CreateCloudFormationStackCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateCloudFormationStackCommand extends $Command<
  CreateCloudFormationStackCommandInput,
  CreateCloudFormationStackCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateCloudFormationStackCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateCloudFormationStackCommandInput, CreateCloudFormationStackCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "CreateCloudFormationStackCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateCloudFormationStackRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateCloudFormationStackResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateCloudFormationStackCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateCloudFormationStackCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateCloudFormationStackCommandOutput> {
    return deserializeAws_json1_1CreateCloudFormationStackCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
