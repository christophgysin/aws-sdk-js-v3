
import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient.ts";
import { UpdateRoomMembershipRequest, UpdateRoomMembershipResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1UpdateRoomMembershipCommand,
  serializeAws_restJson1UpdateRoomMembershipCommand,
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

export type UpdateRoomMembershipCommandInput = UpdateRoomMembershipRequest;
export type UpdateRoomMembershipCommandOutput = UpdateRoomMembershipResponse & __MetadataBearer;

export class UpdateRoomMembershipCommand extends $Command<
  UpdateRoomMembershipCommandInput,
  UpdateRoomMembershipCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateRoomMembershipCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateRoomMembershipCommandInput, UpdateRoomMembershipCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: UpdateRoomMembershipRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateRoomMembershipResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateRoomMembershipCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateRoomMembershipCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateRoomMembershipCommandOutput> {
    return deserializeAws_restJson1UpdateRoomMembershipCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
