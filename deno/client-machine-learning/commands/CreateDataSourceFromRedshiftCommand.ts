
import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient.ts";
import { CreateDataSourceFromRedshiftInput, CreateDataSourceFromRedshiftOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1CreateDataSourceFromRedshiftCommand,
  serializeAws_json1_1CreateDataSourceFromRedshiftCommand,
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

export type CreateDataSourceFromRedshiftCommandInput = CreateDataSourceFromRedshiftInput;
export type CreateDataSourceFromRedshiftCommandOutput = CreateDataSourceFromRedshiftOutput & __MetadataBearer;

export class CreateDataSourceFromRedshiftCommand extends $Command<
  CreateDataSourceFromRedshiftCommandInput,
  CreateDataSourceFromRedshiftCommandOutput,
  MachineLearningClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateDataSourceFromRedshiftCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MachineLearningClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDataSourceFromRedshiftCommandInput, CreateDataSourceFromRedshiftCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: CreateDataSourceFromRedshiftInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateDataSourceFromRedshiftOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDataSourceFromRedshiftCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateDataSourceFromRedshiftCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateDataSourceFromRedshiftCommandOutput> {
    return deserializeAws_json1_1CreateDataSourceFromRedshiftCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
