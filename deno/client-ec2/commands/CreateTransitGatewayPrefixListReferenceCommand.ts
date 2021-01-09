import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client.ts";
import {
  CreateTransitGatewayPrefixListReferenceRequest,
  CreateTransitGatewayPrefixListReferenceResult,
} from "../models/models_1.ts";
import {
  deserializeAws_ec2CreateTransitGatewayPrefixListReferenceCommand,
  serializeAws_ec2CreateTransitGatewayPrefixListReferenceCommand,
} from "../protocols/Aws_ec2.ts";
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

export type CreateTransitGatewayPrefixListReferenceCommandInput = CreateTransitGatewayPrefixListReferenceRequest;
export type CreateTransitGatewayPrefixListReferenceCommandOutput = CreateTransitGatewayPrefixListReferenceResult &
  __MetadataBearer;

/**
 * <p>Creates a reference (route) to a prefix list in a specified transit gateway route table.</p>
 */
export class CreateTransitGatewayPrefixListReferenceCommand extends $Command<
  CreateTransitGatewayPrefixListReferenceCommandInput,
  CreateTransitGatewayPrefixListReferenceCommandOutput,
  EC2ClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateTransitGatewayPrefixListReferenceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    CreateTransitGatewayPrefixListReferenceCommandInput,
    CreateTransitGatewayPrefixListReferenceCommandOutput
  > {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateTransitGatewayPrefixListReferenceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateTransitGatewayPrefixListReferenceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateTransitGatewayPrefixListReferenceResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateTransitGatewayPrefixListReferenceCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2CreateTransitGatewayPrefixListReferenceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateTransitGatewayPrefixListReferenceCommandOutput> {
    return deserializeAws_ec2CreateTransitGatewayPrefixListReferenceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
