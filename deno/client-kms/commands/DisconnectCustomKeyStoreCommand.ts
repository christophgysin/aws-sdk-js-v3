import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient.ts";
import { DisconnectCustomKeyStoreRequest, DisconnectCustomKeyStoreResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DisconnectCustomKeyStoreCommand,
  serializeAws_json1_1DisconnectCustomKeyStoreCommand,
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

export interface DisconnectCustomKeyStoreCommandInput extends DisconnectCustomKeyStoreRequest {}
export interface DisconnectCustomKeyStoreCommandOutput extends DisconnectCustomKeyStoreResponse, __MetadataBearer {}

/**
 * <p>Disconnects the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a> from its associated AWS CloudHSM cluster. While a custom key
 *       store is disconnected, you can manage the custom key store and its customer master keys
 *       (CMKs), but you cannot create or use CMKs in the custom key store. You can reconnect the
 *       custom key store at any time.</p>
 *          <note>
 *             <p>While a custom key store is disconnected, all attempts to create customer master keys
 *         (CMKs) in the custom key store or to use existing CMKs in <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic operations</a> will
 *         fail. This action can prevent users from storing and accessing sensitive data.</p>
 *          </note>
 *          <p></p>
 *          <p>To find the connection state of a custom key store, use the <a>DescribeCustomKeyStores</a> operation. To reconnect a custom key store, use the
 *         <a>ConnectCustomKeyStore</a> operation.</p>
 *          <p>If the operation succeeds, it returns a JSON object with no
 * properties.</p>
 *          <p>This operation is part of the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">Custom Key Store feature</a> feature in AWS KMS, which
 * combines the convenience and extensive integration of AWS KMS with the isolation and control of a
 * single-tenant key store.</p>
 *
 *          <p>
 *             <b>Cross-account use</b>: No. You cannot perform this operation on a custom key store in a different AWS account.</p>
 *
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:DisconnectCustomKeyStore</a> (IAM policy)</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>ConnectCustomKeyStore</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>CreateCustomKeyStore</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteCustomKeyStore</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeCustomKeyStores</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateCustomKeyStore</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class DisconnectCustomKeyStoreCommand extends $Command<
  DisconnectCustomKeyStoreCommandInput,
  DisconnectCustomKeyStoreCommandOutput,
  KMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisconnectCustomKeyStoreCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisconnectCustomKeyStoreCommandInput, DisconnectCustomKeyStoreCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "DisconnectCustomKeyStoreCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisconnectCustomKeyStoreRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisconnectCustomKeyStoreResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisconnectCustomKeyStoreCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DisconnectCustomKeyStoreCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisconnectCustomKeyStoreCommandOutput> {
    return deserializeAws_json1_1DisconnectCustomKeyStoreCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
