import {
  MigrationHubConfigClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MigrationHubConfigClient.ts";
import { CreateHomeRegionControlRequest, CreateHomeRegionControlResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1CreateHomeRegionControlCommand,
  serializeAws_json1_1CreateHomeRegionControlCommand,
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

export interface CreateHomeRegionControlCommandInput extends CreateHomeRegionControlRequest {}
export interface CreateHomeRegionControlCommandOutput extends CreateHomeRegionControlResult, __MetadataBearer {}

/**
 * <p>This API sets up the home region for the calling account only.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubConfigClient, CreateHomeRegionControlCommand } from "../../client-migrationhub-config/mod.ts";
 * // const { MigrationHubConfigClient, CreateHomeRegionControlCommand } = require("@aws-sdk/client-migrationhub-config"); // CommonJS import
 * const client = new MigrationHubConfigClient(config);
 * const command = new CreateHomeRegionControlCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateHomeRegionControlCommandInput} for command's `input` shape.
 * @see {@link CreateHomeRegionControlCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubConfigClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateHomeRegionControlCommand extends $Command<
  CreateHomeRegionControlCommandInput,
  CreateHomeRegionControlCommandOutput,
  MigrationHubConfigClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateHomeRegionControlCommandInput) {
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
  ): Handler<CreateHomeRegionControlCommandInput, CreateHomeRegionControlCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubConfigClient";
    const commandName = "CreateHomeRegionControlCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateHomeRegionControlRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateHomeRegionControlResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateHomeRegionControlCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateHomeRegionControlCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateHomeRegionControlCommandOutput> {
    return deserializeAws_json1_1CreateHomeRegionControlCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
