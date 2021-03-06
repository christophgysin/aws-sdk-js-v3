import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient.ts";
import { CreateHITTypeRequest, CreateHITTypeResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1CreateHITTypeCommand,
  serializeAws_json1_1CreateHITTypeCommand,
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

export interface CreateHITTypeCommandInput extends CreateHITTypeRequest {}
export interface CreateHITTypeCommandOutput extends CreateHITTypeResponse, __MetadataBearer {}

/**
 * <p>
 *             The <code>CreateHITType</code> operation creates a new HIT type. This operation
 *             allows you to define a standard set of HIT properties to use when creating HITs.
 *             If you register a HIT type with values that match an existing HIT type, the HIT type
 *             ID of the existing type will be returned.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, CreateHITTypeCommand } from "../../client-mturk/mod.ts";
 * // const { MTurkClient, CreateHITTypeCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new CreateHITTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateHITTypeCommandInput} for command's `input` shape.
 * @see {@link CreateHITTypeCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateHITTypeCommand extends $Command<
  CreateHITTypeCommandInput,
  CreateHITTypeCommandOutput,
  MTurkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateHITTypeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MTurkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateHITTypeCommandInput, CreateHITTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "CreateHITTypeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateHITTypeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateHITTypeResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateHITTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateHITTypeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateHITTypeCommandOutput> {
    return deserializeAws_json1_1CreateHITTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
