import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient.ts";
import { ListSecurityProfilesForTargetRequest, ListSecurityProfilesForTargetResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1ListSecurityProfilesForTargetCommand,
  serializeAws_restJson1ListSecurityProfilesForTargetCommand,
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

export type ListSecurityProfilesForTargetCommandInput = ListSecurityProfilesForTargetRequest;
export type ListSecurityProfilesForTargetCommandOutput = ListSecurityProfilesForTargetResponse & __MetadataBearer;

/**
 * <p>Lists the Device Defender security profiles attached to a target (thing group).</p>
 */
export class ListSecurityProfilesForTargetCommand extends $Command<
  ListSecurityProfilesForTargetCommandInput,
  ListSecurityProfilesForTargetCommandOutput,
  IoTClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListSecurityProfilesForTargetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSecurityProfilesForTargetCommandInput, ListSecurityProfilesForTargetCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "ListSecurityProfilesForTargetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSecurityProfilesForTargetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListSecurityProfilesForTargetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListSecurityProfilesForTargetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListSecurityProfilesForTargetCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListSecurityProfilesForTargetCommandOutput> {
    return deserializeAws_restJson1ListSecurityProfilesForTargetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
