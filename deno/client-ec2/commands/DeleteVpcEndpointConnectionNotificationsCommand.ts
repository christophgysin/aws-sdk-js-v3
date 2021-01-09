import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client.ts";
import {
  DeleteVpcEndpointConnectionNotificationsRequest,
  DeleteVpcEndpointConnectionNotificationsResult,
} from "../models/models_2.ts";
import {
  deserializeAws_ec2DeleteVpcEndpointConnectionNotificationsCommand,
  serializeAws_ec2DeleteVpcEndpointConnectionNotificationsCommand,
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

export type DeleteVpcEndpointConnectionNotificationsCommandInput = DeleteVpcEndpointConnectionNotificationsRequest;
export type DeleteVpcEndpointConnectionNotificationsCommandOutput = DeleteVpcEndpointConnectionNotificationsResult &
  __MetadataBearer;

/**
 * <p>Deletes one or more VPC endpoint connection notifications.</p>
 */
export class DeleteVpcEndpointConnectionNotificationsCommand extends $Command<
  DeleteVpcEndpointConnectionNotificationsCommandInput,
  DeleteVpcEndpointConnectionNotificationsCommandOutput,
  EC2ClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteVpcEndpointConnectionNotificationsCommandInput) {
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
    DeleteVpcEndpointConnectionNotificationsCommandInput,
    DeleteVpcEndpointConnectionNotificationsCommandOutput
  > {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteVpcEndpointConnectionNotificationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteVpcEndpointConnectionNotificationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteVpcEndpointConnectionNotificationsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteVpcEndpointConnectionNotificationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DeleteVpcEndpointConnectionNotificationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteVpcEndpointConnectionNotificationsCommandOutput> {
    return deserializeAws_ec2DeleteVpcEndpointConnectionNotificationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
