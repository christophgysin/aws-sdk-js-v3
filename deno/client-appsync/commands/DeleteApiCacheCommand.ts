import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient.ts";
import { DeleteApiCacheRequest, DeleteApiCacheResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DeleteApiCacheCommand,
  serializeAws_restJson1DeleteApiCacheCommand,
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

export type DeleteApiCacheCommandInput = DeleteApiCacheRequest;
export type DeleteApiCacheCommandOutput = DeleteApiCacheResponse & __MetadataBearer;

export class DeleteApiCacheCommand extends $Command<
  DeleteApiCacheCommandInput,
  DeleteApiCacheCommandOutput,
  AppSyncClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteApiCacheCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteApiCacheCommandInput, DeleteApiCacheCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppSyncClient";
    const commandName = "DeleteApiCacheCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteApiCacheRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteApiCacheResponse.filterSensitiveLog,
    };

    if (typeof logger.info === "function") {
      logger.info({
        clientName,
        commandName,
      });
    }

    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteApiCacheCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteApiCacheCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteApiCacheCommandOutput> {
    return deserializeAws_restJson1DeleteApiCacheCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
