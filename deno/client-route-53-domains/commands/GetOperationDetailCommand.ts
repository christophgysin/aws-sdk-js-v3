import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient.ts";
import { GetOperationDetailRequest, GetOperationDetailResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetOperationDetailCommand,
  serializeAws_json1_1GetOperationDetailCommand,
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

export type GetOperationDetailCommandInput = GetOperationDetailRequest;
export type GetOperationDetailCommandOutput = GetOperationDetailResponse & __MetadataBearer;

/**
 * <p>This operation returns the current status of an operation that is not completed.</p>
 */
export class GetOperationDetailCommand extends $Command<
  GetOperationDetailCommandInput,
  GetOperationDetailCommandOutput,
  Route53DomainsClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetOperationDetailCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53DomainsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetOperationDetailCommandInput, GetOperationDetailCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53DomainsClient";
    const commandName = "GetOperationDetailCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetOperationDetailRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetOperationDetailResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetOperationDetailCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetOperationDetailCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetOperationDetailCommandOutput> {
    return deserializeAws_json1_1GetOperationDetailCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
