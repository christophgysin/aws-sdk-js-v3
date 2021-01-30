import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient.ts";
import { GetNamespaceDeletionStatusRequest, GetNamespaceDeletionStatusResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetNamespaceDeletionStatusCommand,
  serializeAws_json1_1GetNamespaceDeletionStatusCommand,
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

export type GetNamespaceDeletionStatusCommandInput = GetNamespaceDeletionStatusRequest;
export type GetNamespaceDeletionStatusCommandOutput = GetNamespaceDeletionStatusResponse & __MetadataBearer;

/**
 * <p>Gets the status of a namespace deletion task.</p>
 */
export class GetNamespaceDeletionStatusCommand extends $Command<
  GetNamespaceDeletionStatusCommandInput,
  GetNamespaceDeletionStatusCommandOutput,
  IoTThingsGraphClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetNamespaceDeletionStatusCommandInput) {
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
  ): Handler<GetNamespaceDeletionStatusCommandInput, GetNamespaceDeletionStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTThingsGraphClient";
    const commandName = "GetNamespaceDeletionStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetNamespaceDeletionStatusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetNamespaceDeletionStatusResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetNamespaceDeletionStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetNamespaceDeletionStatusCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetNamespaceDeletionStatusCommandOutput> {
    return deserializeAws_json1_1GetNamespaceDeletionStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
