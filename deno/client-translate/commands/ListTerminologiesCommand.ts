import { ServiceInputTypes, ServiceOutputTypes, TranslateClientResolvedConfig } from "../TranslateClient.ts";
import { ListTerminologiesRequest, ListTerminologiesResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListTerminologiesCommand,
  serializeAws_json1_1ListTerminologiesCommand,
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

export type ListTerminologiesCommandInput = ListTerminologiesRequest;
export type ListTerminologiesCommandOutput = ListTerminologiesResponse & __MetadataBearer;

/**
 * <p>Provides a list of custom terminologies associated with your account.</p>
 */
export class ListTerminologiesCommand extends $Command<
  ListTerminologiesCommandInput,
  ListTerminologiesCommandOutput,
  TranslateClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListTerminologiesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TranslateClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTerminologiesCommandInput, ListTerminologiesCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranslateClient";
    const commandName = "ListTerminologiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListTerminologiesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListTerminologiesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListTerminologiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListTerminologiesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTerminologiesCommandOutput> {
    return deserializeAws_json1_1ListTerminologiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
