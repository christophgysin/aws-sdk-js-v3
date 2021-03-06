import { IoTEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsClient.ts";
import { ListDetectorModelVersionsRequest, ListDetectorModelVersionsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListDetectorModelVersionsCommand,
  serializeAws_restJson1ListDetectorModelVersionsCommand,
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

export interface ListDetectorModelVersionsCommandInput extends ListDetectorModelVersionsRequest {}
export interface ListDetectorModelVersionsCommandOutput extends ListDetectorModelVersionsResponse, __MetadataBearer {}

/**
 * <p>Lists all the versions of a detector model. Only the metadata associated with each
 *       detector model version is returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, ListDetectorModelVersionsCommand } from "../../client-iot-events/mod.ts";
 * // const { IoTEventsClient, ListDetectorModelVersionsCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * const client = new IoTEventsClient(config);
 * const command = new ListDetectorModelVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDetectorModelVersionsCommandInput} for command's `input` shape.
 * @see {@link ListDetectorModelVersionsCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListDetectorModelVersionsCommand extends $Command<
  ListDetectorModelVersionsCommandInput,
  ListDetectorModelVersionsCommandOutput,
  IoTEventsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListDetectorModelVersionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTEventsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDetectorModelVersionsCommandInput, ListDetectorModelVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTEventsClient";
    const commandName = "ListDetectorModelVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDetectorModelVersionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListDetectorModelVersionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListDetectorModelVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListDetectorModelVersionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListDetectorModelVersionsCommandOutput> {
    return deserializeAws_restJson1ListDetectorModelVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
