import { IoTDataPlaneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTDataPlaneClient.ts";
import { ListNamedShadowsForThingRequest, ListNamedShadowsForThingResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListNamedShadowsForThingCommand,
  serializeAws_restJson1ListNamedShadowsForThingCommand,
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

export interface ListNamedShadowsForThingCommandInput extends ListNamedShadowsForThingRequest {}
export interface ListNamedShadowsForThingCommandOutput extends ListNamedShadowsForThingResponse, __MetadataBearer {}

/**
 * <p>Lists the shadows for the specified thing.</p>
 */
export class ListNamedShadowsForThingCommand extends $Command<
  ListNamedShadowsForThingCommandInput,
  ListNamedShadowsForThingCommandOutput,
  IoTDataPlaneClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListNamedShadowsForThingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTDataPlaneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListNamedShadowsForThingCommandInput, ListNamedShadowsForThingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTDataPlaneClient";
    const commandName = "ListNamedShadowsForThingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListNamedShadowsForThingRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListNamedShadowsForThingResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListNamedShadowsForThingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListNamedShadowsForThingCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListNamedShadowsForThingCommandOutput> {
    return deserializeAws_restJson1ListNamedShadowsForThingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
