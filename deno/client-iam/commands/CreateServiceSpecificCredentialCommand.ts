import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient.ts";
import { CreateServiceSpecificCredentialRequest, CreateServiceSpecificCredentialResponse } from "../models/models_0.ts";
import {
  deserializeAws_queryCreateServiceSpecificCredentialCommand,
  serializeAws_queryCreateServiceSpecificCredentialCommand,
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

export interface CreateServiceSpecificCredentialCommandInput extends CreateServiceSpecificCredentialRequest {}
export interface CreateServiceSpecificCredentialCommandOutput
  extends CreateServiceSpecificCredentialResponse,
    __MetadataBearer {}

/**
 * <p>Generates a set of credentials consisting of a user name and password that can be used
 *             to access the service specified in the request. These credentials are generated by
 *             IAM, and can be used only for the specified service. </p>
 *         <p>You can have a maximum of two sets of service-specific credentials for each supported
 *             service per user.</p>
 *         <p>You can create service-specific credentials for AWS CodeCommit and Amazon Keyspaces (for Apache
 *             Cassandra).</p>
 *         <p>You can reset the password to a new service-generated value by calling <a>ResetServiceSpecificCredential</a>.</p>
 *         <p>For more information about service-specific credentials, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_ssh-keys.html">Using IAM
 *                 with AWS CodeCommit: Git credentials, SSH keys, and AWS access keys</a> in the
 *                 <i>IAM User Guide</i>.</p>
 */
export class CreateServiceSpecificCredentialCommand extends $Command<
  CreateServiceSpecificCredentialCommandInput,
  CreateServiceSpecificCredentialCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateServiceSpecificCredentialCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateServiceSpecificCredentialCommandInput, CreateServiceSpecificCredentialCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "CreateServiceSpecificCredentialCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateServiceSpecificCredentialRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateServiceSpecificCredentialResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateServiceSpecificCredentialCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryCreateServiceSpecificCredentialCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateServiceSpecificCredentialCommandOutput> {
    return deserializeAws_queryCreateServiceSpecificCredentialCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
