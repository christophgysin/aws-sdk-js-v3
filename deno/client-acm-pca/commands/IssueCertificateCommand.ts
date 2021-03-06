import { ACMPCAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMPCAClient.ts";
import { IssueCertificateRequest, IssueCertificateResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1IssueCertificateCommand,
  serializeAws_json1_1IssueCertificateCommand,
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

export interface IssueCertificateCommandInput extends IssueCertificateRequest {}
export interface IssueCertificateCommandOutput extends IssueCertificateResponse, __MetadataBearer {}

/**
 * <p>Uses your private certificate authority (CA), or one that has been shared with you, to
 * 			issue a client certificate. This action returns the Amazon Resource Name (ARN) of the
 * 			certificate. You can retrieve the certificate by calling the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_GetCertificate.html">GetCertificate</a> action and
 * 			specifying the ARN. </p>
 * 		       <note>
 * 			         <p>You cannot use the ACM <b>ListCertificateAuthorities</b> action to retrieve the ARNs of the
 * 				certificates that you issue by using ACM Private CA.</p>
 * 		       </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMPCAClient, IssueCertificateCommand } from "../../client-acm-pca/mod.ts";
 * // const { ACMPCAClient, IssueCertificateCommand } = require("@aws-sdk/client-acm-pca"); // CommonJS import
 * const client = new ACMPCAClient(config);
 * const command = new IssueCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link IssueCertificateCommandInput} for command's `input` shape.
 * @see {@link IssueCertificateCommandOutput} for command's `response` shape.
 * @see {@link ACMPCAClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class IssueCertificateCommand extends $Command<
  IssueCertificateCommandInput,
  IssueCertificateCommandOutput,
  ACMPCAClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: IssueCertificateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ACMPCAClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<IssueCertificateCommandInput, IssueCertificateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ACMPCAClient";
    const commandName = "IssueCertificateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: IssueCertificateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: IssueCertificateResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: IssueCertificateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1IssueCertificateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<IssueCertificateCommandOutput> {
    return deserializeAws_json1_1IssueCertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
