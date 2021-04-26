import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient.ts";
import { BatchGetDevicePositionRequest, BatchGetDevicePositionResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1BatchGetDevicePositionCommand,
  serializeAws_restJson1BatchGetDevicePositionCommand,
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

export interface BatchGetDevicePositionCommandInput extends BatchGetDevicePositionRequest {}
export interface BatchGetDevicePositionCommandOutput extends BatchGetDevicePositionResponse, __MetadataBearer {}

/**
 * <p>A batch request to retrieve all device positions.</p>
 */
export class BatchGetDevicePositionCommand extends $Command<
  BatchGetDevicePositionCommandInput,
  BatchGetDevicePositionCommandOutput,
  LocationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchGetDevicePositionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LocationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchGetDevicePositionCommandInput, BatchGetDevicePositionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LocationClient";
    const commandName = "BatchGetDevicePositionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchGetDevicePositionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchGetDevicePositionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchGetDevicePositionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchGetDevicePositionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchGetDevicePositionCommandOutput> {
    return deserializeAws_restJson1BatchGetDevicePositionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
