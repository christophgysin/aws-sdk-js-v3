import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient.ts";
import { UpdateRecipeJobRequest, UpdateRecipeJobResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1UpdateRecipeJobCommand,
  serializeAws_restJson1UpdateRecipeJobCommand,
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

export type UpdateRecipeJobCommandInput = UpdateRecipeJobRequest;
export type UpdateRecipeJobCommandOutput = UpdateRecipeJobResponse & __MetadataBearer;

/**
 * <p>Modifies the definition of an existing AWS Glue DataBrew recipe job in the current AWS
 *             account.</p>
 */
export class UpdateRecipeJobCommand extends $Command<
  UpdateRecipeJobCommandInput,
  UpdateRecipeJobCommandOutput,
  DataBrewClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateRecipeJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataBrewClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateRecipeJobCommandInput, UpdateRecipeJobCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataBrewClient";
    const commandName = "UpdateRecipeJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateRecipeJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateRecipeJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateRecipeJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateRecipeJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateRecipeJobCommandOutput> {
    return deserializeAws_restJson1UpdateRecipeJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
