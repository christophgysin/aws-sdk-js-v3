import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient.ts";
import { ResetJobBookmarkRequest, ResetJobBookmarkResponse } from "../models/models_1.ts";
import {
  deserializeAws_json1_1ResetJobBookmarkCommand,
  serializeAws_json1_1ResetJobBookmarkCommand,
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

export interface ResetJobBookmarkCommandInput extends ResetJobBookmarkRequest {}
export interface ResetJobBookmarkCommandOutput extends ResetJobBookmarkResponse, __MetadataBearer {}

/**
 * <p>Resets a bookmark entry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ResetJobBookmarkCommand } from "../../client-glue/mod.ts";
 * // const { GlueClient, ResetJobBookmarkCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new ResetJobBookmarkCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResetJobBookmarkCommandInput} for command's `input` shape.
 * @see {@link ResetJobBookmarkCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ResetJobBookmarkCommand extends $Command<
  ResetJobBookmarkCommandInput,
  ResetJobBookmarkCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ResetJobBookmarkCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ResetJobBookmarkCommandInput, ResetJobBookmarkCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "ResetJobBookmarkCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ResetJobBookmarkRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ResetJobBookmarkResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ResetJobBookmarkCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ResetJobBookmarkCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ResetJobBookmarkCommandOutput> {
    return deserializeAws_json1_1ResetJobBookmarkCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
