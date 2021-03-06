import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient.ts";
import { DescribeTrailsRequest, DescribeTrailsResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeTrailsCommand,
  serializeAws_json1_1DescribeTrailsCommand,
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

export interface DescribeTrailsCommandInput extends DescribeTrailsRequest {}
export interface DescribeTrailsCommandOutput extends DescribeTrailsResponse, __MetadataBearer {}

/**
 * <p>Retrieves settings for one or more trails associated with the current region for your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, DescribeTrailsCommand } from "../../client-cloudtrail/mod.ts";
 * // const { CloudTrailClient, DescribeTrailsCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * const client = new CloudTrailClient(config);
 * const command = new DescribeTrailsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTrailsCommandInput} for command's `input` shape.
 * @see {@link DescribeTrailsCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeTrailsCommand extends $Command<
  DescribeTrailsCommandInput,
  DescribeTrailsCommandOutput,
  CloudTrailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeTrailsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudTrailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeTrailsCommandInput, DescribeTrailsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudTrailClient";
    const commandName = "DescribeTrailsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeTrailsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeTrailsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeTrailsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeTrailsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeTrailsCommandOutput> {
    return deserializeAws_json1_1DescribeTrailsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
