import {
  ApplicationDiscoveryServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationDiscoveryServiceClient.ts";
import { DescribeAgentsRequest, DescribeAgentsResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeAgentsCommand,
  serializeAws_json1_1DescribeAgentsCommand,
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

export interface DescribeAgentsCommandInput extends DescribeAgentsRequest {}
export interface DescribeAgentsCommandOutput extends DescribeAgentsResponse, __MetadataBearer {}

/**
 * <p>Lists agents or connectors as specified by ID or other filters. All agents/connectors
 *       associated with your user account can be listed if you call <code>DescribeAgents</code> as is
 *       without passing any parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, DescribeAgentsCommand } from "../../client-application-discovery-service/mod.ts";
 * // const { ApplicationDiscoveryServiceClient, DescribeAgentsCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const command = new DescribeAgentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAgentsCommandInput} for command's `input` shape.
 * @see {@link DescribeAgentsCommandOutput} for command's `response` shape.
 * @see {@link ApplicationDiscoveryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeAgentsCommand extends $Command<
  DescribeAgentsCommandInput,
  DescribeAgentsCommandOutput,
  ApplicationDiscoveryServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAgentsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApplicationDiscoveryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAgentsCommandInput, DescribeAgentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApplicationDiscoveryServiceClient";
    const commandName = "DescribeAgentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAgentsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeAgentsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAgentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeAgentsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAgentsCommandOutput> {
    return deserializeAws_json1_1DescribeAgentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
