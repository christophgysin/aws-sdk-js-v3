import {
  LexModelBuildingServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LexModelBuildingServiceClient.ts";
import { GetBotVersionsRequest, GetBotVersionsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetBotVersionsCommand,
  serializeAws_restJson1GetBotVersionsCommand,
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

export interface GetBotVersionsCommandInput extends GetBotVersionsRequest {}
export interface GetBotVersionsCommandOutput extends GetBotVersionsResponse, __MetadataBearer {}

/**
 * <p>Gets information about all of the versions of a bot.</p>
 *          <p>The <code>GetBotVersions</code> operation returns a
 *         <code>BotMetadata</code> object for each version of a bot. For example,
 *       if a bot has three numbered versions, the <code>GetBotVersions</code>
 *       operation returns four <code>BotMetadata</code> objects in the response,
 *       one for each numbered version and one for the <code>$LATEST</code>
 *       version. </p>
 *          <p>The <code>GetBotVersions</code> operation always returns at least
 *       one version, the <code>$LATEST</code> version.</p>
 *          <p>This operation requires permissions for the
 *         <code>lex:GetBotVersions</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, GetBotVersionsCommand } from "../../client-lex-model-building-service/mod.ts";
 * // const { LexModelBuildingServiceClient, GetBotVersionsCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new GetBotVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBotVersionsCommandInput} for command's `input` shape.
 * @see {@link GetBotVersionsCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetBotVersionsCommand extends $Command<
  GetBotVersionsCommandInput,
  GetBotVersionsCommandOutput,
  LexModelBuildingServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetBotVersionsCommandInput) {
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
  ): Handler<GetBotVersionsCommandInput, GetBotVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelBuildingServiceClient";
    const commandName = "GetBotVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetBotVersionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetBotVersionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetBotVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetBotVersionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetBotVersionsCommandOutput> {
    return deserializeAws_restJson1GetBotVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
