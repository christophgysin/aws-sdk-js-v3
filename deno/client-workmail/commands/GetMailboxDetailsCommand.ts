import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient.ts";
import { GetMailboxDetailsRequest, GetMailboxDetailsResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetMailboxDetailsCommand,
  serializeAws_json1_1GetMailboxDetailsCommand,
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

export type GetMailboxDetailsCommandInput = GetMailboxDetailsRequest;
export type GetMailboxDetailsCommandOutput = GetMailboxDetailsResponse & __MetadataBearer;

/**
 * <p>Requests a user's mailbox details for a specified organization and user.</p>
 */
export class GetMailboxDetailsCommand extends $Command<
  GetMailboxDetailsCommandInput,
  GetMailboxDetailsCommandOutput,
  WorkMailClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetMailboxDetailsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkMailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetMailboxDetailsCommandInput, GetMailboxDetailsCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkMailClient";
    const commandName = "GetMailboxDetailsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetMailboxDetailsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetMailboxDetailsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetMailboxDetailsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetMailboxDetailsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetMailboxDetailsCommandOutput> {
    return deserializeAws_json1_1GetMailboxDetailsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
