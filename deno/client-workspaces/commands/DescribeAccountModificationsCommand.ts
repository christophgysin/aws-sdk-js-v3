import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient.ts";
import { DescribeAccountModificationsRequest, DescribeAccountModificationsResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeAccountModificationsCommand,
  serializeAws_json1_1DescribeAccountModificationsCommand,
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

export interface DescribeAccountModificationsCommandInput extends DescribeAccountModificationsRequest {}
export interface DescribeAccountModificationsCommandOutput
  extends DescribeAccountModificationsResult,
    __MetadataBearer {}

/**
 * <p>Retrieves a list that describes modifications to the configuration of Bring Your Own
 *          License (BYOL) for the specified account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DescribeAccountModificationsCommand } from "../../client-workspaces/mod.ts";
 * // const { WorkSpacesClient, DescribeAccountModificationsCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new DescribeAccountModificationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAccountModificationsCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountModificationsCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeAccountModificationsCommand extends $Command<
  DescribeAccountModificationsCommandInput,
  DescribeAccountModificationsCommandOutput,
  WorkSpacesClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAccountModificationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkSpacesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAccountModificationsCommandInput, DescribeAccountModificationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "DescribeAccountModificationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAccountModificationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeAccountModificationsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAccountModificationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeAccountModificationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAccountModificationsCommandOutput> {
    return deserializeAws_json1_1DescribeAccountModificationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
