import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient.ts";
import { GetReportGroupTrendInput, GetReportGroupTrendOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetReportGroupTrendCommand,
  serializeAws_json1_1GetReportGroupTrendCommand,
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

export type GetReportGroupTrendCommandInput = GetReportGroupTrendInput;
export type GetReportGroupTrendCommandOutput = GetReportGroupTrendOutput & __MetadataBearer;

export class GetReportGroupTrendCommand extends $Command<
  GetReportGroupTrendCommandInput,
  GetReportGroupTrendCommandOutput,
  CodeBuildClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetReportGroupTrendCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeBuildClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetReportGroupTrendCommandInput, GetReportGroupTrendCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeBuildClient";
    const commandName = "GetReportGroupTrendCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetReportGroupTrendInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetReportGroupTrendOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetReportGroupTrendCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetReportGroupTrendCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetReportGroupTrendCommandOutput> {
    return deserializeAws_json1_1GetReportGroupTrendCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
