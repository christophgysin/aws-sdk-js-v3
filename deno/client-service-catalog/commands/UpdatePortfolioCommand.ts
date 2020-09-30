
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient.ts";
import { UpdatePortfolioInput, UpdatePortfolioOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1UpdatePortfolioCommand,
  serializeAws_json1_1UpdatePortfolioCommand,
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

export type UpdatePortfolioCommandInput = UpdatePortfolioInput;
export type UpdatePortfolioCommandOutput = UpdatePortfolioOutput & __MetadataBearer;

export class UpdatePortfolioCommand extends $Command<
  UpdatePortfolioCommandInput,
  UpdatePortfolioCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdatePortfolioCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceCatalogClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdatePortfolioCommandInput, UpdatePortfolioCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: UpdatePortfolioInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdatePortfolioOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdatePortfolioCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdatePortfolioCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdatePortfolioCommandOutput> {
    return deserializeAws_json1_1UpdatePortfolioCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
