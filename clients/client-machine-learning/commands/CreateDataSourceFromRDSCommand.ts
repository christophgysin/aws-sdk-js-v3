import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { CreateDataSourceFromRDSInput, CreateDataSourceFromRDSOutput } from "../models/models_0";
import {
  deserializeAws_json1_1CreateDataSourceFromRDSCommand,
  serializeAws_json1_1CreateDataSourceFromRDSCommand,
} from "../protocols/Aws_json1_1";
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

export type CreateDataSourceFromRDSCommandInput = CreateDataSourceFromRDSInput;
export type CreateDataSourceFromRDSCommandOutput = CreateDataSourceFromRDSOutput & __MetadataBearer;

export class CreateDataSourceFromRDSCommand extends $Command<
  CreateDataSourceFromRDSCommandInput,
  CreateDataSourceFromRDSCommandOutput,
  MachineLearningClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateDataSourceFromRDSCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MachineLearningClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDataSourceFromRDSCommandInput, CreateDataSourceFromRDSCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: CreateDataSourceFromRDSInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateDataSourceFromRDSOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDataSourceFromRDSCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateDataSourceFromRDSCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDataSourceFromRDSCommandOutput> {
    return deserializeAws_json1_1CreateDataSourceFromRDSCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
