import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client.ts";
import { CreateTrafficPolicyVersionRequest, CreateTrafficPolicyVersionResponse } from "../models/models_0.ts";
import {
  deserializeAws_restXmlCreateTrafficPolicyVersionCommand,
  serializeAws_restXmlCreateTrafficPolicyVersionCommand,
} from "../protocols/Aws_restXml.ts";
import { getIdNormalizerPlugin } from "../../middleware-sdk-route53/mod.ts";
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

export type CreateTrafficPolicyVersionCommandInput = CreateTrafficPolicyVersionRequest;
export type CreateTrafficPolicyVersionCommandOutput = CreateTrafficPolicyVersionResponse & __MetadataBearer;

/**
 * <p>Creates a new version of an existing traffic policy. When you create a new version of a traffic policy, you specify the ID of the
 * 			traffic policy that you want to update and a JSON-formatted document that describes the new version. You use traffic policies to create
 * 			multiple DNS resource record sets for one domain name (such as example.com) or one subdomain name (such as www.example.com). You can
 * 			create a maximum of 1000 versions of a traffic policy. If you reach the limit and need to create another version, you'll need to start a new
 * 			traffic policy.</p>
 */
export class CreateTrafficPolicyVersionCommand extends $Command<
  CreateTrafficPolicyVersionCommandInput,
  CreateTrafficPolicyVersionCommandOutput,
  Route53ClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateTrafficPolicyVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateTrafficPolicyVersionCommandInput, CreateTrafficPolicyVersionCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.middlewareStack.use(getIdNormalizerPlugin(configuration));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "CreateTrafficPolicyVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateTrafficPolicyVersionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateTrafficPolicyVersionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateTrafficPolicyVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlCreateTrafficPolicyVersionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateTrafficPolicyVersionCommandOutput> {
    return deserializeAws_restXmlCreateTrafficPolicyVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
