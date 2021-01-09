import {
  ElasticsearchServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticsearchServiceClient.ts";
import {
  DescribeReservedElasticsearchInstancesRequest,
  DescribeReservedElasticsearchInstancesResponse,
} from "../models/models_0.ts";
import {
  deserializeAws_restJson1DescribeReservedElasticsearchInstancesCommand,
  serializeAws_restJson1DescribeReservedElasticsearchInstancesCommand,
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

export type DescribeReservedElasticsearchInstancesCommandInput = DescribeReservedElasticsearchInstancesRequest;
export type DescribeReservedElasticsearchInstancesCommandOutput = DescribeReservedElasticsearchInstancesResponse &
  __MetadataBearer;

/**
 * <p>Returns information about reserved Elasticsearch instances for this account.</p>
 */
export class DescribeReservedElasticsearchInstancesCommand extends $Command<
  DescribeReservedElasticsearchInstancesCommandInput,
  DescribeReservedElasticsearchInstancesCommandOutput,
  ElasticsearchServiceClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeReservedElasticsearchInstancesCommandInput) {
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
  ): Handler<DescribeReservedElasticsearchInstancesCommandInput, DescribeReservedElasticsearchInstancesCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticsearchServiceClient";
    const commandName = "DescribeReservedElasticsearchInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeReservedElasticsearchInstancesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeReservedElasticsearchInstancesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeReservedElasticsearchInstancesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeReservedElasticsearchInstancesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeReservedElasticsearchInstancesCommandOutput> {
    return deserializeAws_restJson1DescribeReservedElasticsearchInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
