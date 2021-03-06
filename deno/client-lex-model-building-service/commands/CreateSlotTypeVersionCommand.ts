import {
  LexModelBuildingServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LexModelBuildingServiceClient.ts";
import { CreateSlotTypeVersionRequest, CreateSlotTypeVersionResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1CreateSlotTypeVersionCommand,
  serializeAws_restJson1CreateSlotTypeVersionCommand,
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

export interface CreateSlotTypeVersionCommandInput extends CreateSlotTypeVersionRequest {}
export interface CreateSlotTypeVersionCommandOutput extends CreateSlotTypeVersionResponse, __MetadataBearer {}

/**
 * <p>Creates a new version of a slot type based on the
 *         <code>$LATEST</code> version of the specified slot type. If the
 *         <code>$LATEST</code> version of this resource has not changed since the
 *       last version that you created, Amazon Lex doesn't create a new version. It
 *       returns the last version that you created. </p>
 *          <note>
 *             <p>You can update only the <code>$LATEST</code> version of a slot
 *         type. You can't update the numbered versions that you create with the
 *           <code>CreateSlotTypeVersion</code> operation.</p>
 *          </note>
 *
 *          <p>When you create a version of a slot type, Amazon Lex sets the version to
 *       1. Subsequent versions increment by 1. For more information, see <a>versioning-intro</a>. </p>
 *
 *          <p>This operation requires permissions for the
 *         <code>lex:CreateSlotTypeVersion</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, CreateSlotTypeVersionCommand } from "../../client-lex-model-building-service/mod.ts";
 * // const { LexModelBuildingServiceClient, CreateSlotTypeVersionCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new CreateSlotTypeVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSlotTypeVersionCommandInput} for command's `input` shape.
 * @see {@link CreateSlotTypeVersionCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateSlotTypeVersionCommand extends $Command<
  CreateSlotTypeVersionCommandInput,
  CreateSlotTypeVersionCommandOutput,
  LexModelBuildingServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateSlotTypeVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexModelBuildingServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateSlotTypeVersionCommandInput, CreateSlotTypeVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelBuildingServiceClient";
    const commandName = "CreateSlotTypeVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateSlotTypeVersionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateSlotTypeVersionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateSlotTypeVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateSlotTypeVersionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSlotTypeVersionCommandOutput> {
    return deserializeAws_restJson1CreateSlotTypeVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
