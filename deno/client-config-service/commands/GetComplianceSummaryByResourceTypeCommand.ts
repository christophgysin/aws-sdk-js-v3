import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient.ts";
import {
  GetComplianceSummaryByResourceTypeRequest,
  GetComplianceSummaryByResourceTypeResponse,
} from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetComplianceSummaryByResourceTypeCommand,
  serializeAws_json1_1GetComplianceSummaryByResourceTypeCommand,
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

export interface GetComplianceSummaryByResourceTypeCommandInput extends GetComplianceSummaryByResourceTypeRequest {}
export interface GetComplianceSummaryByResourceTypeCommandOutput
  extends GetComplianceSummaryByResourceTypeResponse,
    __MetadataBearer {}

/**
 * <p>Returns the number of resources that are compliant and the
 * 			number that are noncompliant. You can specify one or more resource
 * 			types to get these numbers for each resource type. The maximum
 * 			number returned is 100.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, GetComplianceSummaryByResourceTypeCommand } from "../../client-config-service/mod.ts";
 * // const { ConfigServiceClient, GetComplianceSummaryByResourceTypeCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new GetComplianceSummaryByResourceTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetComplianceSummaryByResourceTypeCommandInput} for command's `input` shape.
 * @see {@link GetComplianceSummaryByResourceTypeCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetComplianceSummaryByResourceTypeCommand extends $Command<
  GetComplianceSummaryByResourceTypeCommandInput,
  GetComplianceSummaryByResourceTypeCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetComplianceSummaryByResourceTypeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetComplianceSummaryByResourceTypeCommandInput, GetComplianceSummaryByResourceTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "GetComplianceSummaryByResourceTypeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetComplianceSummaryByResourceTypeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetComplianceSummaryByResourceTypeResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetComplianceSummaryByResourceTypeCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetComplianceSummaryByResourceTypeCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetComplianceSummaryByResourceTypeCommandOutput> {
    return deserializeAws_json1_1GetComplianceSummaryByResourceTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
