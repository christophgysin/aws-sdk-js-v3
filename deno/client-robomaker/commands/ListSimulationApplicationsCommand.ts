import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient.ts";
import { ListSimulationApplicationsRequest, ListSimulationApplicationsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListSimulationApplicationsCommand,
  serializeAws_restJson1ListSimulationApplicationsCommand,
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

export interface ListSimulationApplicationsCommandInput extends ListSimulationApplicationsRequest {}
export interface ListSimulationApplicationsCommandOutput extends ListSimulationApplicationsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of simulation applications. You can optionally provide filters to
 *          retrieve specific simulation applications. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, ListSimulationApplicationsCommand } from "../../client-robomaker/mod.ts";
 * // const { RoboMakerClient, ListSimulationApplicationsCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new ListSimulationApplicationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSimulationApplicationsCommandInput} for command's `input` shape.
 * @see {@link ListSimulationApplicationsCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListSimulationApplicationsCommand extends $Command<
  ListSimulationApplicationsCommandInput,
  ListSimulationApplicationsCommandOutput,
  RoboMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListSimulationApplicationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RoboMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSimulationApplicationsCommandInput, ListSimulationApplicationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RoboMakerClient";
    const commandName = "ListSimulationApplicationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSimulationApplicationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListSimulationApplicationsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListSimulationApplicationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListSimulationApplicationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListSimulationApplicationsCommandOutput> {
    return deserializeAws_restJson1ListSimulationApplicationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
