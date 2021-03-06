import { MediaConvertClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConvertClient.ts";
import { ListPresetsRequest, ListPresetsResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1ListPresetsCommand,
  serializeAws_restJson1ListPresetsCommand,
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

export interface ListPresetsCommandInput extends ListPresetsRequest {}
export interface ListPresetsCommandOutput extends ListPresetsResponse, __MetadataBearer {}

/**
 * Retrieve a JSON array of up to twenty of your presets. This will return the presets themselves, not just a list of them. To retrieve the next twenty presets, use the nextToken string returned with the array.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConvertClient, ListPresetsCommand } from "../../client-mediaconvert/mod.ts";
 * // const { MediaConvertClient, ListPresetsCommand } = require("@aws-sdk/client-mediaconvert"); // CommonJS import
 * const client = new MediaConvertClient(config);
 * const command = new ListPresetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPresetsCommandInput} for command's `input` shape.
 * @see {@link ListPresetsCommandOutput} for command's `response` shape.
 * @see {@link MediaConvertClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListPresetsCommand extends $Command<
  ListPresetsCommandInput,
  ListPresetsCommandOutput,
  MediaConvertClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListPresetsCommandInput) {
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
  ): Handler<ListPresetsCommandInput, ListPresetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaConvertClient";
    const commandName = "ListPresetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPresetsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListPresetsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListPresetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListPresetsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPresetsCommandOutput> {
    return deserializeAws_restJson1ListPresetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
