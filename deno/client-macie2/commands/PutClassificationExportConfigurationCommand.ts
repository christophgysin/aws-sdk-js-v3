import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client.ts";
import {
  PutClassificationExportConfigurationRequest,
  PutClassificationExportConfigurationResponse,
} from "../models/models_0.ts";
import {
  deserializeAws_restJson1PutClassificationExportConfigurationCommand,
  serializeAws_restJson1PutClassificationExportConfigurationCommand,
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

export interface PutClassificationExportConfigurationCommandInput extends PutClassificationExportConfigurationRequest {}
export interface PutClassificationExportConfigurationCommandOutput
  extends PutClassificationExportConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Creates or updates the configuration settings for storing data classification results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, PutClassificationExportConfigurationCommand } from "../../client-macie2/mod.ts";
 * // const { Macie2Client, PutClassificationExportConfigurationCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new PutClassificationExportConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutClassificationExportConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutClassificationExportConfigurationCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class PutClassificationExportConfigurationCommand extends $Command<
  PutClassificationExportConfigurationCommandInput,
  PutClassificationExportConfigurationCommandOutput,
  Macie2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutClassificationExportConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Macie2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutClassificationExportConfigurationCommandInput, PutClassificationExportConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Macie2Client";
    const commandName = "PutClassificationExportConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutClassificationExportConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutClassificationExportConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: PutClassificationExportConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1PutClassificationExportConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutClassificationExportConfigurationCommandOutput> {
    return deserializeAws_restJson1PutClassificationExportConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
