import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient.ts";
import { ReorderReceiptRuleSetRequest, ReorderReceiptRuleSetResponse } from "../models/models_0.ts";
import {
  deserializeAws_queryReorderReceiptRuleSetCommand,
  serializeAws_queryReorderReceiptRuleSetCommand,
} from "../protocols/Aws_query.ts";
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

export interface ReorderReceiptRuleSetCommandInput extends ReorderReceiptRuleSetRequest {}
export interface ReorderReceiptRuleSetCommandOutput extends ReorderReceiptRuleSetResponse, __MetadataBearer {}

/**
 * <p>Reorders the receipt rules within a receipt rule set.</p>
 *         <note>
 *             <p>All of the rules in the rule set must be represented in this request. That is,
 *                 this API will return an error if the reorder request doesn't explicitly position all
 *                 of the rules.</p>
 *         </note>
 *         <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p>
 *         <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, ReorderReceiptRuleSetCommand } from "../../client-ses/mod.ts";
 * // const { SESClient, ReorderReceiptRuleSetCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const command = new ReorderReceiptRuleSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ReorderReceiptRuleSetCommandInput} for command's `input` shape.
 * @see {@link ReorderReceiptRuleSetCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ReorderReceiptRuleSetCommand extends $Command<
  ReorderReceiptRuleSetCommandInput,
  ReorderReceiptRuleSetCommandOutput,
  SESClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ReorderReceiptRuleSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ReorderReceiptRuleSetCommandInput, ReorderReceiptRuleSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "ReorderReceiptRuleSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ReorderReceiptRuleSetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ReorderReceiptRuleSetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ReorderReceiptRuleSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryReorderReceiptRuleSetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ReorderReceiptRuleSetCommandOutput> {
    return deserializeAws_queryReorderReceiptRuleSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
