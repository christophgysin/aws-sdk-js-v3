import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient.ts";
import { CreateLocationEfsRequest, CreateLocationEfsResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1CreateLocationEfsCommand,
  serializeAws_json1_1CreateLocationEfsCommand,
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

export interface CreateLocationEfsCommandInput extends CreateLocationEfsRequest {}
export interface CreateLocationEfsCommandOutput extends CreateLocationEfsResponse, __MetadataBearer {}

/**
 * <p>Creates an endpoint for an Amazon EFS file system.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, CreateLocationEfsCommand } from "../../client-datasync/mod.ts";
 * // const { DataSyncClient, CreateLocationEfsCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new CreateLocationEfsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLocationEfsCommandInput} for command's `input` shape.
 * @see {@link CreateLocationEfsCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateLocationEfsCommand extends $Command<
  CreateLocationEfsCommandInput,
  CreateLocationEfsCommandOutput,
  DataSyncClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateLocationEfsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateLocationEfsCommandInput, CreateLocationEfsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataSyncClient";
    const commandName = "CreateLocationEfsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateLocationEfsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateLocationEfsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateLocationEfsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateLocationEfsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateLocationEfsCommandOutput> {
    return deserializeAws_json1_1CreateLocationEfsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
