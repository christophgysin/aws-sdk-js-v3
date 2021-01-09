import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient.ts";
import {
  GetFieldLevelEncryptionProfileConfigRequest,
  GetFieldLevelEncryptionProfileConfigResult,
} from "../models/models_0.ts";
import {
  deserializeAws_restXmlGetFieldLevelEncryptionProfileConfigCommand,
  serializeAws_restXmlGetFieldLevelEncryptionProfileConfigCommand,
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

export type GetFieldLevelEncryptionProfileConfigCommandInput = GetFieldLevelEncryptionProfileConfigRequest;
export type GetFieldLevelEncryptionProfileConfigCommandOutput = GetFieldLevelEncryptionProfileConfigResult &
  __MetadataBearer;

/**
 * <p>Get the field-level encryption profile configuration information.</p>
 */
export class GetFieldLevelEncryptionProfileConfigCommand extends $Command<
  GetFieldLevelEncryptionProfileConfigCommandInput,
  GetFieldLevelEncryptionProfileConfigCommandOutput,
  CloudFrontClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetFieldLevelEncryptionProfileConfigCommandInput) {
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
  ): Handler<GetFieldLevelEncryptionProfileConfigCommandInput, GetFieldLevelEncryptionProfileConfigCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "GetFieldLevelEncryptionProfileConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetFieldLevelEncryptionProfileConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetFieldLevelEncryptionProfileConfigResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetFieldLevelEncryptionProfileConfigCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlGetFieldLevelEncryptionProfileConfigCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetFieldLevelEncryptionProfileConfigCommandOutput> {
    return deserializeAws_restXmlGetFieldLevelEncryptionProfileConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
