import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient.ts";
import { ListOnPremisesInstancesInput, ListOnPremisesInstancesOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListOnPremisesInstancesCommand,
  serializeAws_json1_1ListOnPremisesInstancesCommand,
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

export interface ListOnPremisesInstancesCommandInput extends ListOnPremisesInstancesInput {}
export interface ListOnPremisesInstancesCommandOutput extends ListOnPremisesInstancesOutput, __MetadataBearer {}

/**
 * <p>Gets a list of names for one or more on-premises instances.</p>
 *         <p>Unless otherwise specified, both registered and deregistered on-premises instance
 *             names are listed. To list only registered or deregistered on-premises instance names,
 *             use the registration status parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, ListOnPremisesInstancesCommand } from "../../client-codedeploy/mod.ts";
 * // const { CodeDeployClient, ListOnPremisesInstancesCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const command = new ListOnPremisesInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListOnPremisesInstancesCommandInput} for command's `input` shape.
 * @see {@link ListOnPremisesInstancesCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListOnPremisesInstancesCommand extends $Command<
  ListOnPremisesInstancesCommandInput,
  ListOnPremisesInstancesCommandOutput,
  CodeDeployClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListOnPremisesInstancesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeDeployClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListOnPremisesInstancesCommandInput, ListOnPremisesInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeDeployClient";
    const commandName = "ListOnPremisesInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListOnPremisesInstancesInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListOnPremisesInstancesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListOnPremisesInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListOnPremisesInstancesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListOnPremisesInstancesCommandOutput> {
    return deserializeAws_json1_1ListOnPremisesInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
