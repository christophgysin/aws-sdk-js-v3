import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient.ts";
import { ListMissionProfilesRequest, ListMissionProfilesResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListMissionProfilesCommand,
  serializeAws_restJson1ListMissionProfilesCommand,
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

export interface ListMissionProfilesCommandInput extends ListMissionProfilesRequest {}
export interface ListMissionProfilesCommandOutput extends ListMissionProfilesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of mission profiles.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, ListMissionProfilesCommand } from "../../client-groundstation/mod.ts";
 * // const { GroundStationClient, ListMissionProfilesCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const command = new ListMissionProfilesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMissionProfilesCommandInput} for command's `input` shape.
 * @see {@link ListMissionProfilesCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListMissionProfilesCommand extends $Command<
  ListMissionProfilesCommandInput,
  ListMissionProfilesCommandOutput,
  GroundStationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListMissionProfilesCommandInput) {
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
  ): Handler<ListMissionProfilesCommandInput, ListMissionProfilesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GroundStationClient";
    const commandName = "ListMissionProfilesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListMissionProfilesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListMissionProfilesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListMissionProfilesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListMissionProfilesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListMissionProfilesCommandOutput> {
    return deserializeAws_restJson1ListMissionProfilesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
