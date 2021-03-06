import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient.ts";
import { PutWorkflowRunPropertiesRequest, PutWorkflowRunPropertiesResponse } from "../models/models_1.ts";
import {
  deserializeAws_json1_1PutWorkflowRunPropertiesCommand,
  serializeAws_json1_1PutWorkflowRunPropertiesCommand,
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

export interface PutWorkflowRunPropertiesCommandInput extends PutWorkflowRunPropertiesRequest {}
export interface PutWorkflowRunPropertiesCommandOutput extends PutWorkflowRunPropertiesResponse, __MetadataBearer {}

/**
 * <p>Puts the specified workflow run properties for the given workflow run. If a property already exists for the specified run, then it overrides the value otherwise adds the property to existing properties.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, PutWorkflowRunPropertiesCommand } from "../../client-glue/mod.ts";
 * // const { GlueClient, PutWorkflowRunPropertiesCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new PutWorkflowRunPropertiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutWorkflowRunPropertiesCommandInput} for command's `input` shape.
 * @see {@link PutWorkflowRunPropertiesCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class PutWorkflowRunPropertiesCommand extends $Command<
  PutWorkflowRunPropertiesCommandInput,
  PutWorkflowRunPropertiesCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutWorkflowRunPropertiesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutWorkflowRunPropertiesCommandInput, PutWorkflowRunPropertiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "PutWorkflowRunPropertiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutWorkflowRunPropertiesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutWorkflowRunPropertiesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutWorkflowRunPropertiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutWorkflowRunPropertiesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutWorkflowRunPropertiesCommandOutput> {
    return deserializeAws_json1_1PutWorkflowRunPropertiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
