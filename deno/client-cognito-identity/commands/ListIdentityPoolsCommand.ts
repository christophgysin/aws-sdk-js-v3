import { CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityClient.ts";
import { ListIdentityPoolsInput, ListIdentityPoolsResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListIdentityPoolsCommand,
  serializeAws_json1_1ListIdentityPoolsCommand,
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

export type ListIdentityPoolsCommandInput = ListIdentityPoolsInput;
export type ListIdentityPoolsCommandOutput = ListIdentityPoolsResponse & __MetadataBearer;

/**
 * <p>Lists all of the Cognito identity pools registered for your account.</p>
 *          <p>You must use AWS Developer credentials to call this API.</p>
 */
export class ListIdentityPoolsCommand extends $Command<
  ListIdentityPoolsCommandInput,
  ListIdentityPoolsCommandOutput,
  CognitoIdentityClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListIdentityPoolsCommandInput) {
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
  ): Handler<ListIdentityPoolsCommandInput, ListIdentityPoolsCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.middlewareStack.use(getAwsAuthPlugin(configuration));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityClient";
    const commandName = "ListIdentityPoolsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListIdentityPoolsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListIdentityPoolsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListIdentityPoolsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListIdentityPoolsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListIdentityPoolsCommandOutput> {
    return deserializeAws_json1_1ListIdentityPoolsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
