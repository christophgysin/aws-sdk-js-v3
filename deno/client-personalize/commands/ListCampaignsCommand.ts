import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient.ts";
import { ListCampaignsRequest, ListCampaignsResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListCampaignsCommand,
  serializeAws_json1_1ListCampaignsCommand,
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

export type ListCampaignsCommandInput = ListCampaignsRequest;
export type ListCampaignsCommandOutput = ListCampaignsResponse & __MetadataBearer;

/**
 * <p>Returns a list of campaigns that use the given solution.
 *       When a solution is not specified, all the campaigns associated with the account are listed.
 *       The response provides the properties for each campaign, including the Amazon Resource Name (ARN).
 *       For more information on campaigns, see <a>CreateCampaign</a>.</p>
 */
export class ListCampaignsCommand extends $Command<
  ListCampaignsCommandInput,
  ListCampaignsCommandOutput,
  PersonalizeClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListCampaignsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PersonalizeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListCampaignsCommandInput, ListCampaignsCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PersonalizeClient";
    const commandName = "ListCampaignsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListCampaignsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListCampaignsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListCampaignsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListCampaignsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListCampaignsCommandOutput> {
    return deserializeAws_json1_1ListCampaignsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
