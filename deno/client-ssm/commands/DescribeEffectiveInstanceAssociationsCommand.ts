import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient.ts";
import {
  DescribeEffectiveInstanceAssociationsRequest,
  DescribeEffectiveInstanceAssociationsResult,
} from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeEffectiveInstanceAssociationsCommand,
  serializeAws_json1_1DescribeEffectiveInstanceAssociationsCommand,
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

export interface DescribeEffectiveInstanceAssociationsCommandInput
  extends DescribeEffectiveInstanceAssociationsRequest {}
export interface DescribeEffectiveInstanceAssociationsCommandOutput
  extends DescribeEffectiveInstanceAssociationsResult,
    __MetadataBearer {}

/**
 * <p>All associations for the instance(s).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeEffectiveInstanceAssociationsCommand } from "../../client-ssm/mod.ts";
 * // const { SSMClient, DescribeEffectiveInstanceAssociationsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DescribeEffectiveInstanceAssociationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEffectiveInstanceAssociationsCommandInput} for command's `input` shape.
 * @see {@link DescribeEffectiveInstanceAssociationsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeEffectiveInstanceAssociationsCommand extends $Command<
  DescribeEffectiveInstanceAssociationsCommandInput,
  DescribeEffectiveInstanceAssociationsCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeEffectiveInstanceAssociationsCommandInput) {
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
  ): Handler<DescribeEffectiveInstanceAssociationsCommandInput, DescribeEffectiveInstanceAssociationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "DescribeEffectiveInstanceAssociationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeEffectiveInstanceAssociationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeEffectiveInstanceAssociationsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeEffectiveInstanceAssociationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeEffectiveInstanceAssociationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeEffectiveInstanceAssociationsCommandOutput> {
    return deserializeAws_json1_1DescribeEffectiveInstanceAssociationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
