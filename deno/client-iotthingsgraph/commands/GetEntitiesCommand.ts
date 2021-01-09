import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient.ts";
import { GetEntitiesRequest, GetEntitiesResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetEntitiesCommand,
  serializeAws_json1_1GetEntitiesCommand,
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

export type GetEntitiesCommandInput = GetEntitiesRequest;
export type GetEntitiesCommandOutput = GetEntitiesResponse & __MetadataBearer;

/**
 * <p>Gets definitions of the specified entities. Uses the latest version of the user's namespace by default. This API returns the
 *       following TDM entities.</p>
 *          <ul>
 *             <li>
 *                <p>Properties</p>
 *             </li>
 *             <li>
 *                <p>States</p>
 *             </li>
 *             <li>
 *                <p>Events</p>
 *             </li>
 *             <li>
 *                <p>Actions</p>
 *             </li>
 *             <li>
 *                <p>Capabilities</p>
 *             </li>
 *             <li>
 *                <p>Mappings</p>
 *             </li>
 *             <li>
 *                <p>Devices</p>
 *             </li>
 *             <li>
 *                <p>Device Models</p>
 *             </li>
 *             <li>
 *                <p>Services</p>
 *             </li>
 *          </ul>
 *          <p>This action doesn't return definitions for systems, flows, and deployments.</p>
 */
export class GetEntitiesCommand extends $Command<
  GetEntitiesCommandInput,
  GetEntitiesCommandOutput,
  IoTThingsGraphClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetEntitiesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTThingsGraphClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetEntitiesCommandInput, GetEntitiesCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTThingsGraphClient";
    const commandName = "GetEntitiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetEntitiesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetEntitiesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetEntitiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetEntitiesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetEntitiesCommandOutput> {
    return deserializeAws_json1_1GetEntitiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
