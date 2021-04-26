import {
  ElasticsearchServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticsearchServiceClient.ts";
import { GetPackageVersionHistoryRequest, GetPackageVersionHistoryResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetPackageVersionHistoryCommand,
  serializeAws_restJson1GetPackageVersionHistoryCommand,
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

export interface GetPackageVersionHistoryCommandInput extends GetPackageVersionHistoryRequest {}
export interface GetPackageVersionHistoryCommandOutput extends GetPackageVersionHistoryResponse, __MetadataBearer {}

/**
 * <p>Returns a list of versions of the package, along with their creation time and commit message.</p>
 */
export class GetPackageVersionHistoryCommand extends $Command<
  GetPackageVersionHistoryCommandInput,
  GetPackageVersionHistoryCommandOutput,
  ElasticsearchServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetPackageVersionHistoryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticsearchServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetPackageVersionHistoryCommandInput, GetPackageVersionHistoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticsearchServiceClient";
    const commandName = "GetPackageVersionHistoryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetPackageVersionHistoryRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetPackageVersionHistoryResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetPackageVersionHistoryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetPackageVersionHistoryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetPackageVersionHistoryCommandOutput> {
    return deserializeAws_restJson1GetPackageVersionHistoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
