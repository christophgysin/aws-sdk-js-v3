import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient.ts";
import { UpdateDataSetPermissionsRequest, UpdateDataSetPermissionsResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1UpdateDataSetPermissionsCommand,
  serializeAws_restJson1UpdateDataSetPermissionsCommand,
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

export interface UpdateDataSetPermissionsCommandInput extends UpdateDataSetPermissionsRequest {}
export interface UpdateDataSetPermissionsCommandOutput extends UpdateDataSetPermissionsResponse, __MetadataBearer {}

/**
 * <p>Updates the permissions on a dataset.</p>
 * 		       <p>The permissions resource is <code>arn:aws:quicksight:region:aws-account-id:dataset/data-set-id</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateDataSetPermissionsCommand } from "../../client-quicksight/mod.ts";
 * // const { QuickSightClient, UpdateDataSetPermissionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new UpdateDataSetPermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDataSetPermissionsCommandInput} for command's `input` shape.
 * @see {@link UpdateDataSetPermissionsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateDataSetPermissionsCommand extends $Command<
  UpdateDataSetPermissionsCommandInput,
  UpdateDataSetPermissionsCommandOutput,
  QuickSightClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateDataSetPermissionsCommandInput) {
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
  ): Handler<UpdateDataSetPermissionsCommandInput, UpdateDataSetPermissionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "UpdateDataSetPermissionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateDataSetPermissionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateDataSetPermissionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateDataSetPermissionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateDataSetPermissionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateDataSetPermissionsCommandOutput> {
    return deserializeAws_restJson1UpdateDataSetPermissionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
