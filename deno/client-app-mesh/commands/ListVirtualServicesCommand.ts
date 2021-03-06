import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient.ts";
import { ListVirtualServicesInput, ListVirtualServicesOutput } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListVirtualServicesCommand,
  serializeAws_restJson1ListVirtualServicesCommand,
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

export interface ListVirtualServicesCommandInput extends ListVirtualServicesInput {}
export interface ListVirtualServicesCommandOutput extends ListVirtualServicesOutput, __MetadataBearer {}

/**
 * <p>Returns a list of existing virtual services in a service mesh.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, ListVirtualServicesCommand } from "../../client-app-mesh/mod.ts";
 * // const { AppMeshClient, ListVirtualServicesCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new ListVirtualServicesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListVirtualServicesCommandInput} for command's `input` shape.
 * @see {@link ListVirtualServicesCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListVirtualServicesCommand extends $Command<
  ListVirtualServicesCommandInput,
  ListVirtualServicesCommandOutput,
  AppMeshClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListVirtualServicesCommandInput) {
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
  ): Handler<ListVirtualServicesCommandInput, ListVirtualServicesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppMeshClient";
    const commandName = "ListVirtualServicesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListVirtualServicesInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListVirtualServicesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListVirtualServicesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListVirtualServicesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListVirtualServicesCommandOutput> {
    return deserializeAws_restJson1ListVirtualServicesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
