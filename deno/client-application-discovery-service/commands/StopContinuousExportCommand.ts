import {
  ApplicationDiscoveryServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationDiscoveryServiceClient.ts";
import { StopContinuousExportRequest, StopContinuousExportResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1StopContinuousExportCommand,
  serializeAws_json1_1StopContinuousExportCommand,
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

export interface StopContinuousExportCommandInput extends StopContinuousExportRequest {}
export interface StopContinuousExportCommandOutput extends StopContinuousExportResponse, __MetadataBearer {}

/**
 * <p>Stop the continuous flow of agent's discovered data into Amazon Athena.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, StopContinuousExportCommand } from "../../client-application-discovery-service/mod.ts";
 * // const { ApplicationDiscoveryServiceClient, StopContinuousExportCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const command = new StopContinuousExportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopContinuousExportCommandInput} for command's `input` shape.
 * @see {@link StopContinuousExportCommandOutput} for command's `response` shape.
 * @see {@link ApplicationDiscoveryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class StopContinuousExportCommand extends $Command<
  StopContinuousExportCommandInput,
  StopContinuousExportCommandOutput,
  ApplicationDiscoveryServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StopContinuousExportCommandInput) {
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
  ): Handler<StopContinuousExportCommandInput, StopContinuousExportCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApplicationDiscoveryServiceClient";
    const commandName = "StopContinuousExportCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopContinuousExportRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StopContinuousExportResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopContinuousExportCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StopContinuousExportCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopContinuousExportCommandOutput> {
    return deserializeAws_json1_1StopContinuousExportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
