
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client.ts";
import { UploadPartCopyOutput, UploadPartCopyRequest } from "../models/models_1.ts";
import {
  deserializeAws_restXmlUploadPartCopyCommand,
  serializeAws_restXmlUploadPartCopyCommand,
} from "../protocols/Aws_restXml.ts";
import { getBucketEndpointPlugin } from "../../middleware-bucket-endpoint/mod.ts";
import { getSerdePlugin } from "../../middleware-serde/mod.ts";
import { getSsecPlugin } from "../../middleware-ssec/mod.ts";
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

export type UploadPartCopyCommandInput = UploadPartCopyRequest;
export type UploadPartCopyCommandOutput = UploadPartCopyOutput & __MetadataBearer;

export class UploadPartCopyCommand extends $Command<
  UploadPartCopyCommandInput,
  UploadPartCopyCommandOutput,
  S3ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UploadPartCopyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UploadPartCopyCommandInput, UploadPartCopyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getSsecPlugin(configuration));
    this.middlewareStack.use(getBucketEndpointPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: UploadPartCopyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UploadPartCopyOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UploadPartCopyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlUploadPartCopyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UploadPartCopyCommandOutput> {
    return deserializeAws_restXmlUploadPartCopyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
