import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { GetSatelliteRequest, GetSatelliteResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetSatelliteCommand,
  serializeAws_restJson1GetSatelliteCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface GetSatelliteCommandInput extends GetSatelliteRequest {}
export interface GetSatelliteCommandOutput extends GetSatelliteResponse, __MetadataBearer {}

/**
 * <p>Returns a satellite.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, GetSatelliteCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, GetSatelliteCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const command = new GetSatelliteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSatelliteCommandInput} for command's `input` shape.
 * @see {@link GetSatelliteCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetSatelliteCommand extends $Command<
  GetSatelliteCommandInput,
  GetSatelliteCommandOutput,
  GroundStationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetSatelliteCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GroundStationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSatelliteCommandInput, GetSatelliteCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GroundStationClient";
    const commandName = "GetSatelliteCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSatelliteRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetSatelliteResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSatelliteCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetSatelliteCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSatelliteCommandOutput> {
    return deserializeAws_restJson1GetSatelliteCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
