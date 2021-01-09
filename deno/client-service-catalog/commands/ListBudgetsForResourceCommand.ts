import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient.ts";
import { ListBudgetsForResourceInput, ListBudgetsForResourceOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListBudgetsForResourceCommand,
  serializeAws_json1_1ListBudgetsForResourceCommand,
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

export type ListBudgetsForResourceCommandInput = ListBudgetsForResourceInput;
export type ListBudgetsForResourceCommandOutput = ListBudgetsForResourceOutput & __MetadataBearer;

/**
 * <p>Lists all the budgets associated to the specified resource.</p>
 */
export class ListBudgetsForResourceCommand extends $Command<
  ListBudgetsForResourceCommandInput,
  ListBudgetsForResourceCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListBudgetsForResourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceCatalogClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListBudgetsForResourceCommandInput, ListBudgetsForResourceCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "ListBudgetsForResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListBudgetsForResourceInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListBudgetsForResourceOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListBudgetsForResourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListBudgetsForResourceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListBudgetsForResourceCommandOutput> {
    return deserializeAws_json1_1ListBudgetsForResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
