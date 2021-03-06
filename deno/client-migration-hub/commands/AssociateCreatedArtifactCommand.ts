import { MigrationHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubClient.ts";
import { AssociateCreatedArtifactRequest, AssociateCreatedArtifactResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1AssociateCreatedArtifactCommand,
  serializeAws_json1_1AssociateCreatedArtifactCommand,
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

export interface AssociateCreatedArtifactCommandInput extends AssociateCreatedArtifactRequest {}
export interface AssociateCreatedArtifactCommandOutput extends AssociateCreatedArtifactResult, __MetadataBearer {}

/**
 * <p>Associates a created artifact of an AWS cloud resource, the target receiving the
 *          migration, with the migration task performed by a migration tool. This API has the
 *          following traits:</p>
 *          <ul>
 *             <li>
 *                <p>Migration tools can call the <code>AssociateCreatedArtifact</code> operation to
 *                indicate which AWS artifact is associated with a migration task.</p>
 *             </li>
 *             <li>
 *                <p>The created artifact name must be provided in ARN (Amazon Resource Name) format
 *                which will contain information about type and region; for example:
 *                   <code>arn:aws:ec2:us-east-1:488216288981:image/ami-6d0ba87b</code>.</p>
 *             </li>
 *             <li>
 *                <p>Examples of the AWS resource behind the created artifact are, AMI's, EC2 instance,
 *                or DMS endpoint, etc.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, AssociateCreatedArtifactCommand } from "../../client-migration-hub/mod.ts";
 * // const { MigrationHubClient, AssociateCreatedArtifactCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
 * const client = new MigrationHubClient(config);
 * const command = new AssociateCreatedArtifactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateCreatedArtifactCommandInput} for command's `input` shape.
 * @see {@link AssociateCreatedArtifactCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class AssociateCreatedArtifactCommand extends $Command<
  AssociateCreatedArtifactCommandInput,
  AssociateCreatedArtifactCommandOutput,
  MigrationHubClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateCreatedArtifactCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MigrationHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateCreatedArtifactCommandInput, AssociateCreatedArtifactCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubClient";
    const commandName = "AssociateCreatedArtifactCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateCreatedArtifactRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateCreatedArtifactResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateCreatedArtifactCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AssociateCreatedArtifactCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateCreatedArtifactCommandOutput> {
    return deserializeAws_json1_1AssociateCreatedArtifactCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
