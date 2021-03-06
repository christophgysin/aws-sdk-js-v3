import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient.ts";
import { RemoveAttributesFromFindingsRequest, RemoveAttributesFromFindingsResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1RemoveAttributesFromFindingsCommand,
  serializeAws_json1_1RemoveAttributesFromFindingsCommand,
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

export interface RemoveAttributesFromFindingsCommandInput extends RemoveAttributesFromFindingsRequest {}
export interface RemoveAttributesFromFindingsCommandOutput
  extends RemoveAttributesFromFindingsResponse,
    __MetadataBearer {}

/**
 * <p>Removes entire attributes (key and value pairs) from the findings that are specified
 *          by the ARNs of the findings where an attribute with the specified key exists.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, RemoveAttributesFromFindingsCommand } from "../../client-inspector/mod.ts";
 * // const { InspectorClient, RemoveAttributesFromFindingsCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new RemoveAttributesFromFindingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveAttributesFromFindingsCommandInput} for command's `input` shape.
 * @see {@link RemoveAttributesFromFindingsCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class RemoveAttributesFromFindingsCommand extends $Command<
  RemoveAttributesFromFindingsCommandInput,
  RemoveAttributesFromFindingsCommandOutput,
  InspectorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RemoveAttributesFromFindingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: InspectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RemoveAttributesFromFindingsCommandInput, RemoveAttributesFromFindingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InspectorClient";
    const commandName = "RemoveAttributesFromFindingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RemoveAttributesFromFindingsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RemoveAttributesFromFindingsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RemoveAttributesFromFindingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RemoveAttributesFromFindingsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RemoveAttributesFromFindingsCommandOutput> {
    return deserializeAws_json1_1RemoveAttributesFromFindingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
