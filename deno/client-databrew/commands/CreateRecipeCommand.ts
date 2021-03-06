import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient.ts";
import { CreateRecipeRequest, CreateRecipeResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1CreateRecipeCommand,
  serializeAws_restJson1CreateRecipeCommand,
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

export interface CreateRecipeCommandInput extends CreateRecipeRequest {}
export interface CreateRecipeCommandOutput extends CreateRecipeResponse, __MetadataBearer {}

/**
 * <p>Creates a new DataBrew recipe.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, CreateRecipeCommand } from "../../client-databrew/mod.ts";
 * // const { DataBrewClient, CreateRecipeCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const command = new CreateRecipeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRecipeCommandInput} for command's `input` shape.
 * @see {@link CreateRecipeCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateRecipeCommand extends $Command<
  CreateRecipeCommandInput,
  CreateRecipeCommandOutput,
  DataBrewClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateRecipeCommandInput) {
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
  ): Handler<CreateRecipeCommandInput, CreateRecipeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataBrewClient";
    const commandName = "CreateRecipeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateRecipeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateRecipeResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateRecipeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateRecipeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateRecipeCommandOutput> {
    return deserializeAws_restJson1CreateRecipeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
