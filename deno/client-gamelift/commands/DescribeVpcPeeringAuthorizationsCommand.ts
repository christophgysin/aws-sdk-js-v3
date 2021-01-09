import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient.ts";
import { DescribeVpcPeeringAuthorizationsInput, DescribeVpcPeeringAuthorizationsOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeVpcPeeringAuthorizationsCommand,
  serializeAws_json1_1DescribeVpcPeeringAuthorizationsCommand,
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

export type DescribeVpcPeeringAuthorizationsCommandInput = DescribeVpcPeeringAuthorizationsInput;
export type DescribeVpcPeeringAuthorizationsCommandOutput = DescribeVpcPeeringAuthorizationsOutput & __MetadataBearer;

/**
 * <p>Retrieves valid VPC peering authorizations that are pending for the AWS account.
 *             This operation returns all VPC peering authorizations and requests for peering. This
 *             includes those initiated and received by this account. </p>
 *         <ul>
 *             <li>
 *                <p>
 *                   <a>CreateVpcPeeringAuthorization</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeVpcPeeringAuthorizations</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteVpcPeeringAuthorization</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>CreateVpcPeeringConnection</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeVpcPeeringConnections</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteVpcPeeringConnection</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class DescribeVpcPeeringAuthorizationsCommand extends $Command<
  DescribeVpcPeeringAuthorizationsCommandInput,
  DescribeVpcPeeringAuthorizationsCommandOutput,
  GameLiftClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeVpcPeeringAuthorizationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GameLiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeVpcPeeringAuthorizationsCommandInput, DescribeVpcPeeringAuthorizationsCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "DescribeVpcPeeringAuthorizationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeVpcPeeringAuthorizationsInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeVpcPeeringAuthorizationsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeVpcPeeringAuthorizationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeVpcPeeringAuthorizationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeVpcPeeringAuthorizationsCommandOutput> {
    return deserializeAws_json1_1DescribeVpcPeeringAuthorizationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
