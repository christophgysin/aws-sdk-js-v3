import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient.ts";
import { CreatePartnerInputRequest, CreatePartnerInputResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1CreatePartnerInputCommand,
  serializeAws_restJson1CreatePartnerInputCommand,
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

export interface CreatePartnerInputCommandInput extends CreatePartnerInputRequest {}
export interface CreatePartnerInputCommandOutput extends CreatePartnerInputResponse, __MetadataBearer {}

/**
 * Create a partner input
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, CreatePartnerInputCommand } from "../../client-medialive/mod.ts";
 * // const { MediaLiveClient, CreatePartnerInputCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new CreatePartnerInputCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePartnerInputCommandInput} for command's `input` shape.
 * @see {@link CreatePartnerInputCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreatePartnerInputCommand extends $Command<
  CreatePartnerInputCommandInput,
  CreatePartnerInputCommandOutput,
  MediaLiveClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreatePartnerInputCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaLiveClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreatePartnerInputCommandInput, CreatePartnerInputCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaLiveClient";
    const commandName = "CreatePartnerInputCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreatePartnerInputRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreatePartnerInputResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreatePartnerInputCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreatePartnerInputCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreatePartnerInputCommandOutput> {
    return deserializeAws_restJson1CreatePartnerInputCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
