import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient.ts";
import { CreatePushTemplateRequest, CreatePushTemplateResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1CreatePushTemplateCommand,
  serializeAws_restJson1CreatePushTemplateCommand,
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

export interface CreatePushTemplateCommandInput extends CreatePushTemplateRequest {}
export interface CreatePushTemplateCommandOutput extends CreatePushTemplateResponse, __MetadataBearer {}

/**
 * <p>Creates a message template for messages that are sent through a push notification channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, CreatePushTemplateCommand } from "../../client-pinpoint/mod.ts";
 * // const { PinpointClient, CreatePushTemplateCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new CreatePushTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePushTemplateCommandInput} for command's `input` shape.
 * @see {@link CreatePushTemplateCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreatePushTemplateCommand extends $Command<
  CreatePushTemplateCommandInput,
  CreatePushTemplateCommandOutput,
  PinpointClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreatePushTemplateCommandInput) {
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
  ): Handler<CreatePushTemplateCommandInput, CreatePushTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "CreatePushTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreatePushTemplateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreatePushTemplateResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreatePushTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreatePushTemplateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreatePushTemplateCommandOutput> {
    return deserializeAws_restJson1CreatePushTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
