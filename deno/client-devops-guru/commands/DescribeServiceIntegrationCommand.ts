import { DevOpsGuruClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsGuruClient.ts";
import { DescribeServiceIntegrationRequest, DescribeServiceIntegrationResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DescribeServiceIntegrationCommand,
  serializeAws_restJson1DescribeServiceIntegrationCommand,
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

export interface DescribeServiceIntegrationCommandInput extends DescribeServiceIntegrationRequest {}
export interface DescribeServiceIntegrationCommandOutput extends DescribeServiceIntegrationResponse, __MetadataBearer {}

/**
 * <p>
 * 			Returns the integration status of services that are integrated with DevOps Guru.
 * 			The one service that can be integrated with DevOps Guru
 *       	is AWS Systems Manager, which can be used to create an OpsItem for each generated insight.
 * 		</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, DescribeServiceIntegrationCommand } from "../../client-devops-guru/mod.ts";
 * // const { DevOpsGuruClient, DescribeServiceIntegrationCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const command = new DescribeServiceIntegrationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeServiceIntegrationCommandInput} for command's `input` shape.
 * @see {@link DescribeServiceIntegrationCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeServiceIntegrationCommand extends $Command<
  DescribeServiceIntegrationCommandInput,
  DescribeServiceIntegrationCommandOutput,
  DevOpsGuruClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeServiceIntegrationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DevOpsGuruClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeServiceIntegrationCommandInput, DescribeServiceIntegrationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DevOpsGuruClient";
    const commandName = "DescribeServiceIntegrationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeServiceIntegrationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeServiceIntegrationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeServiceIntegrationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeServiceIntegrationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeServiceIntegrationCommandOutput> {
    return deserializeAws_restJson1DescribeServiceIntegrationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
