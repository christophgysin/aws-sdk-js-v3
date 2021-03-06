import {
  ApplicationInsightsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationInsightsClient.ts";
import { UpdateComponentRequest, UpdateComponentResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1UpdateComponentCommand,
  serializeAws_json1_1UpdateComponentCommand,
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

export interface UpdateComponentCommandInput extends UpdateComponentRequest {}
export interface UpdateComponentCommandOutput extends UpdateComponentResponse, __MetadataBearer {}

/**
 * <p>Updates the custom component name and/or the list of resources that make up the
 *          component.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationInsightsClient, UpdateComponentCommand } from "../../client-application-insights/mod.ts";
 * // const { ApplicationInsightsClient, UpdateComponentCommand } = require("@aws-sdk/client-application-insights"); // CommonJS import
 * const client = new ApplicationInsightsClient(config);
 * const command = new UpdateComponentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateComponentCommandInput} for command's `input` shape.
 * @see {@link UpdateComponentCommandOutput} for command's `response` shape.
 * @see {@link ApplicationInsightsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateComponentCommand extends $Command<
  UpdateComponentCommandInput,
  UpdateComponentCommandOutput,
  ApplicationInsightsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateComponentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApplicationInsightsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateComponentCommandInput, UpdateComponentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApplicationInsightsClient";
    const commandName = "UpdateComponentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateComponentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateComponentResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateComponentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateComponentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateComponentCommandOutput> {
    return deserializeAws_json1_1UpdateComponentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
