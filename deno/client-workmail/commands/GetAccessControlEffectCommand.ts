import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient.ts";
import { GetAccessControlEffectRequest, GetAccessControlEffectResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetAccessControlEffectCommand,
  serializeAws_json1_1GetAccessControlEffectCommand,
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

export interface GetAccessControlEffectCommandInput extends GetAccessControlEffectRequest {}
export interface GetAccessControlEffectCommandOutput extends GetAccessControlEffectResponse, __MetadataBearer {}

/**
 * <p>Gets the effects of an organization's access control rules as they apply to a
 *          specified IPv4 address, access protocol action, or user ID. </p>
 */
export class GetAccessControlEffectCommand extends $Command<
  GetAccessControlEffectCommandInput,
  GetAccessControlEffectCommandOutput,
  WorkMailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetAccessControlEffectCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkMailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAccessControlEffectCommandInput, GetAccessControlEffectCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkMailClient";
    const commandName = "GetAccessControlEffectCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetAccessControlEffectRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetAccessControlEffectResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetAccessControlEffectCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetAccessControlEffectCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAccessControlEffectCommandOutput> {
    return deserializeAws_json1_1GetAccessControlEffectCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
