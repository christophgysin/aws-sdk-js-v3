import { DAXClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DAXClient.ts";
import { CreateParameterGroupRequest, CreateParameterGroupResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1CreateParameterGroupCommand,
  serializeAws_json1_1CreateParameterGroupCommand,
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

export interface CreateParameterGroupCommandInput extends CreateParameterGroupRequest {}
export interface CreateParameterGroupCommandOutput extends CreateParameterGroupResponse, __MetadataBearer {}

/**
 * <p>Creates a new parameter group. A parameter group is a collection of parameters that
 *             you apply to all of the nodes in a DAX cluster.</p>
 */
export class CreateParameterGroupCommand extends $Command<
  CreateParameterGroupCommandInput,
  CreateParameterGroupCommandOutput,
  DAXClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateParameterGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DAXClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateParameterGroupCommandInput, CreateParameterGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DAXClient";
    const commandName = "CreateParameterGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateParameterGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateParameterGroupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateParameterGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateParameterGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateParameterGroupCommandOutput> {
    return deserializeAws_json1_1CreateParameterGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
