import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient.ts";
import { BatchDisassociateScramSecretRequest, BatchDisassociateScramSecretResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1BatchDisassociateScramSecretCommand,
  serializeAws_restJson1BatchDisassociateScramSecretCommand,
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

export interface BatchDisassociateScramSecretCommandInput extends BatchDisassociateScramSecretRequest {}
export interface BatchDisassociateScramSecretCommandOutput
  extends BatchDisassociateScramSecretResponse,
    __MetadataBearer {}

/**
 * <p>Disassociates one or more Scram Secrets from an Amazon MSK cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, BatchDisassociateScramSecretCommand } from "../../client-kafka/mod.ts";
 * // const { KafkaClient, BatchDisassociateScramSecretCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const command = new BatchDisassociateScramSecretCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDisassociateScramSecretCommandInput} for command's `input` shape.
 * @see {@link BatchDisassociateScramSecretCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class BatchDisassociateScramSecretCommand extends $Command<
  BatchDisassociateScramSecretCommandInput,
  BatchDisassociateScramSecretCommandOutput,
  KafkaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchDisassociateScramSecretCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KafkaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchDisassociateScramSecretCommandInput, BatchDisassociateScramSecretCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KafkaClient";
    const commandName = "BatchDisassociateScramSecretCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchDisassociateScramSecretRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchDisassociateScramSecretResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchDisassociateScramSecretCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchDisassociateScramSecretCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchDisassociateScramSecretCommandOutput> {
    return deserializeAws_restJson1BatchDisassociateScramSecretCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
