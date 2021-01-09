import {
  LexModelBuildingServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LexModelBuildingServiceClient.ts";
import { GetIntentVersionsRequest, GetIntentVersionsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetIntentVersionsCommand,
  serializeAws_restJson1GetIntentVersionsCommand,
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

export type GetIntentVersionsCommandInput = GetIntentVersionsRequest;
export type GetIntentVersionsCommandOutput = GetIntentVersionsResponse & __MetadataBearer;

/**
 * <p>Gets information about all of the versions of an intent.</p>
 *          <p>The <code>GetIntentVersions</code> operation returns an
 *         <code>IntentMetadata</code> object for each version of an intent. For
 *       example, if an intent has three numbered versions, the
 *         <code>GetIntentVersions</code> operation returns four
 *         <code>IntentMetadata</code> objects in the response, one for each
 *       numbered version and one for the <code>$LATEST</code> version. </p>
 *          <p>The <code>GetIntentVersions</code> operation always returns at
 *       least one version, the <code>$LATEST</code> version.</p>
 *          <p>This operation requires permissions for the
 *         <code>lex:GetIntentVersions</code> action.</p>
 */
export class GetIntentVersionsCommand extends $Command<
  GetIntentVersionsCommandInput,
  GetIntentVersionsCommandOutput,
  LexModelBuildingServiceClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetIntentVersionsCommandInput) {
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
  ): Handler<GetIntentVersionsCommandInput, GetIntentVersionsCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelBuildingServiceClient";
    const commandName = "GetIntentVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetIntentVersionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetIntentVersionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetIntentVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetIntentVersionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetIntentVersionsCommandOutput> {
    return deserializeAws_restJson1GetIntentVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
