import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient.ts";
import { GetDistributionConfigRequest, GetDistributionConfigResult } from "../models/models_0.ts";
import {
  deserializeAws_restXmlGetDistributionConfigCommand,
  serializeAws_restXmlGetDistributionConfigCommand,
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

export interface GetDistributionConfigCommandInput extends GetDistributionConfigRequest {}
export interface GetDistributionConfigCommandOutput extends GetDistributionConfigResult, __MetadataBearer {}

/**
 * <p>Get the configuration information about a distribution. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetDistributionConfigCommand } from "../../client-cloudfront/mod.ts";
 * // const { CloudFrontClient, GetDistributionConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new GetDistributionConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDistributionConfigCommandInput} for command's `input` shape.
 * @see {@link GetDistributionConfigCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetDistributionConfigCommand extends $Command<
  GetDistributionConfigCommandInput,
  GetDistributionConfigCommandOutput,
  CloudFrontClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetDistributionConfigCommandInput) {
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
  ): Handler<GetDistributionConfigCommandInput, GetDistributionConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "GetDistributionConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDistributionConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetDistributionConfigResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDistributionConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlGetDistributionConfigCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDistributionConfigCommandOutput> {
    return deserializeAws_restXmlGetDistributionConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
