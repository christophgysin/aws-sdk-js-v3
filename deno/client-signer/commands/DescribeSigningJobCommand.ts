import { ServiceInputTypes, ServiceOutputTypes, SignerClientResolvedConfig } from "../SignerClient.ts";
import { DescribeSigningJobRequest, DescribeSigningJobResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DescribeSigningJobCommand,
  serializeAws_restJson1DescribeSigningJobCommand,
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

export interface DescribeSigningJobCommandInput extends DescribeSigningJobRequest {}
export interface DescribeSigningJobCommandOutput extends DescribeSigningJobResponse, __MetadataBearer {}

/**
 * <p>Returns information about a specific code signing job. You specify the job by using
 * 			the <code>jobId</code> value that is returned by the <a>StartSigningJob</a>
 * 			operation. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, DescribeSigningJobCommand } from "../../client-signer/mod.ts";
 * // const { SignerClient, DescribeSigningJobCommand } = require("@aws-sdk/client-signer"); // CommonJS import
 * const client = new SignerClient(config);
 * const command = new DescribeSigningJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSigningJobCommandInput} for command's `input` shape.
 * @see {@link DescribeSigningJobCommandOutput} for command's `response` shape.
 * @see {@link SignerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeSigningJobCommand extends $Command<
  DescribeSigningJobCommandInput,
  DescribeSigningJobCommandOutput,
  SignerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeSigningJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SignerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeSigningJobCommandInput, DescribeSigningJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SignerClient";
    const commandName = "DescribeSigningJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeSigningJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeSigningJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeSigningJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeSigningJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeSigningJobCommandOutput> {
    return deserializeAws_restJson1DescribeSigningJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
