
import {
  ElasticLoadBalancingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingClient.ts";
import { AttachLoadBalancerToSubnetsInput, AttachLoadBalancerToSubnetsOutput } from "../models/models_0.ts";
import {
  deserializeAws_queryAttachLoadBalancerToSubnetsCommand,
  serializeAws_queryAttachLoadBalancerToSubnetsCommand,
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

export type AttachLoadBalancerToSubnetsCommandInput = AttachLoadBalancerToSubnetsInput;
export type AttachLoadBalancerToSubnetsCommandOutput = AttachLoadBalancerToSubnetsOutput & __MetadataBearer;

export class AttachLoadBalancerToSubnetsCommand extends $Command<
  AttachLoadBalancerToSubnetsCommandInput,
  AttachLoadBalancerToSubnetsCommandOutput,
  ElasticLoadBalancingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AttachLoadBalancerToSubnetsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticLoadBalancingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AttachLoadBalancerToSubnetsCommandInput, AttachLoadBalancerToSubnetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: AttachLoadBalancerToSubnetsInput.filterSensitiveLog,
      outputFilterSensitiveLog: AttachLoadBalancerToSubnetsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AttachLoadBalancerToSubnetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryAttachLoadBalancerToSubnetsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AttachLoadBalancerToSubnetsCommandOutput> {
    return deserializeAws_queryAttachLoadBalancerToSubnetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
