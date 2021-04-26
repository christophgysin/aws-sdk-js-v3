import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient.ts";
import {
  DescribeChannelMembershipForAppInstanceUserRequest,
  DescribeChannelMembershipForAppInstanceUserResponse,
} from "../models/models_0.ts";
import {
  deserializeAws_restJson1DescribeChannelMembershipForAppInstanceUserCommand,
  serializeAws_restJson1DescribeChannelMembershipForAppInstanceUserCommand,
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

export interface DescribeChannelMembershipForAppInstanceUserCommandInput
  extends DescribeChannelMembershipForAppInstanceUserRequest {}
export interface DescribeChannelMembershipForAppInstanceUserCommandOutput
  extends DescribeChannelMembershipForAppInstanceUserResponse,
    __MetadataBearer {}

/**
 * <p>
 * Returns the details of a channel based on the membership of the specified <code>AppInstanceUser</code>.</p>
 *
 *          <note>
 *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the <code>AppInstanceUserArn</code> of the user that makes
 *         the API call as the value in the header.</p>
 *          </note>
 */
export class DescribeChannelMembershipForAppInstanceUserCommand extends $Command<
  DescribeChannelMembershipForAppInstanceUserCommandInput,
  DescribeChannelMembershipForAppInstanceUserCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeChannelMembershipForAppInstanceUserCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeChannelMembershipForAppInstanceUserCommandInput,
    DescribeChannelMembershipForAppInstanceUserCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "DescribeChannelMembershipForAppInstanceUserCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeChannelMembershipForAppInstanceUserRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeChannelMembershipForAppInstanceUserResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeChannelMembershipForAppInstanceUserCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeChannelMembershipForAppInstanceUserCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeChannelMembershipForAppInstanceUserCommandOutput> {
    return deserializeAws_restJson1DescribeChannelMembershipForAppInstanceUserCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
