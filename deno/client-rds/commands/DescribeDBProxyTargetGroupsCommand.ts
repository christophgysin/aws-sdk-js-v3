import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient.ts";
import { DescribeDBProxyTargetGroupsRequest, DescribeDBProxyTargetGroupsResponse } from "../models/models_0.ts";
import {
  deserializeAws_queryDescribeDBProxyTargetGroupsCommand,
  serializeAws_queryDescribeDBProxyTargetGroupsCommand,
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

export interface DescribeDBProxyTargetGroupsCommandInput extends DescribeDBProxyTargetGroupsRequest {}
export interface DescribeDBProxyTargetGroupsCommandOutput
  extends DescribeDBProxyTargetGroupsResponse,
    __MetadataBearer {}

/**
 * <p>Returns information about DB proxy target groups, represented by <code>DBProxyTargetGroup</code> data structures.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeDBProxyTargetGroupsCommand } from "../../client-rds/mod.ts";
 * // const { RDSClient, DescribeDBProxyTargetGroupsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DescribeDBProxyTargetGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDBProxyTargetGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeDBProxyTargetGroupsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeDBProxyTargetGroupsCommand extends $Command<
  DescribeDBProxyTargetGroupsCommandInput,
  DescribeDBProxyTargetGroupsCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeDBProxyTargetGroupsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDBProxyTargetGroupsCommandInput, DescribeDBProxyTargetGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DescribeDBProxyTargetGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDBProxyTargetGroupsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeDBProxyTargetGroupsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeDBProxyTargetGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeDBProxyTargetGroupsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDBProxyTargetGroupsCommandOutput> {
    return deserializeAws_queryDescribeDBProxyTargetGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
