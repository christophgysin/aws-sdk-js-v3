
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient.ts";
import { AssociateProductWithPortfolioInput, AssociateProductWithPortfolioOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1AssociateProductWithPortfolioCommand,
  serializeAws_json1_1AssociateProductWithPortfolioCommand,
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

export type AssociateProductWithPortfolioCommandInput = AssociateProductWithPortfolioInput;
export type AssociateProductWithPortfolioCommandOutput = AssociateProductWithPortfolioOutput & __MetadataBearer;

export class AssociateProductWithPortfolioCommand extends $Command<
  AssociateProductWithPortfolioCommandInput,
  AssociateProductWithPortfolioCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateProductWithPortfolioCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceCatalogClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateProductWithPortfolioCommandInput, AssociateProductWithPortfolioCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: AssociateProductWithPortfolioInput.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateProductWithPortfolioOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateProductWithPortfolioCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AssociateProductWithPortfolioCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateProductWithPortfolioCommandOutput> {
    return deserializeAws_json1_1AssociateProductWithPortfolioCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
