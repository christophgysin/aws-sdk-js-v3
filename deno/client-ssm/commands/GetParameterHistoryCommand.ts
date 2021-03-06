import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient.ts";
import { GetParameterHistoryRequest, GetParameterHistoryResult } from "../models/models_1.ts";
import {
  deserializeAws_json1_1GetParameterHistoryCommand,
  serializeAws_json1_1GetParameterHistoryCommand,
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

export interface GetParameterHistoryCommandInput extends GetParameterHistoryRequest {}
export interface GetParameterHistoryCommandOutput extends GetParameterHistoryResult, __MetadataBearer {}

/**
 * <p>Retrieves the history of all changes to a parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetParameterHistoryCommand } from "../../client-ssm/mod.ts";
 * // const { SSMClient, GetParameterHistoryCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new GetParameterHistoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetParameterHistoryCommandInput} for command's `input` shape.
 * @see {@link GetParameterHistoryCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetParameterHistoryCommand extends $Command<
  GetParameterHistoryCommandInput,
  GetParameterHistoryCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetParameterHistoryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetParameterHistoryCommandInput, GetParameterHistoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "GetParameterHistoryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetParameterHistoryRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetParameterHistoryResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetParameterHistoryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetParameterHistoryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetParameterHistoryCommandOutput> {
    return deserializeAws_json1_1GetParameterHistoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
