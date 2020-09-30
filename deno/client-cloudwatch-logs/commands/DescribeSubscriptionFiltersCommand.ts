
import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient.ts";
import { DescribeSubscriptionFiltersRequest, DescribeSubscriptionFiltersResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeSubscriptionFiltersCommand,
  serializeAws_json1_1DescribeSubscriptionFiltersCommand,
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

export type DescribeSubscriptionFiltersCommandInput = DescribeSubscriptionFiltersRequest;
export type DescribeSubscriptionFiltersCommandOutput = DescribeSubscriptionFiltersResponse & __MetadataBearer;

export class DescribeSubscriptionFiltersCommand extends $Command<
  DescribeSubscriptionFiltersCommandInput,
  DescribeSubscriptionFiltersCommandOutput,
  CloudWatchLogsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeSubscriptionFiltersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeSubscriptionFiltersCommandInput, DescribeSubscriptionFiltersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: DescribeSubscriptionFiltersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeSubscriptionFiltersResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeSubscriptionFiltersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeSubscriptionFiltersCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeSubscriptionFiltersCommandOutput> {
    return deserializeAws_json1_1DescribeSubscriptionFiltersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
