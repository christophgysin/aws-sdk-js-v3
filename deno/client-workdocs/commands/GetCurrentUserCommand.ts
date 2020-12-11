import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient.ts";
import { GetCurrentUserRequest, GetCurrentUserResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetCurrentUserCommand,
  serializeAws_restJson1GetCurrentUserCommand,
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

export type GetCurrentUserCommandInput = GetCurrentUserRequest;
export type GetCurrentUserCommandOutput = GetCurrentUserResponse & __MetadataBearer;

/**
 * <p>Retrieves details of the current user for whom the authentication token was
 *             generated. This is not a valid action for SigV4 (administrative API) clients.</p>
 *         <p>This action requires an authentication token. To get an authentication token,
 *             register an application with Amazon WorkDocs. For more information, see <a href="https://docs.aws.amazon.com/workdocs/latest/developerguide/wd-auth-user.html">Authentication and Access
 *                 Control for User Applications</a> in the
 *             <i>Amazon
 *                 WorkDocs Developer Guide</i>.</p>
 */
export class GetCurrentUserCommand extends $Command<
  GetCurrentUserCommandInput,
  GetCurrentUserCommandOutput,
  WorkDocsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetCurrentUserCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkDocsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCurrentUserCommandInput, GetCurrentUserCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkDocsClient";
    const commandName = "GetCurrentUserCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetCurrentUserRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetCurrentUserResponse.filterSensitiveLog,
    };

    if (typeof logger.info === "function") {
      logger.info({
        clientName,
        commandName,
      });
    }

    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetCurrentUserCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetCurrentUserCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCurrentUserCommandOutput> {
    return deserializeAws_restJson1GetCurrentUserCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
