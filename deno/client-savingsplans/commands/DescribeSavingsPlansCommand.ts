import { SavingsplansClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SavingsplansClient.ts";
import { DescribeSavingsPlansRequest, DescribeSavingsPlansResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DescribeSavingsPlansCommand,
  serializeAws_restJson1DescribeSavingsPlansCommand,
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

export interface DescribeSavingsPlansCommandInput extends DescribeSavingsPlansRequest {}
export interface DescribeSavingsPlansCommandOutput extends DescribeSavingsPlansResponse, __MetadataBearer {}

/**
 * <p>Describes the specified Savings Plans.</p>
 */
export class DescribeSavingsPlansCommand extends $Command<
  DescribeSavingsPlansCommandInput,
  DescribeSavingsPlansCommandOutput,
  SavingsplansClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeSavingsPlansCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SavingsplansClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeSavingsPlansCommandInput, DescribeSavingsPlansCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SavingsplansClient";
    const commandName = "DescribeSavingsPlansCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeSavingsPlansRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeSavingsPlansResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeSavingsPlansCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeSavingsPlansCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeSavingsPlansCommandOutput> {
    return deserializeAws_restJson1DescribeSavingsPlansCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
