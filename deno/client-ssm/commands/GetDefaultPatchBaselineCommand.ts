import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient.ts";
import { GetDefaultPatchBaselineRequest, GetDefaultPatchBaselineResult } from "../models/models_1.ts";
import {
  deserializeAws_json1_1GetDefaultPatchBaselineCommand,
  serializeAws_json1_1GetDefaultPatchBaselineCommand,
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

export type GetDefaultPatchBaselineCommandInput = GetDefaultPatchBaselineRequest;
export type GetDefaultPatchBaselineCommandOutput = GetDefaultPatchBaselineResult & __MetadataBearer;

/**
 * <p>Retrieves the default patch baseline. Note that Systems Manager supports creating multiple default
 *    patch baselines. For example, you can create a default patch baseline for each operating
 *    system.</p>
 *          <p>If you do not specify an operating system value, the default patch baseline for Windows is
 *    returned.</p>
 */
export class GetDefaultPatchBaselineCommand extends $Command<
  GetDefaultPatchBaselineCommandInput,
  GetDefaultPatchBaselineCommandOutput,
  SSMClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetDefaultPatchBaselineCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDefaultPatchBaselineCommandInput, GetDefaultPatchBaselineCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "GetDefaultPatchBaselineCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDefaultPatchBaselineRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetDefaultPatchBaselineResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDefaultPatchBaselineCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetDefaultPatchBaselineCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDefaultPatchBaselineCommandOutput> {
    return deserializeAws_json1_1GetDefaultPatchBaselineCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
