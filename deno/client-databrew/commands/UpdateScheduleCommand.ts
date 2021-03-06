import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient.ts";
import { UpdateScheduleRequest, UpdateScheduleResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1UpdateScheduleCommand,
  serializeAws_restJson1UpdateScheduleCommand,
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

export interface UpdateScheduleCommandInput extends UpdateScheduleRequest {}
export interface UpdateScheduleCommandOutput extends UpdateScheduleResponse, __MetadataBearer {}

/**
 * <p>Modifies the definition of an existing DataBrew schedule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, UpdateScheduleCommand } from "../../client-databrew/mod.ts";
 * // const { DataBrewClient, UpdateScheduleCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const command = new UpdateScheduleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateScheduleCommandInput} for command's `input` shape.
 * @see {@link UpdateScheduleCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateScheduleCommand extends $Command<
  UpdateScheduleCommandInput,
  UpdateScheduleCommandOutput,
  DataBrewClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateScheduleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataBrewClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateScheduleCommandInput, UpdateScheduleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataBrewClient";
    const commandName = "UpdateScheduleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateScheduleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateScheduleResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateScheduleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateScheduleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateScheduleCommandOutput> {
    return deserializeAws_restJson1UpdateScheduleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
