
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient.ts";
import { CreateHsmConfigurationMessage, CreateHsmConfigurationResult } from "../models/models_0.ts";
import {
  deserializeAws_queryCreateHsmConfigurationCommand,
  serializeAws_queryCreateHsmConfigurationCommand,
} from "../protocols/Aws_query.ts";
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

export type CreateHsmConfigurationCommandInput = CreateHsmConfigurationMessage;
export type CreateHsmConfigurationCommandOutput = CreateHsmConfigurationResult & __MetadataBearer;

export class CreateHsmConfigurationCommand extends $Command<
  CreateHsmConfigurationCommandInput,
  CreateHsmConfigurationCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateHsmConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateHsmConfigurationCommandInput, CreateHsmConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: CreateHsmConfigurationMessage.filterSensitiveLog,
      outputFilterSensitiveLog: CreateHsmConfigurationResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateHsmConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateHsmConfigurationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateHsmConfigurationCommandOutput> {
    return deserializeAws_queryCreateHsmConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
