import {
  ApplicationDiscoveryServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationDiscoveryServiceClient.ts";
import { DescribeExportConfigurationsRequest, DescribeExportConfigurationsResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeExportConfigurationsCommand,
  serializeAws_json1_1DescribeExportConfigurationsCommand,
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

export type DescribeExportConfigurationsCommandInput = DescribeExportConfigurationsRequest;
export type DescribeExportConfigurationsCommandOutput = DescribeExportConfigurationsResponse & __MetadataBearer;

/**
 * @deprecated
 *
 * <p>
 *             <code>DescribeExportConfigurations</code> is deprecated. Use <a href="https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DescribeExportTasks.html">DescribeImportTasks</a>, instead.</p>
 */
export class DescribeExportConfigurationsCommand extends $Command<
  DescribeExportConfigurationsCommandInput,
  DescribeExportConfigurationsCommandOutput,
  ApplicationDiscoveryServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeExportConfigurationsCommandInput) {
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
  ): Handler<DescribeExportConfigurationsCommandInput, DescribeExportConfigurationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApplicationDiscoveryServiceClient";
    const commandName = "DescribeExportConfigurationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeExportConfigurationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeExportConfigurationsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeExportConfigurationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeExportConfigurationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeExportConfigurationsCommandOutput> {
    return deserializeAws_json1_1DescribeExportConfigurationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
