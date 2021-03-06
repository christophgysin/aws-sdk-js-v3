import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient.ts";
import { PutDomainPermissionsPolicyRequest, PutDomainPermissionsPolicyResult } from "../models/models_0.ts";
import {
  deserializeAws_restJson1PutDomainPermissionsPolicyCommand,
  serializeAws_restJson1PutDomainPermissionsPolicyCommand,
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

export interface PutDomainPermissionsPolicyCommandInput extends PutDomainPermissionsPolicyRequest {}
export interface PutDomainPermissionsPolicyCommandOutput extends PutDomainPermissionsPolicyResult, __MetadataBearer {}

/**
 * <p>
 *         Sets a resource policy on a domain that specifies permissions to access it.
 *       </p>
 *          <p>
 *        When you call <code>PutDomainPermissionsPolicy</code>, the resource policy on the domain is ignored when evaluting permissions.
 *        This ensures that the owner of a domain cannot lock themselves out of the domain, which would prevent them from being
 *        able to update the resource policy.
 *      </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, PutDomainPermissionsPolicyCommand } from "../../client-codeartifact/mod.ts";
 * // const { CodeartifactClient, PutDomainPermissionsPolicyCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const command = new PutDomainPermissionsPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutDomainPermissionsPolicyCommandInput} for command's `input` shape.
 * @see {@link PutDomainPermissionsPolicyCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class PutDomainPermissionsPolicyCommand extends $Command<
  PutDomainPermissionsPolicyCommandInput,
  PutDomainPermissionsPolicyCommandOutput,
  CodeartifactClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutDomainPermissionsPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeartifactClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutDomainPermissionsPolicyCommandInput, PutDomainPermissionsPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeartifactClient";
    const commandName = "PutDomainPermissionsPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutDomainPermissionsPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutDomainPermissionsPolicyResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutDomainPermissionsPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutDomainPermissionsPolicyCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutDomainPermissionsPolicyCommandOutput> {
    return deserializeAws_restJson1PutDomainPermissionsPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
