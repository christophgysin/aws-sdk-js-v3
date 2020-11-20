import { STSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../STSClient";
import { GetCallerIdentityRequest, GetCallerIdentityResponse } from "../models/models_0";
import {
  deserializeAws_queryGetCallerIdentityCommand,
  serializeAws_queryGetCallerIdentityCommand,
} from "../protocols/Aws_query";
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

export type GetCallerIdentityCommandInput = GetCallerIdentityRequest;
export type GetCallerIdentityCommandOutput = GetCallerIdentityResponse & __MetadataBearer;

export class GetCallerIdentityCommand extends $Command<
  GetCallerIdentityCommandInput,
  GetCallerIdentityCommandOutput,
  STSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetCallerIdentityCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: STSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCallerIdentityCommandInput, GetCallerIdentityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "STSClient";
    const commandName = "GetCallerIdentityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetCallerIdentityRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetCallerIdentityResponse.filterSensitiveLog,
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

  private serialize(input: GetCallerIdentityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryGetCallerIdentityCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCallerIdentityCommandOutput> {
    return deserializeAws_queryGetCallerIdentityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
