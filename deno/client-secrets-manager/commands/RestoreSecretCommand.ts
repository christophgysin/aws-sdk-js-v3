import { SecretsManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecretsManagerClient.ts";
import { RestoreSecretRequest, RestoreSecretResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1RestoreSecretCommand,
  serializeAws_json1_1RestoreSecretCommand,
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

export type RestoreSecretCommandInput = RestoreSecretRequest;
export type RestoreSecretCommandOutput = RestoreSecretResponse & __MetadataBearer;

/**
 * <p>Cancels the scheduled deletion of a secret by removing the <code>DeletedDate</code> time
 *       stamp. This makes the secret accessible to query once again.</p>
 *          <p>
 *             <b>Minimum permissions</b>
 *          </p>
 *          <p>To run this command, you must have the following permissions:</p>
 *          <ul>
 *             <li>
 *                <p>secretsmanager:RestoreSecret</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Related operations</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>To delete a secret, use <a>DeleteSecret</a>.</p>
 *             </li>
 *          </ul>
 */
export class RestoreSecretCommand extends $Command<
  RestoreSecretCommandInput,
  RestoreSecretCommandOutput,
  SecretsManagerClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RestoreSecretCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecretsManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RestoreSecretCommandInput, RestoreSecretCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecretsManagerClient";
    const commandName = "RestoreSecretCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RestoreSecretRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RestoreSecretResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RestoreSecretCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RestoreSecretCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RestoreSecretCommandOutput> {
    return deserializeAws_json1_1RestoreSecretCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
