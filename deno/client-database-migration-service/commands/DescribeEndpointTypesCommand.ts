import {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient.ts";
import { DescribeEndpointTypesMessage, DescribeEndpointTypesResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeEndpointTypesCommand,
  serializeAws_json1_1DescribeEndpointTypesCommand,
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

export interface DescribeEndpointTypesCommandInput extends DescribeEndpointTypesMessage {}
export interface DescribeEndpointTypesCommandOutput extends DescribeEndpointTypesResponse, __MetadataBearer {}

/**
 * <p>Returns information about the type of endpoints available.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeEndpointTypesCommand } from "../../client-database-migration-service/mod.ts";
 * // const { DatabaseMigrationServiceClient, DescribeEndpointTypesCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new DescribeEndpointTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEndpointTypesCommandInput} for command's `input` shape.
 * @see {@link DescribeEndpointTypesCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeEndpointTypesCommand extends $Command<
  DescribeEndpointTypesCommandInput,
  DescribeEndpointTypesCommandOutput,
  DatabaseMigrationServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeEndpointTypesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DatabaseMigrationServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeEndpointTypesCommandInput, DescribeEndpointTypesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "DescribeEndpointTypesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeEndpointTypesMessage.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeEndpointTypesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeEndpointTypesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeEndpointTypesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeEndpointTypesCommandOutput> {
    return deserializeAws_json1_1DescribeEndpointTypesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
