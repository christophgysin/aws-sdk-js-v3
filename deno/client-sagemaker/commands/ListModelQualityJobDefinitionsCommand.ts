import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient.ts";
import { ListModelQualityJobDefinitionsRequest, ListModelQualityJobDefinitionsResponse } from "../models/models_2.ts";
import {
  deserializeAws_json1_1ListModelQualityJobDefinitionsCommand,
  serializeAws_json1_1ListModelQualityJobDefinitionsCommand,
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

export interface ListModelQualityJobDefinitionsCommandInput extends ListModelQualityJobDefinitionsRequest {}
export interface ListModelQualityJobDefinitionsCommandOutput
  extends ListModelQualityJobDefinitionsResponse,
    __MetadataBearer {}

/**
 * <p>Gets a list of model quality monitoring job definitions in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListModelQualityJobDefinitionsCommand } from "../../client-sagemaker/mod.ts";
 * // const { SageMakerClient, ListModelQualityJobDefinitionsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListModelQualityJobDefinitionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListModelQualityJobDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListModelQualityJobDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListModelQualityJobDefinitionsCommand extends $Command<
  ListModelQualityJobDefinitionsCommandInput,
  ListModelQualityJobDefinitionsCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListModelQualityJobDefinitionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListModelQualityJobDefinitionsCommandInput, ListModelQualityJobDefinitionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListModelQualityJobDefinitionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListModelQualityJobDefinitionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListModelQualityJobDefinitionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListModelQualityJobDefinitionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListModelQualityJobDefinitionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListModelQualityJobDefinitionsCommandOutput> {
    return deserializeAws_json1_1ListModelQualityJobDefinitionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
