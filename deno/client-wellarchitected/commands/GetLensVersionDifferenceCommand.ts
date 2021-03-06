import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient.ts";
import { GetLensVersionDifferenceInput, GetLensVersionDifferenceOutput } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetLensVersionDifferenceCommand,
  serializeAws_restJson1GetLensVersionDifferenceCommand,
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

export interface GetLensVersionDifferenceCommandInput extends GetLensVersionDifferenceInput {}
export interface GetLensVersionDifferenceCommandOutput extends GetLensVersionDifferenceOutput, __MetadataBearer {}

/**
 * <p>Get lens version differences.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, GetLensVersionDifferenceCommand } from "../../client-wellarchitected/mod.ts";
 * // const { WellArchitectedClient, GetLensVersionDifferenceCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const command = new GetLensVersionDifferenceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLensVersionDifferenceCommandInput} for command's `input` shape.
 * @see {@link GetLensVersionDifferenceCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetLensVersionDifferenceCommand extends $Command<
  GetLensVersionDifferenceCommandInput,
  GetLensVersionDifferenceCommandOutput,
  WellArchitectedClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetLensVersionDifferenceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WellArchitectedClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetLensVersionDifferenceCommandInput, GetLensVersionDifferenceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WellArchitectedClient";
    const commandName = "GetLensVersionDifferenceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetLensVersionDifferenceInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetLensVersionDifferenceOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetLensVersionDifferenceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetLensVersionDifferenceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetLensVersionDifferenceCommandOutput> {
    return deserializeAws_restJson1GetLensVersionDifferenceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
