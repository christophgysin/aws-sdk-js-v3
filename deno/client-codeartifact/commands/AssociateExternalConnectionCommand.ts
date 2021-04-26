import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient.ts";
import { AssociateExternalConnectionRequest, AssociateExternalConnectionResult } from "../models/models_0.ts";
import {
  deserializeAws_restJson1AssociateExternalConnectionCommand,
  serializeAws_restJson1AssociateExternalConnectionCommand,
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

export interface AssociateExternalConnectionCommandInput extends AssociateExternalConnectionRequest {}
export interface AssociateExternalConnectionCommandOutput extends AssociateExternalConnectionResult, __MetadataBearer {}

/**
 * <p>Adds an existing external connection to a repository. One external connection is allowed
 *       per repository.</p>
 *          <note>
 *             <p>A repository can have one or more upstream repositories, or an external connection.</p>
 *          </note>
 */
export class AssociateExternalConnectionCommand extends $Command<
  AssociateExternalConnectionCommandInput,
  AssociateExternalConnectionCommandOutput,
  CodeartifactClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateExternalConnectionCommandInput) {
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
  ): Handler<AssociateExternalConnectionCommandInput, AssociateExternalConnectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeartifactClient";
    const commandName = "AssociateExternalConnectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateExternalConnectionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateExternalConnectionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateExternalConnectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1AssociateExternalConnectionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateExternalConnectionCommandOutput> {
    return deserializeAws_restJson1AssociateExternalConnectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
