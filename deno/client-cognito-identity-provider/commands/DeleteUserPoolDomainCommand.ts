
import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient.ts";
import { DeleteUserPoolDomainRequest, DeleteUserPoolDomainResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DeleteUserPoolDomainCommand,
  serializeAws_json1_1DeleteUserPoolDomainCommand,
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

export type DeleteUserPoolDomainCommandInput = DeleteUserPoolDomainRequest;
export type DeleteUserPoolDomainCommandOutput = DeleteUserPoolDomainResponse & __MetadataBearer;

export class DeleteUserPoolDomainCommand extends $Command<
  DeleteUserPoolDomainCommandInput,
  DeleteUserPoolDomainCommandOutput,
  CognitoIdentityProviderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteUserPoolDomainCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityProviderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteUserPoolDomainCommandInput, DeleteUserPoolDomainCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: DeleteUserPoolDomainRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteUserPoolDomainResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteUserPoolDomainCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteUserPoolDomainCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteUserPoolDomainCommandOutput> {
    return deserializeAws_json1_1DeleteUserPoolDomainCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
