import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient.ts";
import { ListProjectsRequest, ListProjectsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListProjectsCommand,
  serializeAws_restJson1ListProjectsCommand,
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

export interface ListProjectsCommandInput extends ListProjectsRequest {}
export interface ListProjectsCommandOutput extends ListProjectsResponse, __MetadataBearer {}

/**
 * <p>Lists all of the DataBrew projects that are defined.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, ListProjectsCommand } from "../../client-databrew/mod.ts";
 * // const { DataBrewClient, ListProjectsCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const command = new ListProjectsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProjectsCommandInput} for command's `input` shape.
 * @see {@link ListProjectsCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListProjectsCommand extends $Command<
  ListProjectsCommandInput,
  ListProjectsCommandOutput,
  DataBrewClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListProjectsCommandInput) {
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
  ): Handler<ListProjectsCommandInput, ListProjectsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataBrewClient";
    const commandName = "ListProjectsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListProjectsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListProjectsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListProjectsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListProjectsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListProjectsCommandOutput> {
    return deserializeAws_restJson1ListProjectsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
