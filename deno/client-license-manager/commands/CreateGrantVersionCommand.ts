import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient.ts";
import { CreateGrantVersionRequest, CreateGrantVersionResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1CreateGrantVersionCommand,
  serializeAws_json1_1CreateGrantVersionCommand,
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

export interface CreateGrantVersionCommandInput extends CreateGrantVersionRequest {}
export interface CreateGrantVersionCommandOutput extends CreateGrantVersionResponse, __MetadataBearer {}

/**
 * <p>Creates a new version of the specified grant.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, CreateGrantVersionCommand } from "../../client-license-manager/mod.ts";
 * // const { LicenseManagerClient, CreateGrantVersionCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new CreateGrantVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateGrantVersionCommandInput} for command's `input` shape.
 * @see {@link CreateGrantVersionCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateGrantVersionCommand extends $Command<
  CreateGrantVersionCommandInput,
  CreateGrantVersionCommandOutput,
  LicenseManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateGrantVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LicenseManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateGrantVersionCommandInput, CreateGrantVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LicenseManagerClient";
    const commandName = "CreateGrantVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateGrantVersionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateGrantVersionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateGrantVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateGrantVersionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateGrantVersionCommandOutput> {
    return deserializeAws_json1_1CreateGrantVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
