import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient.ts";
import { CreateFilterRequest, CreateFilterResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1CreateFilterCommand,
  serializeAws_json1_1CreateFilterCommand,
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

export interface CreateFilterCommandInput extends CreateFilterRequest {}
export interface CreateFilterCommandOutput extends CreateFilterResponse, __MetadataBearer {}

/**
 * <p>Creates a recommendation filter. For more information, see <a>filter</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, CreateFilterCommand } from "../../client-personalize/mod.ts";
 * // const { PersonalizeClient, CreateFilterCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new CreateFilterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFilterCommandInput} for command's `input` shape.
 * @see {@link CreateFilterCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateFilterCommand extends $Command<
  CreateFilterCommandInput,
  CreateFilterCommandOutput,
  PersonalizeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateFilterCommandInput) {
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
  ): Handler<CreateFilterCommandInput, CreateFilterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PersonalizeClient";
    const commandName = "CreateFilterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateFilterRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateFilterResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateFilterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateFilterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateFilterCommandOutput> {
    return deserializeAws_json1_1CreateFilterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
