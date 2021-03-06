import { HoneycodeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HoneycodeClient.ts";
import { DescribeTableDataImportJobRequest, DescribeTableDataImportJobResult } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DescribeTableDataImportJobCommand,
  serializeAws_restJson1DescribeTableDataImportJobCommand,
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

export interface DescribeTableDataImportJobCommandInput extends DescribeTableDataImportJobRequest {}
export interface DescribeTableDataImportJobCommandOutput extends DescribeTableDataImportJobResult, __MetadataBearer {}

/**
 * <p>
 *             The DescribeTableDataImportJob API allows you to retrieve the status and details of a table data import job.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HoneycodeClient, DescribeTableDataImportJobCommand } from "../../client-honeycode/mod.ts";
 * // const { HoneycodeClient, DescribeTableDataImportJobCommand } = require("@aws-sdk/client-honeycode"); // CommonJS import
 * const client = new HoneycodeClient(config);
 * const command = new DescribeTableDataImportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTableDataImportJobCommandInput} for command's `input` shape.
 * @see {@link DescribeTableDataImportJobCommandOutput} for command's `response` shape.
 * @see {@link HoneycodeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeTableDataImportJobCommand extends $Command<
  DescribeTableDataImportJobCommandInput,
  DescribeTableDataImportJobCommandOutput,
  HoneycodeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeTableDataImportJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: HoneycodeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeTableDataImportJobCommandInput, DescribeTableDataImportJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HoneycodeClient";
    const commandName = "DescribeTableDataImportJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeTableDataImportJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeTableDataImportJobResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeTableDataImportJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeTableDataImportJobCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeTableDataImportJobCommandOutput> {
    return deserializeAws_restJson1DescribeTableDataImportJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
