import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient.ts";
import { AttachStaticIpRequest, AttachStaticIpResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1AttachStaticIpCommand,
  serializeAws_json1_1AttachStaticIpCommand,
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

export type AttachStaticIpCommandInput = AttachStaticIpRequest;
export type AttachStaticIpCommandOutput = AttachStaticIpResult & __MetadataBearer;

/**
 * <p>Attaches a static IP address to a specific Amazon Lightsail instance.</p>
 */
export class AttachStaticIpCommand extends $Command<
  AttachStaticIpCommandInput,
  AttachStaticIpCommandOutput,
  LightsailClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AttachStaticIpCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AttachStaticIpCommandInput, AttachStaticIpCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "AttachStaticIpCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AttachStaticIpRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AttachStaticIpResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AttachStaticIpCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AttachStaticIpCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AttachStaticIpCommandOutput> {
    return deserializeAws_json1_1AttachStaticIpCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
