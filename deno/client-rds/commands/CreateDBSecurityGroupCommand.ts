import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient.ts";
import { CreateDBSecurityGroupMessage, CreateDBSecurityGroupResult } from "../models/models_0.ts";
import {
  deserializeAws_queryCreateDBSecurityGroupCommand,
  serializeAws_queryCreateDBSecurityGroupCommand,
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

export interface CreateDBSecurityGroupCommandInput extends CreateDBSecurityGroupMessage {}
export interface CreateDBSecurityGroupCommandOutput extends CreateDBSecurityGroupResult, __MetadataBearer {}

/**
 * <p>Creates a new DB security group. DB security groups control access to a DB instance.</p>
 *          <note>
 *             <p>A DB security group controls access to EC2-Classic DB instances that are not in a VPC.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CreateDBSecurityGroupCommand } from "../../client-rds/mod.ts";
 * // const { RDSClient, CreateDBSecurityGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new CreateDBSecurityGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDBSecurityGroupCommandInput} for command's `input` shape.
 * @see {@link CreateDBSecurityGroupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateDBSecurityGroupCommand extends $Command<
  CreateDBSecurityGroupCommandInput,
  CreateDBSecurityGroupCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateDBSecurityGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDBSecurityGroupCommandInput, CreateDBSecurityGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "CreateDBSecurityGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDBSecurityGroupMessage.filterSensitiveLog,
      outputFilterSensitiveLog: CreateDBSecurityGroupResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDBSecurityGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateDBSecurityGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDBSecurityGroupCommandOutput> {
    return deserializeAws_queryCreateDBSecurityGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
