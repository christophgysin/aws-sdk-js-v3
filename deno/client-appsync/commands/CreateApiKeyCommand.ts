import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient.ts";
import { CreateApiKeyRequest, CreateApiKeyResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1CreateApiKeyCommand,
  serializeAws_restJson1CreateApiKeyCommand,
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

export interface CreateApiKeyCommandInput extends CreateApiKeyRequest {}
export interface CreateApiKeyCommandOutput extends CreateApiKeyResponse, __MetadataBearer {}

/**
 * <p>Creates a unique key that you can distribute to clients who are executing your
 *          API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, CreateApiKeyCommand } from "../../client-appsync/mod.ts";
 * // const { AppSyncClient, CreateApiKeyCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const command = new CreateApiKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateApiKeyCommandInput} for command's `input` shape.
 * @see {@link CreateApiKeyCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateApiKeyCommand extends $Command<
  CreateApiKeyCommandInput,
  CreateApiKeyCommandOutput,
  AppSyncClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateApiKeyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateApiKeyCommandInput, CreateApiKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppSyncClient";
    const commandName = "CreateApiKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateApiKeyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateApiKeyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateApiKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateApiKeyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateApiKeyCommandOutput> {
    return deserializeAws_restJson1CreateApiKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
