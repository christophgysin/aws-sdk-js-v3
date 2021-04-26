import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient.ts";
import { ListOrganizationalUnitsForParentRequest, ListOrganizationalUnitsForParentResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListOrganizationalUnitsForParentCommand,
  serializeAws_json1_1ListOrganizationalUnitsForParentCommand,
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

export interface ListOrganizationalUnitsForParentCommandInput extends ListOrganizationalUnitsForParentRequest {}
export interface ListOrganizationalUnitsForParentCommandOutput
  extends ListOrganizationalUnitsForParentResponse,
    __MetadataBearer {}

/**
 * <p>Lists the organizational units (OUs) in a parent organizational unit or root.</p>
 *         <note>
 *             <p>Always check the <code>NextToken</code> response parameter
 * for a <code>null</code> value when calling a <code>List*</code> operation. These operations can
 * occasionally return an empty set of results even when there are more results available. The
 * <code>NextToken</code> response parameter value is <code>null</code>
 *                <i>only</i>
 * when there are no more results to display.</p>
 *          </note>
 *          <p>This operation can be called only from the organization's
 * management account or by a member account that is a delegated administrator for an AWS service.</p>
 */
export class ListOrganizationalUnitsForParentCommand extends $Command<
  ListOrganizationalUnitsForParentCommandInput,
  ListOrganizationalUnitsForParentCommandOutput,
  OrganizationsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListOrganizationalUnitsForParentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OrganizationsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListOrganizationalUnitsForParentCommandInput, ListOrganizationalUnitsForParentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OrganizationsClient";
    const commandName = "ListOrganizationalUnitsForParentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListOrganizationalUnitsForParentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListOrganizationalUnitsForParentResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListOrganizationalUnitsForParentCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListOrganizationalUnitsForParentCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListOrganizationalUnitsForParentCommandOutput> {
    return deserializeAws_json1_1ListOrganizationalUnitsForParentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
