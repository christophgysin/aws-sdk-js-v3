import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient.ts";
import { ListFlowDefinitionsRequest, ListFlowDefinitionsResponse } from "../models/models_2.ts";
import {
  deserializeAws_json1_1ListFlowDefinitionsCommand,
  serializeAws_json1_1ListFlowDefinitionsCommand,
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

export interface ListFlowDefinitionsCommandInput extends ListFlowDefinitionsRequest {}
export interface ListFlowDefinitionsCommandOutput extends ListFlowDefinitionsResponse, __MetadataBearer {}

/**
 * <p>Returns information about the flow definitions in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListFlowDefinitionsCommand } from "../../client-sagemaker/mod.ts";
 * // const { SageMakerClient, ListFlowDefinitionsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListFlowDefinitionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFlowDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListFlowDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListFlowDefinitionsCommand extends $Command<
  ListFlowDefinitionsCommandInput,
  ListFlowDefinitionsCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListFlowDefinitionsCommandInput) {
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
  ): Handler<ListFlowDefinitionsCommandInput, ListFlowDefinitionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListFlowDefinitionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListFlowDefinitionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListFlowDefinitionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListFlowDefinitionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListFlowDefinitionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListFlowDefinitionsCommandOutput> {
    return deserializeAws_json1_1ListFlowDefinitionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
