import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient.ts";
import {
  ListSubscriptionDefinitionVersionsRequest,
  ListSubscriptionDefinitionVersionsResponse,
} from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListSubscriptionDefinitionVersionsCommand,
  serializeAws_restJson1ListSubscriptionDefinitionVersionsCommand,
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

export type ListSubscriptionDefinitionVersionsCommandInput = ListSubscriptionDefinitionVersionsRequest;
export type ListSubscriptionDefinitionVersionsCommandOutput = ListSubscriptionDefinitionVersionsResponse &
  __MetadataBearer;

/**
 * Lists the versions of a subscription definition.
 */
export class ListSubscriptionDefinitionVersionsCommand extends $Command<
  ListSubscriptionDefinitionVersionsCommandInput,
  ListSubscriptionDefinitionVersionsCommandOutput,
  GreengrassClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListSubscriptionDefinitionVersionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSubscriptionDefinitionVersionsCommandInput, ListSubscriptionDefinitionVersionsCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassClient";
    const commandName = "ListSubscriptionDefinitionVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSubscriptionDefinitionVersionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListSubscriptionDefinitionVersionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListSubscriptionDefinitionVersionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListSubscriptionDefinitionVersionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListSubscriptionDefinitionVersionsCommandOutput> {
    return deserializeAws_restJson1ListSubscriptionDefinitionVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
