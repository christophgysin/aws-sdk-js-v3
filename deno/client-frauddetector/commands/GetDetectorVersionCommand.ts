import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient.ts";
import { GetDetectorVersionRequest, GetDetectorVersionResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetDetectorVersionCommand,
  serializeAws_json1_1GetDetectorVersionCommand,
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

export interface GetDetectorVersionCommandInput extends GetDetectorVersionRequest {}
export interface GetDetectorVersionCommandOutput extends GetDetectorVersionResult, __MetadataBearer {}

/**
 * <p>Gets a particular detector version. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, GetDetectorVersionCommand } from "../../client-frauddetector/mod.ts";
 * // const { FraudDetectorClient, GetDetectorVersionCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new GetDetectorVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDetectorVersionCommandInput} for command's `input` shape.
 * @see {@link GetDetectorVersionCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetDetectorVersionCommand extends $Command<
  GetDetectorVersionCommandInput,
  GetDetectorVersionCommandOutput,
  FraudDetectorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetDetectorVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FraudDetectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDetectorVersionCommandInput, GetDetectorVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FraudDetectorClient";
    const commandName = "GetDetectorVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDetectorVersionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetDetectorVersionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDetectorVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetDetectorVersionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDetectorVersionCommandOutput> {
    return deserializeAws_json1_1GetDetectorVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
