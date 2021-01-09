import {
  MarketplaceCatalogClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MarketplaceCatalogClient.ts";
import { StartChangeSetRequest, StartChangeSetResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1StartChangeSetCommand,
  serializeAws_restJson1StartChangeSetCommand,
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

export type StartChangeSetCommandInput = StartChangeSetRequest;
export type StartChangeSetCommandOutput = StartChangeSetResponse & __MetadataBearer;

/**
 * <p>This operation allows you to request changes for your entities. Within a single
 *             ChangeSet, you cannot start the same change type against the same entity multiple times.
 *             Additionally, when a ChangeSet is running, all the entities targeted by the different
 *             changes are locked until the ChangeSet has completed (either succeeded, cancelled, or failed). If
 *             you try to start a ChangeSet containing a change against an entity that is already
 *             locked, you will receive a <code>ResourceInUseException</code>.</p>
 *
 *
 *         <p>For example, you cannot start the ChangeSet described in the <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_StartChangeSet.html#API_StartChangeSet_Examples">example</a> below because it contains two changes to execute the same change
 *             type (<code>AddRevisions</code>) against the same entity
 *             (<code>entity-id@1)</code>.</p>
 */
export class StartChangeSetCommand extends $Command<
  StartChangeSetCommandInput,
  StartChangeSetCommandOutput,
  MarketplaceCatalogClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartChangeSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MarketplaceCatalogClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartChangeSetCommandInput, StartChangeSetCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MarketplaceCatalogClient";
    const commandName = "StartChangeSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartChangeSetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartChangeSetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartChangeSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartChangeSetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartChangeSetCommandOutput> {
    return deserializeAws_restJson1StartChangeSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
