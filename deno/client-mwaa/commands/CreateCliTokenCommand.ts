import { MWAAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MWAAClient.ts";
import { CreateCliTokenRequest, CreateCliTokenResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1CreateCliTokenCommand,
  serializeAws_restJson1CreateCliTokenCommand,
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

export interface CreateCliTokenCommandInput extends CreateCliTokenRequest {}
export interface CreateCliTokenCommandOutput extends CreateCliTokenResponse, __MetadataBearer {}

/**
 * <p>Create a CLI token to use Airflow CLI.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MWAAClient, CreateCliTokenCommand } from "../../client-mwaa/mod.ts";
 * // const { MWAAClient, CreateCliTokenCommand } = require("@aws-sdk/client-mwaa"); // CommonJS import
 * const client = new MWAAClient(config);
 * const command = new CreateCliTokenCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCliTokenCommandInput} for command's `input` shape.
 * @see {@link CreateCliTokenCommandOutput} for command's `response` shape.
 * @see {@link MWAAClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateCliTokenCommand extends $Command<
  CreateCliTokenCommandInput,
  CreateCliTokenCommandOutput,
  MWAAClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateCliTokenCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MWAAClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateCliTokenCommandInput, CreateCliTokenCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MWAAClient";
    const commandName = "CreateCliTokenCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateCliTokenRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateCliTokenResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateCliTokenCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateCliTokenCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateCliTokenCommandOutput> {
    return deserializeAws_restJson1CreateCliTokenCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
