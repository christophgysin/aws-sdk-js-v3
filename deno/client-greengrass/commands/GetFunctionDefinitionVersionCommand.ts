import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient.ts";
import { GetFunctionDefinitionVersionRequest, GetFunctionDefinitionVersionResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetFunctionDefinitionVersionCommand,
  serializeAws_restJson1GetFunctionDefinitionVersionCommand,
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

export interface GetFunctionDefinitionVersionCommandInput extends GetFunctionDefinitionVersionRequest {}
export interface GetFunctionDefinitionVersionCommandOutput
  extends GetFunctionDefinitionVersionResponse,
    __MetadataBearer {}

/**
 * Retrieves information about a Lambda function definition version, including which Lambda functions are included in the version and their configurations.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetFunctionDefinitionVersionCommand } from "../../client-greengrass/mod.ts";
 * // const { GreengrassClient, GetFunctionDefinitionVersionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new GetFunctionDefinitionVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFunctionDefinitionVersionCommandInput} for command's `input` shape.
 * @see {@link GetFunctionDefinitionVersionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetFunctionDefinitionVersionCommand extends $Command<
  GetFunctionDefinitionVersionCommandInput,
  GetFunctionDefinitionVersionCommandOutput,
  GreengrassClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetFunctionDefinitionVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetFunctionDefinitionVersionCommandInput, GetFunctionDefinitionVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassClient";
    const commandName = "GetFunctionDefinitionVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetFunctionDefinitionVersionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetFunctionDefinitionVersionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetFunctionDefinitionVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetFunctionDefinitionVersionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetFunctionDefinitionVersionCommandOutput> {
    return deserializeAws_restJson1GetFunctionDefinitionVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
