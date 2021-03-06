import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient.ts";
import { ListVirtualGatewaysInput, ListVirtualGatewaysOutput } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListVirtualGatewaysCommand,
  serializeAws_restJson1ListVirtualGatewaysCommand,
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

export interface ListVirtualGatewaysCommandInput extends ListVirtualGatewaysInput {}
export interface ListVirtualGatewaysCommandOutput extends ListVirtualGatewaysOutput, __MetadataBearer {}

/**
 * <p>Returns a list of existing virtual gateways in a service mesh.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, ListVirtualGatewaysCommand } from "../../client-app-mesh/mod.ts";
 * // const { AppMeshClient, ListVirtualGatewaysCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new ListVirtualGatewaysCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListVirtualGatewaysCommandInput} for command's `input` shape.
 * @see {@link ListVirtualGatewaysCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListVirtualGatewaysCommand extends $Command<
  ListVirtualGatewaysCommandInput,
  ListVirtualGatewaysCommandOutput,
  AppMeshClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListVirtualGatewaysCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppMeshClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListVirtualGatewaysCommandInput, ListVirtualGatewaysCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppMeshClient";
    const commandName = "ListVirtualGatewaysCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListVirtualGatewaysInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListVirtualGatewaysOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListVirtualGatewaysCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListVirtualGatewaysCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListVirtualGatewaysCommandOutput> {
    return deserializeAws_restJson1ListVirtualGatewaysCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
