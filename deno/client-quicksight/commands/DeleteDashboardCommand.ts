import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient.ts";
import { DeleteDashboardRequest, DeleteDashboardResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DeleteDashboardCommand,
  serializeAws_restJson1DeleteDashboardCommand,
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

export interface DeleteDashboardCommandInput extends DeleteDashboardRequest {}
export interface DeleteDashboardCommandOutput extends DeleteDashboardResponse, __MetadataBearer {}

/**
 * <p>Deletes a dashboard.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DeleteDashboardCommand } from "../../client-quicksight/mod.ts";
 * // const { QuickSightClient, DeleteDashboardCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new DeleteDashboardCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDashboardCommandInput} for command's `input` shape.
 * @see {@link DeleteDashboardCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteDashboardCommand extends $Command<
  DeleteDashboardCommandInput,
  DeleteDashboardCommandOutput,
  QuickSightClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteDashboardCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteDashboardCommandInput, DeleteDashboardCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "DeleteDashboardCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteDashboardRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteDashboardResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteDashboardCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteDashboardCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteDashboardCommandOutput> {
    return deserializeAws_restJson1DeleteDashboardCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
