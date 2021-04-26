import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient.ts";
import { CreateProjectRequest, CreateProjectResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1CreateProjectCommand,
  serializeAws_json1_1CreateProjectCommand,
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

export interface CreateProjectCommandInput extends CreateProjectRequest {}
export interface CreateProjectCommandOutput extends CreateProjectResponse, __MetadataBearer {}

/**
 * <p>Creates a new Amazon Rekognition Custom Labels project. A project is a logical grouping of resources (images, Labels, models)
 *          and operations (training, evaluation and detection).  </p>
 *          <p>This operation requires permissions to perform the <code>rekognition:CreateProject</code> action.</p>
 */
export class CreateProjectCommand extends $Command<
  CreateProjectCommandInput,
  CreateProjectCommandOutput,
  RekognitionClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateProjectCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RekognitionClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateProjectCommandInput, CreateProjectCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "CreateProjectCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateProjectRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateProjectResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateProjectCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateProjectCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateProjectCommandOutput> {
    return deserializeAws_json1_1CreateProjectCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
