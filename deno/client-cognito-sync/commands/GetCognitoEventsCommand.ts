import { CognitoSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoSyncClient.ts";
import { GetCognitoEventsRequest, GetCognitoEventsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetCognitoEventsCommand,
  serializeAws_restJson1GetCognitoEventsCommand,
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

export interface GetCognitoEventsCommandInput extends GetCognitoEventsRequest {}
export interface GetCognitoEventsCommandOutput extends GetCognitoEventsResponse, __MetadataBearer {}

/**
 * <p>Gets the events and the corresponding Lambda functions associated with an identity pool.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoSyncClient, GetCognitoEventsCommand } from "../../client-cognito-sync/mod.ts";
 * // const { CognitoSyncClient, GetCognitoEventsCommand } = require("@aws-sdk/client-cognito-sync"); // CommonJS import
 * const client = new CognitoSyncClient(config);
 * const command = new GetCognitoEventsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCognitoEventsCommandInput} for command's `input` shape.
 * @see {@link GetCognitoEventsCommandOutput} for command's `response` shape.
 * @see {@link CognitoSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetCognitoEventsCommand extends $Command<
  GetCognitoEventsCommandInput,
  GetCognitoEventsCommandOutput,
  CognitoSyncClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetCognitoEventsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCognitoEventsCommandInput, GetCognitoEventsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoSyncClient";
    const commandName = "GetCognitoEventsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetCognitoEventsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetCognitoEventsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetCognitoEventsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetCognitoEventsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCognitoEventsCommandOutput> {
    return deserializeAws_restJson1GetCognitoEventsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
