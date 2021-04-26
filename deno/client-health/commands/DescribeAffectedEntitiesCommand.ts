import { HealthClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthClient.ts";
import { DescribeAffectedEntitiesRequest, DescribeAffectedEntitiesResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeAffectedEntitiesCommand,
  serializeAws_json1_1DescribeAffectedEntitiesCommand,
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

export interface DescribeAffectedEntitiesCommandInput extends DescribeAffectedEntitiesRequest {}
export interface DescribeAffectedEntitiesCommandOutput extends DescribeAffectedEntitiesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of entities that have been affected by the specified events, based on the
 *          specified filter criteria. Entities can refer to individual customer resources, groups of
 *          customer resources, or any other construct, depending on the AWS service. Events that have
 *          impact beyond that of the affected entities, or where the extent of impact is unknown,
 *          include at least one entity indicating this.</p>
 *          <p>At least one event ARN is required. Results are sorted by the
 *             <code>lastUpdatedTime</code> of the entity, starting with the most recent.</p>
 *
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the next request to return more results.</p>
 *                </li>
 *                <li>
 *                   <p>This operation supports resource-level permissions. You can use this operation to allow or deny access to specific AWS Health events. For more
 *                   information, see <a href="https://docs.aws.amazon.com/health/latest/ug/security_iam_id-based-policy-examples.html#resource-action-based-conditions">Resource- and action-based conditions</a> in the <i>AWS Health User Guide</i>.</p>
 *                </li>
 *             </ul>
 *          </note>
 */
export class DescribeAffectedEntitiesCommand extends $Command<
  DescribeAffectedEntitiesCommandInput,
  DescribeAffectedEntitiesCommandOutput,
  HealthClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAffectedEntitiesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: HealthClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAffectedEntitiesCommandInput, DescribeAffectedEntitiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HealthClient";
    const commandName = "DescribeAffectedEntitiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAffectedEntitiesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeAffectedEntitiesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAffectedEntitiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeAffectedEntitiesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAffectedEntitiesCommandOutput> {
    return deserializeAws_json1_1DescribeAffectedEntitiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
