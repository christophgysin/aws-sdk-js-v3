import { CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityClient.ts";
import { DeleteIdentitiesInput, DeleteIdentitiesResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DeleteIdentitiesCommand,
  serializeAws_json1_1DeleteIdentitiesCommand,
} from "../protocols/Aws_json1_1.ts";
import { getSerdePlugin } from "../../middleware-serde/mod.ts";
import { getAwsAuthPlugin } from "../../middleware-signing/mod.ts";
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

export type DeleteIdentitiesCommandInput = DeleteIdentitiesInput;
export type DeleteIdentitiesCommandOutput = DeleteIdentitiesResponse & __MetadataBearer;

/**
 * <p>Deletes identities from an identity pool. You can specify a list of 1-60 identities
 *          that you want to delete.</p>
 *          <p>You must use AWS Developer credentials to call this API.</p>
 */
export class DeleteIdentitiesCommand extends $Command<
  DeleteIdentitiesCommandInput,
  DeleteIdentitiesCommandOutput,
  CognitoIdentityClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteIdentitiesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteIdentitiesCommandInput, DeleteIdentitiesCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.middlewareStack.use(getAwsAuthPlugin(configuration));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityClient";
    const commandName = "DeleteIdentitiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteIdentitiesInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteIdentitiesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteIdentitiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteIdentitiesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteIdentitiesCommandOutput> {
    return deserializeAws_json1_1DeleteIdentitiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
