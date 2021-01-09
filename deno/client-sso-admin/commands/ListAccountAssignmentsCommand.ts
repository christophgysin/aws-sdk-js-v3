import { SSOAdminClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSOAdminClient.ts";
import { ListAccountAssignmentsRequest, ListAccountAssignmentsResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListAccountAssignmentsCommand,
  serializeAws_json1_1ListAccountAssignmentsCommand,
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

export type ListAccountAssignmentsCommandInput = ListAccountAssignmentsRequest;
export type ListAccountAssignmentsCommandOutput = ListAccountAssignmentsResponse & __MetadataBearer;

/**
 * <p>Lists the assignee of the specified AWS account with the specified permission
 *        set.</p>
 */
export class ListAccountAssignmentsCommand extends $Command<
  ListAccountAssignmentsCommandInput,
  ListAccountAssignmentsCommandOutput,
  SSOAdminClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAccountAssignmentsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSOAdminClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAccountAssignmentsCommandInput, ListAccountAssignmentsCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSOAdminClient";
    const commandName = "ListAccountAssignmentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAccountAssignmentsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAccountAssignmentsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAccountAssignmentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListAccountAssignmentsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAccountAssignmentsCommandOutput> {
    return deserializeAws_json1_1ListAccountAssignmentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
