import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client.ts";
import { CreateRegexPatternSetRequest, CreateRegexPatternSetResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1CreateRegexPatternSetCommand,
  serializeAws_json1_1CreateRegexPatternSetCommand,
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

export type CreateRegexPatternSetCommandInput = CreateRegexPatternSetRequest;
export type CreateRegexPatternSetCommandOutput = CreateRegexPatternSetResponse & __MetadataBearer;

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>Creates a <a>RegexPatternSet</a>, which you reference in a <a>RegexPatternSetReferenceStatement</a>, to have AWS WAF inspect a web request component for the specified patterns.</p>
 */
export class CreateRegexPatternSetCommand extends $Command<
  CreateRegexPatternSetCommandInput,
  CreateRegexPatternSetCommandOutput,
  WAFV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateRegexPatternSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WAFV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateRegexPatternSetCommandInput, CreateRegexPatternSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFV2Client";
    const commandName = "CreateRegexPatternSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateRegexPatternSetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateRegexPatternSetResponse.filterSensitiveLog,
    };

    if (typeof logger.info === "function") {
      logger.info({
        clientName,
        commandName,
      });
    }

    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateRegexPatternSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateRegexPatternSetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateRegexPatternSetCommandOutput> {
    return deserializeAws_json1_1CreateRegexPatternSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
