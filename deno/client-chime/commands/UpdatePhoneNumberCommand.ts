
import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient.ts";
import { UpdatePhoneNumberRequest, UpdatePhoneNumberResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1UpdatePhoneNumberCommand,
  serializeAws_restJson1UpdatePhoneNumberCommand,
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

export type UpdatePhoneNumberCommandInput = UpdatePhoneNumberRequest;
export type UpdatePhoneNumberCommandOutput = UpdatePhoneNumberResponse & __MetadataBearer;

export class UpdatePhoneNumberCommand extends $Command<
  UpdatePhoneNumberCommandInput,
  UpdatePhoneNumberCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdatePhoneNumberCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdatePhoneNumberCommandInput, UpdatePhoneNumberCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: UpdatePhoneNumberRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdatePhoneNumberResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdatePhoneNumberCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdatePhoneNumberCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdatePhoneNumberCommandOutput> {
    return deserializeAws_restJson1UpdatePhoneNumberCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
