import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient.ts";
import { BatchEvaluateGeofencesRequest, BatchEvaluateGeofencesResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1BatchEvaluateGeofencesCommand,
  serializeAws_restJson1BatchEvaluateGeofencesCommand,
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

export interface BatchEvaluateGeofencesCommandInput extends BatchEvaluateGeofencesRequest {}
export interface BatchEvaluateGeofencesCommandOutput extends BatchEvaluateGeofencesResponse, __MetadataBearer {}

/**
 * <p>Evaluates device positions against the geofence geometries from a given geofence
 *             collection. The evaluation determines if the device has entered or exited a geofenced
 *             area, which publishes ENTER or EXIT geofence events to Amazon EventBridge.</p>
 *         <note>
 *             <p>The last geofence that a device was observed within, if any, is tracked for 30
 *                 days after the most recent device position update</p>
 *         </note>
 */
export class BatchEvaluateGeofencesCommand extends $Command<
  BatchEvaluateGeofencesCommandInput,
  BatchEvaluateGeofencesCommandOutput,
  LocationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchEvaluateGeofencesCommandInput) {
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
  ): Handler<BatchEvaluateGeofencesCommandInput, BatchEvaluateGeofencesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LocationClient";
    const commandName = "BatchEvaluateGeofencesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchEvaluateGeofencesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchEvaluateGeofencesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchEvaluateGeofencesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchEvaluateGeofencesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchEvaluateGeofencesCommandOutput> {
    return deserializeAws_restJson1BatchEvaluateGeofencesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
