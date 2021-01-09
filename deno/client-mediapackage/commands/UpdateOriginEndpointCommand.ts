import { MediaPackageClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageClient.ts";
import { UpdateOriginEndpointRequest, UpdateOriginEndpointResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1UpdateOriginEndpointCommand,
  serializeAws_restJson1UpdateOriginEndpointCommand,
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

export type UpdateOriginEndpointCommandInput = UpdateOriginEndpointRequest;
export type UpdateOriginEndpointCommandOutput = UpdateOriginEndpointResponse & __MetadataBearer;

/**
 * Updates an existing OriginEndpoint.
 */
export class UpdateOriginEndpointCommand extends $Command<
  UpdateOriginEndpointCommandInput,
  UpdateOriginEndpointCommandOutput,
  MediaPackageClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateOriginEndpointCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaPackageClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateOriginEndpointCommandInput, UpdateOriginEndpointCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaPackageClient";
    const commandName = "UpdateOriginEndpointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateOriginEndpointRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateOriginEndpointResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateOriginEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateOriginEndpointCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateOriginEndpointCommandOutput> {
    return deserializeAws_restJson1UpdateOriginEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
