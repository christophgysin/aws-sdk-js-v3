import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient.ts";
import { GetApiCacheRequest, GetApiCacheResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetApiCacheCommand,
  serializeAws_restJson1GetApiCacheCommand,
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

export type GetApiCacheCommandInput = GetApiCacheRequest;
export type GetApiCacheCommandOutput = GetApiCacheResponse & __MetadataBearer;

/**
 * <p>Retrieves an <code>ApiCache</code> object.</p>
 */
export class GetApiCacheCommand extends $Command<
  GetApiCacheCommandInput,
  GetApiCacheCommandOutput,
  AppSyncClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetApiCacheCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetApiCacheCommandInput, GetApiCacheCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppSyncClient";
    const commandName = "GetApiCacheCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetApiCacheRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetApiCacheResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetApiCacheCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetApiCacheCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetApiCacheCommandOutput> {
    return deserializeAws_restJson1GetApiCacheCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
