import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient.ts";
import { DescribeTestCasesInput, DescribeTestCasesOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeTestCasesCommand,
  serializeAws_json1_1DescribeTestCasesCommand,
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

export interface DescribeTestCasesCommandInput extends DescribeTestCasesInput {}
export interface DescribeTestCasesCommandOutput extends DescribeTestCasesOutput, __MetadataBearer {}

/**
 * <p>
 *       Returns a list of details about test cases for a report.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, DescribeTestCasesCommand } from "../../client-codebuild/mod.ts";
 * // const { CodeBuildClient, DescribeTestCasesCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new DescribeTestCasesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTestCasesCommandInput} for command's `input` shape.
 * @see {@link DescribeTestCasesCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeTestCasesCommand extends $Command<
  DescribeTestCasesCommandInput,
  DescribeTestCasesCommandOutput,
  CodeBuildClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeTestCasesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeBuildClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeTestCasesCommandInput, DescribeTestCasesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeBuildClient";
    const commandName = "DescribeTestCasesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeTestCasesInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeTestCasesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeTestCasesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeTestCasesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeTestCasesCommandOutput> {
    return deserializeAws_json1_1DescribeTestCasesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
