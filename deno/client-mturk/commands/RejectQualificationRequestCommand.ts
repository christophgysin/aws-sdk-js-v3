import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient.ts";
import { RejectQualificationRequestRequest, RejectQualificationRequestResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1RejectQualificationRequestCommand,
  serializeAws_json1_1RejectQualificationRequestCommand,
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

export interface RejectQualificationRequestCommandInput extends RejectQualificationRequestRequest {}
export interface RejectQualificationRequestCommandOutput extends RejectQualificationRequestResponse, __MetadataBearer {}

/**
 * <p>
 *             The
 *             <code>RejectQualificationRequest</code>
 *             operation rejects a user's request for a Qualification.
 *         </p>
 *         <p> You can provide a text message explaining why the request was
 *             rejected. The Worker who made the request can see this message.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, RejectQualificationRequestCommand } from "../../client-mturk/mod.ts";
 * // const { MTurkClient, RejectQualificationRequestCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new RejectQualificationRequestCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RejectQualificationRequestCommandInput} for command's `input` shape.
 * @see {@link RejectQualificationRequestCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class RejectQualificationRequestCommand extends $Command<
  RejectQualificationRequestCommandInput,
  RejectQualificationRequestCommandOutput,
  MTurkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RejectQualificationRequestCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MTurkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RejectQualificationRequestCommandInput, RejectQualificationRequestCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "RejectQualificationRequestCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RejectQualificationRequestRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RejectQualificationRequestResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RejectQualificationRequestCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RejectQualificationRequestCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RejectQualificationRequestCommandOutput> {
    return deserializeAws_json1_1RejectQualificationRequestCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
