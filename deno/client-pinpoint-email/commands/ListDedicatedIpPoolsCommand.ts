import { PinpointEmailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointEmailClient.ts";
import { ListDedicatedIpPoolsRequest, ListDedicatedIpPoolsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListDedicatedIpPoolsCommand,
  serializeAws_restJson1ListDedicatedIpPoolsCommand,
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

export interface ListDedicatedIpPoolsCommandInput extends ListDedicatedIpPoolsRequest {}
export interface ListDedicatedIpPoolsCommandOutput extends ListDedicatedIpPoolsResponse, __MetadataBearer {}

/**
 * <p>List all of the dedicated IP pools that exist in your Amazon Pinpoint account in the current
 *             AWS Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, ListDedicatedIpPoolsCommand } from "../../client-pinpoint-email/mod.ts";
 * // const { PinpointEmailClient, ListDedicatedIpPoolsCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * const client = new PinpointEmailClient(config);
 * const command = new ListDedicatedIpPoolsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDedicatedIpPoolsCommandInput} for command's `input` shape.
 * @see {@link ListDedicatedIpPoolsCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListDedicatedIpPoolsCommand extends $Command<
  ListDedicatedIpPoolsCommandInput,
  ListDedicatedIpPoolsCommandOutput,
  PinpointEmailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListDedicatedIpPoolsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointEmailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDedicatedIpPoolsCommandInput, ListDedicatedIpPoolsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointEmailClient";
    const commandName = "ListDedicatedIpPoolsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDedicatedIpPoolsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListDedicatedIpPoolsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListDedicatedIpPoolsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListDedicatedIpPoolsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDedicatedIpPoolsCommandOutput> {
    return deserializeAws_restJson1ListDedicatedIpPoolsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
