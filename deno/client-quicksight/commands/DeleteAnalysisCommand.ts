import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient.ts";
import { DeleteAnalysisRequest, DeleteAnalysisResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DeleteAnalysisCommand,
  serializeAws_restJson1DeleteAnalysisCommand,
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

export type DeleteAnalysisCommandInput = DeleteAnalysisRequest;
export type DeleteAnalysisCommandOutput = DeleteAnalysisResponse & __MetadataBearer;

/**
 * <p>Deletes an analysis from Amazon QuickSight. You can optionally include a recovery window during
 *             which you can restore the analysis. If you don't specify a recovery window value, the
 *             operation defaults to 30 days. QuickSight attaches a <code>DeletionTime</code> stamp to
 *             the response that specifies the end of the recovery window. At the end of the recovery
 *             window, QuickSight deletes the analysis permanently.</p>
 *         <p>At any time before recovery window ends, you can use the <code>RestoreAnalysis</code>
 *             API operation to remove the <code>DeletionTime</code> stamp and cancel the deletion of
 *             the analysis. The analysis remains visible in the API until it's deleted, so you can
 *             describe it but you can't make a template from it.</p>
 *         <p>An analysis that's scheduled for deletion isn't accessible in the QuickSight console.
 *             To access it in the console, restore it. Deleting an analysis doesn't delete the
 *             dashboards that you publish from it.</p>
 */
export class DeleteAnalysisCommand extends $Command<
  DeleteAnalysisCommandInput,
  DeleteAnalysisCommandOutput,
  QuickSightClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteAnalysisCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteAnalysisCommandInput, DeleteAnalysisCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "DeleteAnalysisCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteAnalysisRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteAnalysisResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteAnalysisCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteAnalysisCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteAnalysisCommandOutput> {
    return deserializeAws_restJson1DeleteAnalysisCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
