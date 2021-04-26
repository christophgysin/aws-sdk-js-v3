import { CodeGuruProfilerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruProfilerClient.ts";
import { GetFindingsReportAccountSummaryRequest, GetFindingsReportAccountSummaryResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetFindingsReportAccountSummaryCommand,
  serializeAws_restJson1GetFindingsReportAccountSummaryCommand,
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

export interface GetFindingsReportAccountSummaryCommandInput extends GetFindingsReportAccountSummaryRequest {}
export interface GetFindingsReportAccountSummaryCommandOutput
  extends GetFindingsReportAccountSummaryResponse,
    __MetadataBearer {}

/**
 * <p>
 *             Returns a list of
 *             <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_FindingsReportSummary.html">
 *                <code>FindingsReportSummary</code>
 *             </a>
 *             objects that contain analysis results for all profiling groups in your AWS account.
 *         </p>
 */
export class GetFindingsReportAccountSummaryCommand extends $Command<
  GetFindingsReportAccountSummaryCommandInput,
  GetFindingsReportAccountSummaryCommandOutput,
  CodeGuruProfilerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetFindingsReportAccountSummaryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeGuruProfilerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetFindingsReportAccountSummaryCommandInput, GetFindingsReportAccountSummaryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeGuruProfilerClient";
    const commandName = "GetFindingsReportAccountSummaryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetFindingsReportAccountSummaryRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetFindingsReportAccountSummaryResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetFindingsReportAccountSummaryCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetFindingsReportAccountSummaryCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetFindingsReportAccountSummaryCommandOutput> {
    return deserializeAws_restJson1GetFindingsReportAccountSummaryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
