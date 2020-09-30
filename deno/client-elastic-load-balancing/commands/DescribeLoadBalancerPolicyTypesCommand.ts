
import {
  ElasticLoadBalancingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingClient.ts";
import { DescribeLoadBalancerPolicyTypesInput, DescribeLoadBalancerPolicyTypesOutput } from "../models/models_0.ts";
import {
  deserializeAws_queryDescribeLoadBalancerPolicyTypesCommand,
  serializeAws_queryDescribeLoadBalancerPolicyTypesCommand,
} from "../protocols/Aws_query.ts";
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

export type DescribeLoadBalancerPolicyTypesCommandInput = DescribeLoadBalancerPolicyTypesInput;
export type DescribeLoadBalancerPolicyTypesCommandOutput = DescribeLoadBalancerPolicyTypesOutput & __MetadataBearer;

export class DescribeLoadBalancerPolicyTypesCommand extends $Command<
  DescribeLoadBalancerPolicyTypesCommandInput,
  DescribeLoadBalancerPolicyTypesCommandOutput,
  ElasticLoadBalancingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeLoadBalancerPolicyTypesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticLoadBalancingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeLoadBalancerPolicyTypesCommandInput, DescribeLoadBalancerPolicyTypesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: DescribeLoadBalancerPolicyTypesInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeLoadBalancerPolicyTypesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeLoadBalancerPolicyTypesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDescribeLoadBalancerPolicyTypesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeLoadBalancerPolicyTypesCommandOutput> {
    return deserializeAws_queryDescribeLoadBalancerPolicyTypesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
