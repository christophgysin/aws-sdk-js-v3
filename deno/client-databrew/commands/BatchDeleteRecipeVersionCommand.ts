import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient.ts";
import { BatchDeleteRecipeVersionRequest, BatchDeleteRecipeVersionResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1BatchDeleteRecipeVersionCommand,
  serializeAws_restJson1BatchDeleteRecipeVersionCommand,
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

export interface BatchDeleteRecipeVersionCommandInput extends BatchDeleteRecipeVersionRequest {}
export interface BatchDeleteRecipeVersionCommandOutput extends BatchDeleteRecipeVersionResponse, __MetadataBearer {}

/**
 * <p>Deletes one or more versions of a recipe at a time.</p>
 *
 *         <p>The entire request will be rejected if:</p>
 *         <ul>
 *             <li>
 *                 <p>The recipe does not exist.</p>
 *             </li>
 *             <li>
 *                 <p>There is an invalid version identifier in the list of versions.</p>
 *             </li>
 *             <li>
 *                 <p>The version list is empty.</p>
 *             </li>
 *             <li>
 *                 <p>The version list size exceeds 50.</p>
 *             </li>
 *             <li>
 *                 <p>The version list contains duplicate entries.</p>
 *             </li>
 *          </ul>
 *
 *         <p>The request will complete successfully, but with partial failures, if:</p>
 *         <ul>
 *             <li>
 *                 <p>A version does not exist.</p>
 *             </li>
 *             <li>
 *                 <p>A version is being used by a job.</p>
 *             </li>
 *             <li>
 *                 <p>You specify <code>LATEST_WORKING</code>, but it's being used by a
 *                     project.</p>
 *             </li>
 *             <li>
 *                 <p>The version fails to be deleted.</p>
 *             </li>
 *          </ul>
 *         <p>The <code>LATEST_WORKING</code> version will only be deleted if the recipe has no
 *             other versions. If you try to delete <code>LATEST_WORKING</code> while other versions
 *             exist (or if they can't be deleted), then <code>LATEST_WORKING</code> will be listed as
 *             partial failure in the response.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, BatchDeleteRecipeVersionCommand } from "../../client-databrew/mod.ts";
 * // const { DataBrewClient, BatchDeleteRecipeVersionCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const command = new BatchDeleteRecipeVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDeleteRecipeVersionCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteRecipeVersionCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class BatchDeleteRecipeVersionCommand extends $Command<
  BatchDeleteRecipeVersionCommandInput,
  BatchDeleteRecipeVersionCommandOutput,
  DataBrewClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchDeleteRecipeVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataBrewClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchDeleteRecipeVersionCommandInput, BatchDeleteRecipeVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataBrewClient";
    const commandName = "BatchDeleteRecipeVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchDeleteRecipeVersionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchDeleteRecipeVersionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchDeleteRecipeVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchDeleteRecipeVersionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchDeleteRecipeVersionCommandOutput> {
    return deserializeAws_restJson1BatchDeleteRecipeVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
