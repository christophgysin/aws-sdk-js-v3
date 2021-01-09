import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient.ts";
import { RotateEncryptionKeyMessage, RotateEncryptionKeyResult } from "../models/models_1.ts";
import {
  deserializeAws_queryRotateEncryptionKeyCommand,
  serializeAws_queryRotateEncryptionKeyCommand,
} from "../protocols/Aws_query.ts";
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

export type RotateEncryptionKeyCommandInput = RotateEncryptionKeyMessage;
export type RotateEncryptionKeyCommandOutput = RotateEncryptionKeyResult & __MetadataBearer;

/**
 * <p>Rotates the encryption keys for a cluster.</p>
 */
export class RotateEncryptionKeyCommand extends $Command<
  RotateEncryptionKeyCommandInput,
  RotateEncryptionKeyCommandOutput,
  RedshiftClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RotateEncryptionKeyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RotateEncryptionKeyCommandInput, RotateEncryptionKeyCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "RotateEncryptionKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RotateEncryptionKeyMessage.filterSensitiveLog,
      outputFilterSensitiveLog: RotateEncryptionKeyResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RotateEncryptionKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryRotateEncryptionKeyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RotateEncryptionKeyCommandOutput> {
    return deserializeAws_queryRotateEncryptionKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
