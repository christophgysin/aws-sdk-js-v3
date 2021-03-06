import { MediaConvertClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConvertClient.ts";
import { UpdatePresetRequest, UpdatePresetResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1UpdatePresetCommand,
  serializeAws_restJson1UpdatePresetCommand,
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

export interface UpdatePresetCommandInput extends UpdatePresetRequest {}
export interface UpdatePresetCommandOutput extends UpdatePresetResponse, __MetadataBearer {}

/**
 * Modify one of your existing presets.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConvertClient, UpdatePresetCommand } from "../../client-mediaconvert/mod.ts";
 * // const { MediaConvertClient, UpdatePresetCommand } = require("@aws-sdk/client-mediaconvert"); // CommonJS import
 * const client = new MediaConvertClient(config);
 * const command = new UpdatePresetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePresetCommandInput} for command's `input` shape.
 * @see {@link UpdatePresetCommandOutput} for command's `response` shape.
 * @see {@link MediaConvertClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdatePresetCommand extends $Command<
  UpdatePresetCommandInput,
  UpdatePresetCommandOutput,
  MediaConvertClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdatePresetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaConvertClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdatePresetCommandInput, UpdatePresetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaConvertClient";
    const commandName = "UpdatePresetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdatePresetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdatePresetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdatePresetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdatePresetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdatePresetCommandOutput> {
    return deserializeAws_restJson1UpdatePresetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
