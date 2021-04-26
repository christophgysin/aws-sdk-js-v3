import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient.ts";
import { DeleteSimulationApplicationRequest, DeleteSimulationApplicationResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DeleteSimulationApplicationCommand,
  serializeAws_restJson1DeleteSimulationApplicationCommand,
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

export interface DeleteSimulationApplicationCommandInput extends DeleteSimulationApplicationRequest {}
export interface DeleteSimulationApplicationCommandOutput
  extends DeleteSimulationApplicationResponse,
    __MetadataBearer {}

/**
 * <p>Deletes a simulation application.</p>
 */
export class DeleteSimulationApplicationCommand extends $Command<
  DeleteSimulationApplicationCommandInput,
  DeleteSimulationApplicationCommandOutput,
  RoboMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteSimulationApplicationCommandInput) {
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
  ): Handler<DeleteSimulationApplicationCommandInput, DeleteSimulationApplicationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RoboMakerClient";
    const commandName = "DeleteSimulationApplicationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteSimulationApplicationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteSimulationApplicationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteSimulationApplicationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteSimulationApplicationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteSimulationApplicationCommandOutput> {
    return deserializeAws_restJson1DeleteSimulationApplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
