import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient.ts";
import { GetOperationsRequest, GetOperationsResult } from "../models/models_1.ts";
import {
  deserializeAws_json1_1GetOperationsCommand,
  serializeAws_json1_1GetOperationsCommand,
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

export interface GetOperationsCommandInput extends GetOperationsRequest {}
export interface GetOperationsCommandOutput extends GetOperationsResult, __MetadataBearer {}

/**
 * <p>Returns information about all operations.</p>
 *          <p>Results are returned from oldest to newest, up to a maximum of 200. Results can be paged
 *       by making each subsequent call to <code>GetOperations</code> use the maximum (last)
 *         <code>statusChangedAt</code> value from the previous request.</p>
 */
export class GetOperationsCommand extends $Command<
  GetOperationsCommandInput,
  GetOperationsCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetOperationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetOperationsCommandInput, GetOperationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetOperationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetOperationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetOperationsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetOperationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetOperationsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetOperationsCommandOutput> {
    return deserializeAws_json1_1GetOperationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
