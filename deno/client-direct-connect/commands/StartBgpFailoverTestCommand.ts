
import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient.ts";
import { StartBgpFailoverTestRequest, StartBgpFailoverTestResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1StartBgpFailoverTestCommand,
  serializeAws_json1_1StartBgpFailoverTestCommand,
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

export type StartBgpFailoverTestCommandInput = StartBgpFailoverTestRequest;
export type StartBgpFailoverTestCommandOutput = StartBgpFailoverTestResponse & __MetadataBearer;

export class StartBgpFailoverTestCommand extends $Command<
  StartBgpFailoverTestCommandInput,
  StartBgpFailoverTestCommandOutput,
  DirectConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartBgpFailoverTestCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartBgpFailoverTestCommandInput, StartBgpFailoverTestCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "StartBgpFailoverTestCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartBgpFailoverTestRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartBgpFailoverTestResponse.filterSensitiveLog,
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

  private serialize(input: StartBgpFailoverTestCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartBgpFailoverTestCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartBgpFailoverTestCommandOutput> {
    return deserializeAws_json1_1StartBgpFailoverTestCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
