import { QLDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QLDBClient.ts";
import { CancelJournalKinesisStreamRequest, CancelJournalKinesisStreamResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1CancelJournalKinesisStreamCommand,
  serializeAws_restJson1CancelJournalKinesisStreamCommand,
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

export type CancelJournalKinesisStreamCommandInput = CancelJournalKinesisStreamRequest;
export type CancelJournalKinesisStreamCommandOutput = CancelJournalKinesisStreamResponse & __MetadataBearer;

/**
 * <p>Ends a given Amazon QLDB journal stream. Before a stream can be canceled, its current
 *          status must be <code>ACTIVE</code>.</p>
 *          <p>You can't restart a stream after you cancel it. Canceled QLDB stream resources are
 *          subject to a 7-day retention period, so they are automatically deleted after this limit
 *          expires.</p>
 */
export class CancelJournalKinesisStreamCommand extends $Command<
  CancelJournalKinesisStreamCommandInput,
  CancelJournalKinesisStreamCommandOutput,
  QLDBClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CancelJournalKinesisStreamCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QLDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CancelJournalKinesisStreamCommandInput, CancelJournalKinesisStreamCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QLDBClient";
    const commandName = "CancelJournalKinesisStreamCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CancelJournalKinesisStreamRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CancelJournalKinesisStreamResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CancelJournalKinesisStreamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CancelJournalKinesisStreamCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CancelJournalKinesisStreamCommandOutput> {
    return deserializeAws_restJson1CancelJournalKinesisStreamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
