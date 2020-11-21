
import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient.ts";
import { DescribeRecipeRequest, DescribeRecipeResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DescribeRecipeCommand,
  serializeAws_restJson1DescribeRecipeCommand,
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

export type DescribeRecipeCommandInput = DescribeRecipeRequest;
export type DescribeRecipeCommandOutput = DescribeRecipeResponse & __MetadataBearer;

export class DescribeRecipeCommand extends $Command<
  DescribeRecipeCommandInput,
  DescribeRecipeCommandOutput,
  DataBrewClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeRecipeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataBrewClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeRecipeCommandInput, DescribeRecipeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataBrewClient";
    const commandName = "DescribeRecipeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeRecipeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeRecipeResponse.filterSensitiveLog,
    };

    if (typeof logger.info === "function") {
      logger.info({
        clientName,
        commandName,
      });
    }

    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeRecipeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeRecipeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeRecipeCommandOutput> {
    return deserializeAws_restJson1DescribeRecipeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
