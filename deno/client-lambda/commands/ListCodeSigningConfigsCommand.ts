import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient.ts";
import { ListCodeSigningConfigsRequest, ListCodeSigningConfigsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListCodeSigningConfigsCommand,
  serializeAws_restJson1ListCodeSigningConfigsCommand,
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

export interface ListCodeSigningConfigsCommandInput extends ListCodeSigningConfigsRequest {}
export interface ListCodeSigningConfigsCommandOutput extends ListCodeSigningConfigsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuring-codesigning.html">code
 *         signing configurations</a>. A request returns up to 10,000 configurations per
 *       call. You can use the <code>MaxItems</code> parameter to return fewer configurations per call. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, ListCodeSigningConfigsCommand } from "../../client-lambda/mod.ts";
 * // const { LambdaClient, ListCodeSigningConfigsCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new ListCodeSigningConfigsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCodeSigningConfigsCommandInput} for command's `input` shape.
 * @see {@link ListCodeSigningConfigsCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListCodeSigningConfigsCommand extends $Command<
  ListCodeSigningConfigsCommandInput,
  ListCodeSigningConfigsCommandOutput,
  LambdaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListCodeSigningConfigsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListCodeSigningConfigsCommandInput, ListCodeSigningConfigsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "ListCodeSigningConfigsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListCodeSigningConfigsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListCodeSigningConfigsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListCodeSigningConfigsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListCodeSigningConfigsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListCodeSigningConfigsCommandOutput> {
    return deserializeAws_restJson1ListCodeSigningConfigsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
