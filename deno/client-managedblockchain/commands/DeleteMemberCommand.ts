import {
  ManagedBlockchainClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ManagedBlockchainClient.ts";
import { DeleteMemberInput, DeleteMemberOutput } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DeleteMemberCommand,
  serializeAws_restJson1DeleteMemberCommand,
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

export interface DeleteMemberCommandInput extends DeleteMemberInput {}
export interface DeleteMemberCommandOutput extends DeleteMemberOutput, __MetadataBearer {}

/**
 * <p>Deletes a member. Deleting a member removes the member and all associated resources from the network. <code>DeleteMember</code> can only be called for a specified <code>MemberId</code> if the principal performing the action is associated with the AWS account that owns the member. In all other cases, the <code>DeleteMember</code> action is carried out as the result of an approved proposal to remove a member. If <code>MemberId</code> is the last member in a network specified by the last AWS account, the network is deleted also.</p>
 *          <p>Applies only to Hyperledger Fabric.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainClient, DeleteMemberCommand } from "../../client-managedblockchain/mod.ts";
 * // const { ManagedBlockchainClient, DeleteMemberCommand } = require("@aws-sdk/client-managedblockchain"); // CommonJS import
 * const client = new ManagedBlockchainClient(config);
 * const command = new DeleteMemberCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteMemberCommandInput} for command's `input` shape.
 * @see {@link DeleteMemberCommandOutput} for command's `response` shape.
 * @see {@link ManagedBlockchainClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteMemberCommand extends $Command<
  DeleteMemberCommandInput,
  DeleteMemberCommandOutput,
  ManagedBlockchainClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteMemberCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ManagedBlockchainClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteMemberCommandInput, DeleteMemberCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ManagedBlockchainClient";
    const commandName = "DeleteMemberCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteMemberInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteMemberOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteMemberCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteMemberCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteMemberCommandOutput> {
    return deserializeAws_restJson1DeleteMemberCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
