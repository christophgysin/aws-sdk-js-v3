import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient.ts";
import {
  CreateStreamingDistributionWithTagsRequest,
  CreateStreamingDistributionWithTagsResult,
} from "../models/models_0.ts";
import {
  deserializeAws_restXmlCreateStreamingDistributionWithTagsCommand,
  serializeAws_restXmlCreateStreamingDistributionWithTagsCommand,
} from "../protocols/Aws_restXml.ts";
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

export interface CreateStreamingDistributionWithTagsCommandInput extends CreateStreamingDistributionWithTagsRequest {}
export interface CreateStreamingDistributionWithTagsCommandOutput
  extends CreateStreamingDistributionWithTagsResult,
    __MetadataBearer {}

/**
 * <p>This API is deprecated.
 *             Amazon CloudFront is deprecating real-time messaging protocol (RTMP) distributions on December 31, 2020.
 *             For more information, <a href="http://forums.aws.amazon.com/ann.jspa?annID=7356">read the announcement</a> on the Amazon CloudFront discussion forum.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, CreateStreamingDistributionWithTagsCommand } from "../../client-cloudfront/mod.ts";
 * // const { CloudFrontClient, CreateStreamingDistributionWithTagsCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new CreateStreamingDistributionWithTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateStreamingDistributionWithTagsCommandInput} for command's `input` shape.
 * @see {@link CreateStreamingDistributionWithTagsCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateStreamingDistributionWithTagsCommand extends $Command<
  CreateStreamingDistributionWithTagsCommandInput,
  CreateStreamingDistributionWithTagsCommandOutput,
  CloudFrontClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateStreamingDistributionWithTagsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateStreamingDistributionWithTagsCommandInput, CreateStreamingDistributionWithTagsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "CreateStreamingDistributionWithTagsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateStreamingDistributionWithTagsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateStreamingDistributionWithTagsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateStreamingDistributionWithTagsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlCreateStreamingDistributionWithTagsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateStreamingDistributionWithTagsCommandOutput> {
    return deserializeAws_restXmlCreateStreamingDistributionWithTagsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
