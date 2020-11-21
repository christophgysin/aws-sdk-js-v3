
import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient.ts";
import { UpdateNodegroupVersionRequest, UpdateNodegroupVersionResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1UpdateNodegroupVersionCommand,
  serializeAws_restJson1UpdateNodegroupVersionCommand,
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

export type UpdateNodegroupVersionCommandInput = UpdateNodegroupVersionRequest;
export type UpdateNodegroupVersionCommandOutput = UpdateNodegroupVersionResponse & __MetadataBearer;

export class UpdateNodegroupVersionCommand extends $Command<
  UpdateNodegroupVersionCommandInput,
  UpdateNodegroupVersionCommandOutput,
  EKSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateNodegroupVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EKSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateNodegroupVersionCommandInput, UpdateNodegroupVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EKSClient";
    const commandName = "UpdateNodegroupVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateNodegroupVersionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateNodegroupVersionResponse.filterSensitiveLog,
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

  private serialize(input: UpdateNodegroupVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateNodegroupVersionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateNodegroupVersionCommandOutput> {
    return deserializeAws_restJson1UpdateNodegroupVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
