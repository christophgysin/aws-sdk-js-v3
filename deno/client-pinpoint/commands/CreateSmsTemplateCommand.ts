import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient.ts";
import { CreateSmsTemplateRequest, CreateSmsTemplateResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1CreateSmsTemplateCommand,
  serializeAws_restJson1CreateSmsTemplateCommand,
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

export interface CreateSmsTemplateCommandInput extends CreateSmsTemplateRequest {}
export interface CreateSmsTemplateCommandOutput extends CreateSmsTemplateResponse, __MetadataBearer {}

/**
 * <p>Creates a message template for messages that are sent through the SMS channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, CreateSmsTemplateCommand } from "../../client-pinpoint/mod.ts";
 * // const { PinpointClient, CreateSmsTemplateCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new CreateSmsTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSmsTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateSmsTemplateCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateSmsTemplateCommand extends $Command<
  CreateSmsTemplateCommandInput,
  CreateSmsTemplateCommandOutput,
  PinpointClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateSmsTemplateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateSmsTemplateCommandInput, CreateSmsTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "CreateSmsTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateSmsTemplateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateSmsTemplateResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateSmsTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateSmsTemplateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSmsTemplateCommandOutput> {
    return deserializeAws_restJson1CreateSmsTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
