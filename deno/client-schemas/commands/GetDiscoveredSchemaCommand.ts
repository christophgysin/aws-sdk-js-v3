import { SchemasClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchemasClient.ts";
import { GetDiscoveredSchemaRequest, GetDiscoveredSchemaResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetDiscoveredSchemaCommand,
  serializeAws_restJson1GetDiscoveredSchemaCommand,
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

export interface GetDiscoveredSchemaCommandInput extends GetDiscoveredSchemaRequest {}
export interface GetDiscoveredSchemaCommandOutput extends GetDiscoveredSchemaResponse, __MetadataBearer {}

/**
 * <p>Get the discovered schema that was generated based on sampled events.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, GetDiscoveredSchemaCommand } from "../../client-schemas/mod.ts";
 * // const { SchemasClient, GetDiscoveredSchemaCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * const client = new SchemasClient(config);
 * const command = new GetDiscoveredSchemaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDiscoveredSchemaCommandInput} for command's `input` shape.
 * @see {@link GetDiscoveredSchemaCommandOutput} for command's `response` shape.
 * @see {@link SchemasClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetDiscoveredSchemaCommand extends $Command<
  GetDiscoveredSchemaCommandInput,
  GetDiscoveredSchemaCommandOutput,
  SchemasClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetDiscoveredSchemaCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SchemasClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDiscoveredSchemaCommandInput, GetDiscoveredSchemaCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SchemasClient";
    const commandName = "GetDiscoveredSchemaCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDiscoveredSchemaRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetDiscoveredSchemaResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDiscoveredSchemaCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetDiscoveredSchemaCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDiscoveredSchemaCommandOutput> {
    return deserializeAws_restJson1GetDiscoveredSchemaCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
