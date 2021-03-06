import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient.ts";
import { GetProfileObjectTypeTemplateRequest, GetProfileObjectTypeTemplateResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetProfileObjectTypeTemplateCommand,
  serializeAws_restJson1GetProfileObjectTypeTemplateCommand,
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

export interface GetProfileObjectTypeTemplateCommandInput extends GetProfileObjectTypeTemplateRequest {}
export interface GetProfileObjectTypeTemplateCommandOutput
  extends GetProfileObjectTypeTemplateResponse,
    __MetadataBearer {}

/**
 * <p>Returns the template information for a specific object type.</p>
 *          <p>A template is a predefined ProfileObjectType, such as “Salesforce-Account” or
 *          “Salesforce-Contact.” When a user sends a ProfileObject, using the PutProfileObject API,
 *          with an ObjectTypeName that matches one of the TemplateIds, it uses the mappings from the
 *          template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, GetProfileObjectTypeTemplateCommand } from "../../client-customer-profiles/mod.ts";
 * // const { CustomerProfilesClient, GetProfileObjectTypeTemplateCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const command = new GetProfileObjectTypeTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetProfileObjectTypeTemplateCommandInput} for command's `input` shape.
 * @see {@link GetProfileObjectTypeTemplateCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetProfileObjectTypeTemplateCommand extends $Command<
  GetProfileObjectTypeTemplateCommandInput,
  GetProfileObjectTypeTemplateCommandOutput,
  CustomerProfilesClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetProfileObjectTypeTemplateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CustomerProfilesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetProfileObjectTypeTemplateCommandInput, GetProfileObjectTypeTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CustomerProfilesClient";
    const commandName = "GetProfileObjectTypeTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetProfileObjectTypeTemplateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetProfileObjectTypeTemplateResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetProfileObjectTypeTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetProfileObjectTypeTemplateCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetProfileObjectTypeTemplateCommandOutput> {
    return deserializeAws_restJson1GetProfileObjectTypeTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
