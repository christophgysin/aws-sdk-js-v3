import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client.ts";
import { CopyFpgaImageRequest, CopyFpgaImageResult } from "../models/models_0.ts";
import { deserializeAws_ec2CopyFpgaImageCommand, serializeAws_ec2CopyFpgaImageCommand } from "../protocols/Aws_ec2.ts";
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

export type CopyFpgaImageCommandInput = CopyFpgaImageRequest;
export type CopyFpgaImageCommandOutput = CopyFpgaImageResult & __MetadataBearer;

/**
 * <p>Copies the specified Amazon FPGA Image (AFI) to the current Region.</p>
 */
export class CopyFpgaImageCommand extends $Command<
  CopyFpgaImageCommandInput,
  CopyFpgaImageCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CopyFpgaImageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CopyFpgaImageCommandInput, CopyFpgaImageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CopyFpgaImageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CopyFpgaImageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CopyFpgaImageResult.filterSensitiveLog,
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

  private serialize(input: CopyFpgaImageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CopyFpgaImageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CopyFpgaImageCommandOutput> {
    return deserializeAws_ec2CopyFpgaImageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
