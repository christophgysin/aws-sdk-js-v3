import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { SendDiagnosticInterruptRequest } from "../models/models_4";
import {
  deserializeAws_ec2SendDiagnosticInterruptCommand,
  serializeAws_ec2SendDiagnosticInterruptCommand,
} from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type SendDiagnosticInterruptCommandInput = SendDiagnosticInterruptRequest;
export type SendDiagnosticInterruptCommandOutput = __MetadataBearer;

export class SendDiagnosticInterruptCommand extends $Command<
  SendDiagnosticInterruptCommandInput,
  SendDiagnosticInterruptCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SendDiagnosticInterruptCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SendDiagnosticInterruptCommandInput, SendDiagnosticInterruptCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "SendDiagnosticInterruptCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SendDiagnosticInterruptRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
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

  private serialize(input: SendDiagnosticInterruptCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2SendDiagnosticInterruptCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SendDiagnosticInterruptCommandOutput> {
    return deserializeAws_ec2SendDiagnosticInterruptCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
