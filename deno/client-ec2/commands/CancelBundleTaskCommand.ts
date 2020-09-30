
import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client.ts";
import { CancelBundleTaskRequest, CancelBundleTaskResult } from "../models/models_0.ts";
import {
  deserializeAws_ec2CancelBundleTaskCommand,
  serializeAws_ec2CancelBundleTaskCommand,
} from "../protocols/Aws_ec2.ts";
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

export type CancelBundleTaskCommandInput = CancelBundleTaskRequest;
export type CancelBundleTaskCommandOutput = CancelBundleTaskResult & __MetadataBearer;

export class CancelBundleTaskCommand extends $Command<
  CancelBundleTaskCommandInput,
  CancelBundleTaskCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CancelBundleTaskCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CancelBundleTaskCommandInput, CancelBundleTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: CancelBundleTaskRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CancelBundleTaskResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CancelBundleTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CancelBundleTaskCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CancelBundleTaskCommandOutput> {
    return deserializeAws_ec2CancelBundleTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
