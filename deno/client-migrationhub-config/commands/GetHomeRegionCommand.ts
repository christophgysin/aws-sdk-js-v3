import {
  MigrationHubConfigClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MigrationHubConfigClient.ts";
import { GetHomeRegionRequest, GetHomeRegionResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetHomeRegionCommand,
  serializeAws_json1_1GetHomeRegionCommand,
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

export type GetHomeRegionCommandInput = GetHomeRegionRequest;
export type GetHomeRegionCommandOutput = GetHomeRegionResult & __MetadataBearer;

/**
 * <p>Returns the calling account’s home region, if configured. This API is used by other AWS
 *       services to determine the regional endpoint for calling AWS Application Discovery Service and
 *       Migration Hub. You must call <code>GetHomeRegion</code> at least once before you call any
 *       other AWS Application Discovery Service and AWS Migration Hub APIs, to obtain the account's
 *       Migration Hub home region.</p>
 */
export class GetHomeRegionCommand extends $Command<
  GetHomeRegionCommandInput,
  GetHomeRegionCommandOutput,
  MigrationHubConfigClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetHomeRegionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MigrationHubConfigClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetHomeRegionCommandInput, GetHomeRegionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubConfigClient";
    const commandName = "GetHomeRegionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetHomeRegionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetHomeRegionResult.filterSensitiveLog,
    };

    if (typeof logger.info === "function") {
      logger.info({
        clientName,
        commandName,
      });
    }

    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetHomeRegionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetHomeRegionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetHomeRegionCommandOutput> {
    return deserializeAws_json1_1GetHomeRegionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
