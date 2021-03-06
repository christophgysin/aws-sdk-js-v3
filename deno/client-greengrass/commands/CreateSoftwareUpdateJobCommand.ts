import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient.ts";
import { CreateSoftwareUpdateJobRequest, CreateSoftwareUpdateJobResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1CreateSoftwareUpdateJobCommand,
  serializeAws_restJson1CreateSoftwareUpdateJobCommand,
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

export interface CreateSoftwareUpdateJobCommandInput extends CreateSoftwareUpdateJobRequest {}
export interface CreateSoftwareUpdateJobCommandOutput extends CreateSoftwareUpdateJobResponse, __MetadataBearer {}

/**
 * Creates a software update for a core or group of cores (specified as an IoT thing group.) Use this to update the OTA Agent as well as the Greengrass core software. It makes use of the IoT Jobs feature which provides additional commands to manage a Greengrass core software update job.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, CreateSoftwareUpdateJobCommand } from "../../client-greengrass/mod.ts";
 * // const { GreengrassClient, CreateSoftwareUpdateJobCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new CreateSoftwareUpdateJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSoftwareUpdateJobCommandInput} for command's `input` shape.
 * @see {@link CreateSoftwareUpdateJobCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateSoftwareUpdateJobCommand extends $Command<
  CreateSoftwareUpdateJobCommandInput,
  CreateSoftwareUpdateJobCommandOutput,
  GreengrassClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateSoftwareUpdateJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateSoftwareUpdateJobCommandInput, CreateSoftwareUpdateJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassClient";
    const commandName = "CreateSoftwareUpdateJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateSoftwareUpdateJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateSoftwareUpdateJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateSoftwareUpdateJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateSoftwareUpdateJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSoftwareUpdateJobCommandOutput> {
    return deserializeAws_restJson1CreateSoftwareUpdateJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
