
import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient.ts";
import { DescribeInputDeviceThumbnailRequest, DescribeInputDeviceThumbnailResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1DescribeInputDeviceThumbnailCommand,
  serializeAws_restJson1DescribeInputDeviceThumbnailCommand,
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

export type DescribeInputDeviceThumbnailCommandInput = DescribeInputDeviceThumbnailRequest;
export type DescribeInputDeviceThumbnailCommandOutput = DescribeInputDeviceThumbnailResponse & __MetadataBearer;

export class DescribeInputDeviceThumbnailCommand extends $Command<
  DescribeInputDeviceThumbnailCommandInput,
  DescribeInputDeviceThumbnailCommandOutput,
  MediaLiveClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeInputDeviceThumbnailCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaLiveClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeInputDeviceThumbnailCommandInput, DescribeInputDeviceThumbnailCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaLiveClient";
    const commandName = "DescribeInputDeviceThumbnailCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeInputDeviceThumbnailRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeInputDeviceThumbnailResponse.filterSensitiveLog,
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

  private serialize(input: DescribeInputDeviceThumbnailCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeInputDeviceThumbnailCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeInputDeviceThumbnailCommandOutput> {
    return deserializeAws_restJson1DescribeInputDeviceThumbnailCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
