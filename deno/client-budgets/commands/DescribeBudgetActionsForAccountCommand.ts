import { BudgetsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BudgetsClient.ts";
import { DescribeBudgetActionsForAccountRequest, DescribeBudgetActionsForAccountResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeBudgetActionsForAccountCommand,
  serializeAws_json1_1DescribeBudgetActionsForAccountCommand,
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

export interface DescribeBudgetActionsForAccountCommandInput extends DescribeBudgetActionsForAccountRequest {}
export interface DescribeBudgetActionsForAccountCommandOutput
  extends DescribeBudgetActionsForAccountResponse,
    __MetadataBearer {}

/**
 * <p>
 *          Describes all of the budget actions for an account.
 *       </p>
 */
export class DescribeBudgetActionsForAccountCommand extends $Command<
  DescribeBudgetActionsForAccountCommandInput,
  DescribeBudgetActionsForAccountCommandOutput,
  BudgetsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeBudgetActionsForAccountCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BudgetsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeBudgetActionsForAccountCommandInput, DescribeBudgetActionsForAccountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BudgetsClient";
    const commandName = "DescribeBudgetActionsForAccountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeBudgetActionsForAccountRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeBudgetActionsForAccountResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeBudgetActionsForAccountCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeBudgetActionsForAccountCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeBudgetActionsForAccountCommandOutput> {
    return deserializeAws_json1_1DescribeBudgetActionsForAccountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
