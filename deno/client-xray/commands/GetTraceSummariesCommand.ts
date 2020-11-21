
import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient.ts";
import { GetTraceSummariesRequest, GetTraceSummariesResult } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetTraceSummariesCommand,
  serializeAws_restJson1GetTraceSummariesCommand,
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

export type GetTraceSummariesCommandInput = GetTraceSummariesRequest;
export type GetTraceSummariesCommandOutput = GetTraceSummariesResult & __MetadataBearer;

export class GetTraceSummariesCommand extends $Command<
  GetTraceSummariesCommandInput,
  GetTraceSummariesCommandOutput,
  XRayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetTraceSummariesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: XRayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetTraceSummariesCommandInput, GetTraceSummariesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "XRayClient";
    const commandName = "GetTraceSummariesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetTraceSummariesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetTraceSummariesResult.filterSensitiveLog,
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

  private serialize(input: GetTraceSummariesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetTraceSummariesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetTraceSummariesCommandOutput> {
    return deserializeAws_restJson1GetTraceSummariesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
