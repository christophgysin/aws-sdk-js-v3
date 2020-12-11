import { IvsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvsClient.ts";
import { ListPlaybackKeyPairsRequest, ListPlaybackKeyPairsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListPlaybackKeyPairsCommand,
  serializeAws_restJson1ListPlaybackKeyPairsCommand,
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

export type ListPlaybackKeyPairsCommandInput = ListPlaybackKeyPairsRequest;
export type ListPlaybackKeyPairsCommandOutput = ListPlaybackKeyPairsResponse & __MetadataBearer;

/**
 * <p>Gets summary information about playback key pairs.</p>
 */
export class ListPlaybackKeyPairsCommand extends $Command<
  ListPlaybackKeyPairsCommandInput,
  ListPlaybackKeyPairsCommandOutput,
  IvsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListPlaybackKeyPairsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IvsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListPlaybackKeyPairsCommandInput, ListPlaybackKeyPairsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IvsClient";
    const commandName = "ListPlaybackKeyPairsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPlaybackKeyPairsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListPlaybackKeyPairsResponse.filterSensitiveLog,
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

  private serialize(input: ListPlaybackKeyPairsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListPlaybackKeyPairsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPlaybackKeyPairsCommandOutput> {
    return deserializeAws_restJson1ListPlaybackKeyPairsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
