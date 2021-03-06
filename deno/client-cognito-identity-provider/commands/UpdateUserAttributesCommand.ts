import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient.ts";
import { UpdateUserAttributesRequest, UpdateUserAttributesResponse } from "../models/models_1.ts";
import {
  deserializeAws_json1_1UpdateUserAttributesCommand,
  serializeAws_json1_1UpdateUserAttributesCommand,
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

export interface UpdateUserAttributesCommandInput extends UpdateUserAttributesRequest {}
export interface UpdateUserAttributesCommandOutput extends UpdateUserAttributesResponse, __MetadataBearer {}

/**
 * <p>Allows a user to update a specific attribute (one at a time).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, UpdateUserAttributesCommand } from "../../client-cognito-identity-provider/mod.ts";
 * // const { CognitoIdentityProviderClient, UpdateUserAttributesCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new UpdateUserAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateUserAttributesCommandInput} for command's `input` shape.
 * @see {@link UpdateUserAttributesCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateUserAttributesCommand extends $Command<
  UpdateUserAttributesCommandInput,
  UpdateUserAttributesCommandOutput,
  CognitoIdentityProviderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateUserAttributesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityProviderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateUserAttributesCommandInput, UpdateUserAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "UpdateUserAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateUserAttributesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateUserAttributesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateUserAttributesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateUserAttributesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateUserAttributesCommandOutput> {
    return deserializeAws_json1_1UpdateUserAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
