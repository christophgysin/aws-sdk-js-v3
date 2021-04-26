import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient.ts";
import { CreateChangeSetInput, CreateChangeSetOutput } from "../models/models_0.ts";
import {
  deserializeAws_queryCreateChangeSetCommand,
  serializeAws_queryCreateChangeSetCommand,
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

export interface CreateChangeSetCommandInput extends CreateChangeSetInput {}
export interface CreateChangeSetCommandOutput extends CreateChangeSetOutput, __MetadataBearer {}

/**
 * <p>Creates a list of changes that will be applied to a stack so that you can review the
 *          changes before executing them. You can create a change set for a stack that doesn't exist
 *          or an existing stack. If you create a change set for a stack that doesn't exist, the change
 *          set shows all of the resources that AWS CloudFormation will create. If you create a change
 *          set for an existing stack, AWS CloudFormation compares the stack's information with the
 *          information that you submit in the change set and lists the differences. Use change sets to
 *          understand which resources AWS CloudFormation will create or change, and how it will change
 *          resources in an existing stack, before you create or update a stack.</p>
 *          <p>To create a change set for a stack that doesn't exist, for the
 *             <code>ChangeSetType</code> parameter, specify <code>CREATE</code>. To create a change
 *          set for an existing stack, specify <code>UPDATE</code> for the <code>ChangeSetType</code>
 *          parameter. To create a change set for an import operation, specify <code>IMPORT</code> for
 *          the <code>ChangeSetType</code> parameter. After the <code>CreateChangeSet</code> call
 *          successfully completes, AWS CloudFormation starts creating the change set. To check the
 *          status of the change set or to review it, use the <a>DescribeChangeSet</a>
 *          action.</p>
 *          <p>When you are satisfied with the changes the change set will make, execute the change
 *          set by using the <a>ExecuteChangeSet</a> action. AWS CloudFormation doesn't make
 *          changes until you execute the change set.</p>
 *          <p>To create a change set for the entire stack hierachy, set
 *          <code>IncludeNestedStacks</code> to <code>True</code>.</p>
 */
export class CreateChangeSetCommand extends $Command<
  CreateChangeSetCommandInput,
  CreateChangeSetCommandOutput,
  CloudFormationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateChangeSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateChangeSetCommandInput, CreateChangeSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "CreateChangeSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateChangeSetInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateChangeSetOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateChangeSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateChangeSetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateChangeSetCommandOutput> {
    return deserializeAws_queryCreateChangeSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
