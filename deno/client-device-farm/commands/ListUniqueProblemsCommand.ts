import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient.ts";
import { ListUniqueProblemsRequest, ListUniqueProblemsResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListUniqueProblemsCommand,
  serializeAws_json1_1ListUniqueProblemsCommand,
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

export interface ListUniqueProblemsCommandInput extends ListUniqueProblemsRequest {}
export interface ListUniqueProblemsCommandOutput extends ListUniqueProblemsResult, __MetadataBearer {}

/**
 * <p>Gets information about unique problems, such as exceptions or crashes.</p>
 *         <p>Unique problems are defined as a single instance of an error across a run, job, or suite. For example,
 *             if a call in your application consistently raises an exception (<code>OutOfBoundsException in
 *                 MyActivity.java:386</code>), <code>ListUniqueProblems</code> returns a single entry instead of many
 *             individual entries for that exception.</p>
 */
export class ListUniqueProblemsCommand extends $Command<
  ListUniqueProblemsCommandInput,
  ListUniqueProblemsCommandOutput,
  DeviceFarmClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListUniqueProblemsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DeviceFarmClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListUniqueProblemsCommandInput, ListUniqueProblemsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "ListUniqueProblemsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListUniqueProblemsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListUniqueProblemsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListUniqueProblemsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListUniqueProblemsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListUniqueProblemsCommandOutput> {
    return deserializeAws_json1_1ListUniqueProblemsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
